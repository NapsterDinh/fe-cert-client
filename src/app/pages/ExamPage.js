import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Col, Button } from "@themesberg/react-bootstrap";
import {
  getExamById,
  getAllExam,
  checkExamByIdAndUser,
  createSession,
} from "app/core/apis/exam";
import { Alert } from "@themesberg/react-bootstrap";
import { useSelector } from "react-redux";

const ExamPage = () => {
  const [data, setData] = useState("");
  const [examList, setExamList] = useState([]);
  const { idExam } = useParams();
  const location = useLocation();
  const [statusDoingExam, setStatusDoingExam] = useState("");

  const user = useSelector((state) => state.persist.user.user);

  useEffect(() => {
    (async () => {
      try {
        const response = await getExamById(idExam);
        const response1 = await getAllExam();
        const response2 = await checkExamByIdAndUser(idExam, user.id);
        setData(response?.data?.exam.exam[0]);
        setExamList(response1?.data?.exam);
        setStatusDoingExam(response2?.data?.exam);
      } catch (error) {}
    })();
  }, []);

  const handleCreateSession = async () => {
    if (statusDoingExam.status === "failed") {
      alert("hoan tat bai thi truoc khi lam bai thi moi");
      return;
    }
    try {
      const response = await createSession({
        exam: idExam,
        user: user.id,
      });
      if (response?.data) {
        window.location = `/exams/${data?._id}/attempt`;
      } else {
        alert(response.error);
      }
    } catch (error) {}
  };

  return (
    <Container className="d-flex container-card justify-content-center">
      <Col className="layout-container-top exam mx-3">
        <div className="practice-all-exam">
          <h1 className="text-center">{data?.title}</h1>
          <div className="tag-container"></div>
          <p className="exam-description">{data?.description}</p>
          <Alert key={`info`} variant={`success`}>
            <pre
              style={{
                whiteSpace: "pre-line",
                color: "#0f5132",
              }}
              className="content-description"
            >
              {data?.content}
            </pre>
            <p>Rules:</p>
            <p>Maximum number of tests: {data?.maxTotalTests}</p>
          </Alert>
          <div className="text-center">
            {statusDoingExam?.total !== 0 && (
              <p
                style={{
                  color: "red",
                  marginTop: "20px",
                  marginBottom: "0px",
                }}
              >
                Number of attempts to test: {statusDoingExam?.total}
              </p>
            )}
            <Button
              variant="primary"
              onClick={handleCreateSession}
              className="test-now"
            >
              {statusDoingExam?.total > 0 ? "Test again" : "Test now"}
            </Button>
          </div>
        </div>
        {/* <p className="text-center practice-below">Or practice with each objective below</p>
        <ul className="practice-with-each-section">
            {
                data?.examsList?.map((item, index) => (
                    <PracticeItem key={item.id} item={item} index={index} />
                ))
            }
        </ul>
        <div className="text-center mb-4 x">
            <Button variant="primary" className='make-full'>Make full practice</Button>
          </div> */}
      </Col>
      <Col className="layout-container-body exam">
        <ExamList data={data} location={location} />
      </Col>
    </Container>
  );
};

const ExamList = ({ data, location }) => {
  return (
    <div className="sticky-sidebar">
      <div class="post-index hidden-sm-down">
        <div class="section-title-line">
          <h5 class="text-uppercase">Exam List</h5>
          <hr class="filler-line"></hr>
        </div>
        <h5>{data?.title}</h5>
        <ul class="content-outline list-unstyled">
          {data?.examsList?.map((item, index) => (
            <li
              key={item.id}
              class="content-outline__item content-outline__item--level-3"
            >
              <a href={`#exams-item${index}`} class="link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <h5>Get Certificate</h5>
      </div>
    </div>
  );
};

const PracticeItem = ({ item, index }) => {
  return (
    <li className="practice-item" id={`exams-item${index}`}>
      <h5>{item?.title}</h5>
      <div className="d-flex justify-content-between practice-item-top">
        <div className="practice-weight">Weight: {item?.weight}%</div>
        <div className="practice-count-question">
          Questions (En):{item?.questions}
        </div>
        <Button
          variant="secondary"
          className="practice-now"
          onClick={() => (window.location = item?.slug)}
        >
          Practice
        </Button>
      </div>
      <div
        class="md-contents"
        dangerouslySetInnerHTML={{ __html: item?.description }}
      ></div>
    </li>
  );
};

export default ExamPage;
