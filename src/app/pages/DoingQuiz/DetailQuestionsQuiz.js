import { Button, FormCheck } from "@themesberg/react-bootstrap";
import { ModalConfirmBeforeSubmit } from "app/components/Modal";
import { submitResult, updateAnswer } from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const DetailQuestion = ({
  idExam,
  item,
  saveSelectedChoice,
  data,
  submissionArray,
  setSubmissionArray,
  selected,
  setSelected,
}) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [warning, setWarning] =
    useState(` Please sure you answered all of questions. After submission, you can't change any your choice of questions
    Are you sure to submit ?`);

  const rejectSelectedChoice = async () => {
    let index = [...submissionArray].findIndex(
      (t) => t.question_id === item._id
    );
    if (index !== -1) {
      const submmission = {
        exam: idExam,
        submissions: {
          answers: null,
          question_id: item._id,
        },
      };
      try {
        await updateAnswer(submmission);
        setSelected(undefined);
      } catch (error) {}

      let tempQuestions = [...submissionArray];

      tempQuestions.splice(index, 1);

      setSubmissionArray(tempQuestions);
    }
  };

  const onSubmitExam = async () => {
    const submmission = {
      exam: idExam,
    };
    try {
      const res = await submitResult(submmission);
      window.location = `/exams/${idExam}/attempt/${res.data.exam}/result`;
    } catch (error) {}
  };

  useEffect(() => {
    const temp = submissionArray?.find((t) => t.question_id === item._id);
    if (temp !== undefined) {
      setSelected(temp.answers);
    } else {
      setSelected(undefined);
    }
  }, [submissionArray, item]);

  return (
    <>
      <ModalConfirmBeforeSubmit
        show={modalShow}
        onHide={() => setModalShow(false)}
        nameExam={data?.exam?.title}
        onSubmit={onSubmitExam}
        warning={warning}
      />
      <div className="count-question">
        <h1>Question {item.index}</h1>
        <div
          className="question-content"
          dangerouslySetInnerHTML={{
            __html: item?.question,
          }}
        ></div>
        <hr></hr>
        <span>Choose the correct answer</span>
        <ul className="choose-answer">
          {item?.choices?.map((item1, index1) => {
            return (
              <li key={item1._id}>
                <FormCheck
                  checked={selected === item1._id}
                  onChange={() => setSelected(item1._id)}
                  label={item1.label}
                  name={`group${item._id}`}
                  type="radio"
                  id={`inline-radio-${item1._id}`}
                />
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <a
          onClick={async () => await rejectSelectedChoice()}
          className="clear-answer"
        >
          Clear Answer
        </a>
        <div className="question-action">
          <Button
            onClick={async () => {
              await saveSelectedChoice(selected);
              history.push(
                `/exams/${idExam}/attempt?question=${item.index - 1}`
              );
            }}
            disabled={item.first}
            className="btn-back"
          >
            Go back to previous
          </Button>
          <Button
            disabled={item.last}
            onClick={async () => {
              await saveSelectedChoice(selected);
              history.push(
                `/exams/${idExam}/attempt?question=${item.index + 1}`
              );
            }}
          >
            Save and next question
          </Button>
          <Button
            onClick={async () => {
              await saveSelectedChoice(selected);
              if (
                submissionArray?.length === data?.questions &&
                submissionArray?.some((t) => t.answer === null)
              ) {
                setWarning(
                  "You has to finish all of question in this exam before submitting. Are you sure to keep submitting ?"
                );
              }
              setModalShow(true);
            }}
            className="btn-submit"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailQuestion;
