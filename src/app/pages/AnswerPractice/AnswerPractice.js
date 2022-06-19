import {
  Button,
  Col,
  Container,
  FormCheck,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import { Alert, Tabs, Tag, Tooltip } from "antd";
import Chart from "app/components/Chart/Chart";
import { ProgressTrackWidget } from "app/components/Widgets";
import { getResultByIdUserExam } from "app/core/apis/exam";
import { getAllTopic } from "app/core/apis/topic";
import { updateExam } from "app/store/examReducer";
import {
  countAnswerRatePerTopic,
  countPercentAnswerRate,
  countPercentTopicInExam,
} from "app/utils/ArrayUtils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "./AnswerPractice.css";
const { TabPane } = Tabs;

const AnswerPractice = () => {
  const [questionShow, setQuestionShow] = useState("");
  const location = useLocation();
  const [topic, setTopic] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.exam.exam);
  const currentOrder =
    new URLSearchParams(location.search).get("question") === null
      ? 1
      : parseInt(new URLSearchParams(location.search).get("question"));
  let { hashIdExamSession } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await getResultByIdUserExam({
          userExam: hashIdExamSession,
        });
        const response1 = await getAllTopic();
        setData({
          ...response?.data?.exam.result.exam,
          questions: response?.data?.exam.result?.exam?.questions
            ?.filter((t) =>
              response?.data?.exam.newSubmissions?.some(
                (u) => u.question_id === t._id
              )
            )
            .map((item) => ({
              ...item,
              question: decodeURIComponent(escape(window.atob(item?.question))),
              explanation: decodeURIComponent(
                escape(window.atob(item?.explanation))
              ),
            })),
          submissions: response?.data?.exam.newSubmissions,
          result: response?.data?.exam.result,
        });
        setTopic(response1?.data?.topic);
      } catch (error) {}
    })();
  }, []);

  const setData = (data) => {
    dispatch(updateExam(data));
  };

  useEffect(() => {
    if (data !== "") {
      if (currentOrder === null) {
        //get index = 0 or question 1
        setQuestionShow({
          ...data.questions[0],
          first: true,
          index: 0,
          last: false,
        });
      } else {
        //get based on valueQuestion
        setQuestionShow({
          ...data.questions[currentOrder - 1],
          first: false,
          index: currentOrder,
          last: currentOrder === data.questions.length,
        });
      }
    }
  }, [data]);

  useEffect(() => {
    if (data !== "") {
      if (currentOrder === null) {
        //get index = 0 or question 1
        setQuestionShow({
          ...data.questions[0],
          first: true,
          index: 0,
          last: false,
        });
      } else {
        //get based on valueQuestion
        setQuestionShow({
          ...data.questions[currentOrder - 1],
          first: currentOrder === 1,
          index: currentOrder,
          last: currentOrder === data.questions.length,
        });
      }
    }
  }, [location.search]);

  return (
    <>
      <Container className="d-flex container-card">
        <Tabs
          defaultActiveKey="1"
          destroyInactiveTabPane
          className="tabs-answer"
        >
          <TabPane tab="Detail Answer Quiz" key="1">
            <Row className="d-flex mt-3">
              <Col className="layout-container-body answer quiz">
                <QuestionList data={data} currentOrder={currentOrder} />
              </Col>
              <Col className="layout-container-top quiz">
                <DetailQuestion
                  item={questionShow}
                  currentOrder={currentOrder}
                  data={data}
                  setData={setData}
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Answer result statistics" key="2">
            <Row>
              <Col className="mb-4">
                <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                  <h3>Topic division</h3>
                  <Chart
                    width={450}
                    {...countPercentTopicInExam(data?.questions, topic)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <h3>Answer rate</h3>
                  <Chart
                    width={450}
                    {...countPercentAnswerRate(
                      data?.questions,
                      data?.submissions
                    )}
                  />
                </div>
                {data?.questions !== undefined &&
                  topic.length !== 0 &&
                  data?.submissions !== undefined && (
                    <ProgressTrackWidget
                      data={countAnswerRatePerTopic(
                        data?.questions,
                        topic,
                        data?.submissions
                      )}
                    />
                  )}
              </Col>
              <Col className="mb-4">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Result</th>
                      <th>Question</th>
                      <th>Topic</th>
                    </tr>
                  </thead>
                  <tbody className="result-report">
                    {data?.submissions?.map((item, index) => {
                      const temp = data?.questions.find(
                        (t) => item._id === t.question_id
                      );
                      let result = "";
                      if (item?.answers === "") {
                        result = "No Answer";
                      } else {
                        if (item.correct) {
                          result = "Correct";
                        } else {
                          result = "Incorrect";
                        }
                      }
                      return (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td className="td-correct-wrong">
                            {result === "No Answer" && (
                              <Tag color="#108ee9">{result}</Tag>
                            )}
                            {result === "Correct" && (
                              <Tag color="#87d068">{result}</Tag>
                            )}
                            {result === "Incorrect" && (
                              <Tag color="#f50">{result}</Tag>
                            )}
                          </td>
                          <td className="td-question">
                            <Tooltip title={temp.question}>
                              {temp.question}
                            </Tooltip>
                          </td>
                          <td>
                            {topic?.find((t) => t._id === temp.topic)?.title}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Container>
    </>
  );
};

const QuestionList = ({ data, currentOrder }) => {
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);

  useEffect(() => {
    if (data === undefined) {
      setTotalCorrectAnswer(0);
    } else {
      let total = 0;
      data?.submissions?.map((item) => {
        if (item.correct) {
          total++;
        }
      });
      setTotalCorrectAnswer(total);
    }
  }, [data]);

  return (
    <>
      <div className="sticky-sidebar">
        <div className="post-index hidden-sm-down">
          <div className="section-title-line">
            <h5 className="text-uppercase">Question List</h5>
            <h2>{`${totalCorrectAnswer} / ${data?.questions?.length ?? 0}`}</h2>
          </div>
          <div className="status-answer d-flex">
            <span className="correct">Corrected</span>
            <span className="incorrect">Incorrected</span>
          </div>
          <hr></hr>
          <div className="question-container d-flex">
            {data?.questions?.map((item, index) => {
              return (
                <QuestionItem
                  key={item._id + index}
                  item={item}
                  index={index}
                  currentOrder={currentOrder}
                  submissionsItem={data?.submissions?.find(
                    (t) => t.question_id === item._id
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const QuestionItem = ({ item, index, currentOrder, submissionsItem }) => {
  const history = useHistory();
  const location = useLocation();

  let itemClassName = "list-item";
  if (submissionsItem?.correct) {
    itemClassName += " correct";
  } else {
    itemClassName += " incorrect";
  }
  if (index + 1 === currentOrder) {
    itemClassName += " selected";
  }

  return (
    <span
      onClick={() => history.push(`${location.pathname}?question=${index + 1}`)}
      className={itemClassName}
    >
      <span className="text text-test">{index + 1}</span>
    </span>
  );
};

const DetailQuestion = ({
  item,
  saveSelectedChoice,
  data,
  setData,
  currentOrder,
}) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <div className="count-question">
        <h1>Question {item.index}</h1>
        <div
          className="question-content"
          dangerouslySetInnerHTML={{ __html: item?.question }}
        ></div>
        <hr></hr>
        <span>Choose the correct answer</span>
        <ul className="choose-answer answer-mode">
          {item?.choices?.map((item1, index1) => (
            <li
              key={item1._id}
              className={
                data?.hasShowRightAnswer &&
                data?.questions?.find((t) => t._id === item._id)?.answer ===
                  item1._id &&
                "correct-choice"
              }
            >
              <FormCheck
                defaultChecked={
                  data?.submissions?.find((t) => t.question_id === item._id)
                    ?.answers === item1._id
                }
                label={item1.label}
                name={`group${item._id}`}
                type="radio"
                id={`inline-radio-${item1._id}`}
              />
            </li>
          ))}
        </ul>
        <hr></hr>
        {data?.hasShowExplanation && item?.explanation !== "" && (
          <>
            <h5>Explanation</h5>
            <Alert message={item?.explanation} type="info" />
            <hr></hr>
          </>
        )}
        <div className="question-action">
          <Button
            onClick={() => {
              history.push(`${location.pathname}?question=${item.index - 1}`);
            }}
            disabled={item.first}
            className="btn-back"
          >
            Go back to previous
          </Button>
          <Button
            disabled={item.last}
            onClick={() => {
              history.push(`${location.pathname}?question=${item.index + 1}`);
            }}
          >
            Next question
          </Button>
          <Button
            onClick={() => (window.location = `/exams/${data?._id}`)}
            className="btn-submit"
          >
            Try Test Again
          </Button>
        </div>
      </div>
    </>
  );
};

export default AnswerPractice;
