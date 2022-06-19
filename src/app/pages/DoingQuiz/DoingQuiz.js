import { Col, Container } from "@themesberg/react-bootstrap";
import { getCurrentExam, updateAnswer } from "app/core/apis/exam";
import { getCurrentRandomSession } from "app/core/apis/practice";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailQuestion from "./DetailQuestionsQuiz";
import QuestionList from "./QuestionListQuiz";

const DoingQuiz = () => {
  const [data, setData] = useState("");
  const [questionShow, setQuestionShow] = useState("");
  const [submissionArray, setSubmissionArray] = useState([]);
  const [statTime, setStartTime] = useState("");
  const [selected, setSelected] = useState(undefined);
  const location = useLocation();
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
        let response = "";
        if (practice === 0) {
          response = await getCurrentExam(idExam);
        } else {
          response = await getCurrentRandomSession();
        }
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
      } catch (error) {}
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

  return (
    <Container className="d-flex container-card">
      <Col className="layout-container-body quiz">
        <QuestionList
          submissionArray={submissionArray}
          saveSelectedChoice={saveSelectedChoice}
          selected={selected}
          data={data}
          currentOrder={currentOrder}
          statTime={statTime}
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
  );
};

export default DoingQuiz;
