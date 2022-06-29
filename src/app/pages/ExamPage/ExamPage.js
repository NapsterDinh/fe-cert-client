import {
  Alert,
  Button,
  Col,
  Container,
  Modal,
} from "@themesberg/react-bootstrap";
import { LineChart } from "app/components/Chart/Chart";
import {
  checkExamByIdAndUser,
  createSession,
  getAllExam,
  getExamById,
  getHistoryByIdExam,
  getStatisticByIDExam,
  predictNextResultExam,
} from "app/core/apis/exam";
import { Spin, Popconfirm, Popover } from "antd";
import { getTimeAndPercentCorrectByID } from "app/utils/ArrayUtils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { submitResult } from "app/core/apis/exam";

const ExamPage = () => {
  const [data, setData] = useState("");
  const [examList, setExamList] = useState([]);
  const { idExam } = useParams();
  const location = useLocation();
  const [statusDoingExam, setStatusDoingExam] = useState("");
  const [historyExam, setHistoryExam] = useState("");
  const [predictNextResult, setPredictNextResult] = useState("");
  const [statistic, setStatistic] = useState("");
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.persist.user.user);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const response = await getExamById(idExam);
        if (
          response.status === 500 ||
          (response.status === 200 &&
            response?.data?.exam.exam[0].isPublic === "Private")
        ) {
          window.location = "/404";
        }
        const response1 = await getAllExam("exam");
        if (user?.user?.id !== undefined) {
          const response2 = await checkExamByIdAndUser(idExam, user?.user.id);
          setStatusDoingExam(response2?.data?.exam);
        }

        const response5 = await getStatisticByIDExam(idExam);
        const reponse3 = await getHistoryByIdExam(idExam);
        setData(response?.data?.exam.exam[0]);
        setExamList(
          response1?.data?.exam.filter((item) => item._id !== idExam)
        );
        setStatistic(response5?.data?.exam);

        setHistoryExam(reponse3?.data?.exam);
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    if (historyExam !== "") {
      setLoading(false);
    }
  }, [historyExam]);

  const handleCancel = async () => {
    try {
      const res = await submitResult({
        exam: statusDoingExam.exam,
      });
      if (res.status === 200) {
        const response = await createSession({
          exam: data?._id,
          user: user?.user.id,
        });
        if (response?.data) {
          window.location = `/exams/${data?._id}/attempt`;
        } else {
          alert(response.error);
        }
      }
    } catch (error) {}
  };

  const handleOk = () => {
    // keep doing
    history.push(`/exams/${statusDoingExam.exam?._id}/attempt?question=1`);
  };

  const handlePredicNextResult = async () => {
    try {
      const response = await predictNextResultExam(idExam);
      if (response.status === 200) {
        setPredictNextResult(response?.data?.exam?.result);
      }
      setShow(true);
    } catch (error) {}
  };

  const handleCreateSession = async () => {
    if (statusDoingExam.status === "failed") {
      setVisible(true);
      return;
    }
    try {
      const response = await createSession({
        exam: idExam,
        user: user?.user.id,
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="next-result-prediction"
      >
        <Modal.Header closeButton>
          <Modal.Title>Next Result Prediction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {historyExam !== "" &&
            historyExam !== [] &&
            predictNextResult !== "" && (
              <LineChart
                {...getTimeAndPercentCorrectByID(
                  historyExam,
                  predictNextResult
                )}
                title="Result and Prediction"
              />
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Col className="layout-container-top exam mx-3">
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <Spin size="large" />
          </div>
        )}

        {!loading && (
          <div className="practice-all-exam">
            <h1 className="text-center">{data?.title}</h1>
            <div className="tag-container"></div>
            <Alert key={`info`} variant={`success`}>
              {data?.content !== undefined && (
                <div
                  style={{
                    whiteSpace: "pre-line",
                    color: "#0f5132",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: decodeURIComponent(
                      escape(window.atob(data?.content))
                    ),
                  }}
                ></div>
              )}
            </Alert>

            <div className="d-flex justify-content-between">
              <h3 style={{ lineHeight: "84px" }}>
                Statistics about this examination:
              </h3>
              {user !== "" && (
                <div className="my-4 d-flex justify-content-end">
                  {statusDoingExam?.total >= 5 &&
                    user?.pricing?.abilities?.includes(
                      "62b290ea2c130943d42c8998"
                    ) && (
                      <Button
                        variant="secondary"
                        onClick={handlePredicNextResult}
                      >
                        View Next Result Prediction
                      </Button>
                    )}
                </div>
              )}
            </div>
            {statusDoingExam?.total <= 5 && (
              <p>
                You need to test this exam at least 5 times to open result
                prediction
              </p>
            )}

            <div className="alert d-flex" style={{ border: "solid 1px" }}>
              <Col>
                <p style={{ fontWeight: "700" }}>Event Date:</p>
                <p style={{ fontWeight: "700" }}>Number of applicant: </p>
                <p style={{ fontWeight: "700" }}>Number of examinees: </p>
                <p style={{ fontWeight: "700" }}>Pass Rate: </p>
              </Col>
              <Col>
                <p>{new Date(statistic?.eventDate).toLocaleString()}</p>
                <p>{statistic?.numberOfApplicants} people</p>
                <p>{statistic?.numberOfExaminees} times</p>
                <p>
                  {statistic?.passRate === null ? 0 : statistic?.passRate} %
                </p>
              </Col>
            </div>
            <div className="text-center">
              {user?.user?.id !== undefined && statusDoingExam?.total !== 0 && (
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
              <Popconfirm
                title="You need to complete the previous test before taking this test again"
                visible={visible}
                okText={`Continue the previous test session`}
                cancelText={`Start new test session`}
                onConfirm={handleOk}
                okButtonProps={{
                  loading: confirmLoading,
                }}
                onCancel={handleCancel}
              >
                <Button
                  variant="primary"
                  onClick={handleCreateSession}
                  className="test-now"
                >
                  {statusDoingExam?.total > 0 ? "Test again" : "Test now"}
                </Button>
              </Popconfirm>
            </div>
          </div>
        )}

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
      {examList !== "" && examList !== [] && (
        <Col className="layout-container-body exam">
          <ExamList data={data} location={location} examList={examList} />
        </Col>
      )}
    </Container>
  );
};

const ExamList = ({ data, examList }) => {
  return (
    <div className="sticky-sidebar">
      <div className="post-index hidden-sm-down">
        <div className="section-title-line" style={{ paddingLeft: "27px" }}>
          <h5 className="text-uppercase">List other exam</h5>
          <hr className="filler-line"></hr>
        </div>
        <ul className="content-outline list-unstyled">
          {examList?.map((item, index) => (
            <li
              key={item.id}
              className="content-outline__item content-outline__item--level-3"
            >
              <a href={`/exams/${item._id}`} className="link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamPage;
