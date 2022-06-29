import { Col, Container } from "@themesberg/react-bootstrap";
import { Spin } from "antd";
import { getCurrentExam, submitResult, updateAnswer } from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import DetailQuestion from "./DetailQuestionsQuiz";
import QuestionList from "./QuestionListQuiz";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateLoading } from "app/store/loadingReducer";

const DoingQuiz = () => {
  const [data, setData] = useState("");
  const [questionShow, setQuestionShow] = useState("");
  const history = useHistory();
  const [submissionArray, setSubmissionArray] = useState([]);
  const [statTime, setStartTime] = useState("");
  const [selected, setSelected] = useState(undefined);
  const location = useLocation();
  const dispatch = useDispatch();
  const [isTimeOut, setIsTimeOut] = useState(false);
  const isFirstCallSubmit = useRef(false);
  let { idExam, practice } = useParams();

  const currentOrder =
    new URLSearchParams(location.search).get("question") === null
      ? 1
      : parseInt(new URLSearchParams(location.search).get("question"));

  const saveSelectedChoice = async (selectedChoice) => {
    if (selectedChoice !== undefined) {
      const submmission = {
        exam: idExam,
        submissions: {
          answers: selectedChoice,
          question_id: questionShow._id,
        },
      };

      try {
        await updateAnswer(submmission);
        let temp = [...submissionArray];
        temp.push({
          answers: selectedChoice,
          question_id: questionShow._id,
        });
        setSubmissionArray(temp);
      } catch (error) {}
    }
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch(updateLoading(true));
        let response = "";
        // if (practice === 0) {
        //   response = await getCurrentExam(idExam);
        // } else {
        //   response = await getCurrentRandomSession();
        // }
        response = await getCurrentExam(idExam);
        setData({
          ...response?.data?.exam.exam,
          questions: response?.data?.exam.exam?.questions.map((item) => ({
            ...item,
            question: decodeURIComponent(escape(window.atob(item?.question))),
            explanation: decodeURIComponent(
              escape(window.atob(item?.explanation))
            ),
          })),
        });
        setSubmissionArray(response?.data?.exam.submissions);
        setStartTime(response?.data?.exam?.createdAt);
      } catch (error) {
      } finally {
        dispatch(updateLoading(false));
      }
    })();
  }, []);

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
  }, [data, currentOrder]);

  const onSubmitExam = async () => {
    setIsTimeOut(true);
    const submmission = {
      exam: idExam,
    };
    try {
      if (isFirstCallSubmit.current === false) {
        isFirstCallSubmit.current = true;
        const res = await submitResult(submmission);
        history.push(`/exams/${idExam}/attempt/${res.data.exam}/result`);
      }
    } catch (error) {}
  };

  return (
    <>
      <Spin
        className="spin-doing-quiz"
        style={{ maxHeight: "none" }}
        spinning={isTimeOut}
        tip="Loading..."
      >
        <Container className="d-flex container-card">
          <Col className="layout-container-body quiz">
            <QuestionList
              submissionArray={submissionArray}
              saveSelectedChoice={saveSelectedChoice}
              selected={selected}
              data={data}
              idExam={idExam}
              currentOrder={currentOrder}
              statTime={statTime}
              onSubmitExam={onSubmitExam}
            />
          </Col>
          <Col className="layout-container-top quiz">
            <DetailQuestion
              idExam={idExam}
              item={questionShow}
              saveSelectedChoice={saveSelectedChoice}
              data={data}
              submissionArray={submissionArray}
              setSubmissionArray={setSubmissionArray}
              selected={selected}
              setSelected={setSelected}
            />
          </Col>
        </Container>
      </Spin>
    </>
  );
};

export default DoingQuiz;
