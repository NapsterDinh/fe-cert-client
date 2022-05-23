import CountDownTimer from "app/components/CountDownTimer";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

const QuestionList = ({ data, currentOrder, statTime, submissionArray, 
    selected, saveSelectedChoice }) => {
  return (
    <div className="sticky-sidebar">
      <div className="post-index hidden-sm-down">
        <div className="section-title-line">
          <h5 className="text-uppercase">Question List</h5>
          <CountDownTimer
            targetDate={
              new Date(
                new Date(statTime).getTime() + parseInt(data?.time) * 1000 - 1
              )
            }
          />
        </div>
        <div className="status-answer d-flex">
          <span>Available</span>
          <span className="answered">Answered</span>
          {/* <span className='not-yet'>Not yet</span> */}
        </div>
        <hr></hr>
        <div className="question-container d-flex">
          {data?.questions?.map((item, index) => (
            <QuestionItem
              submissionArray={submissionArray}
              key={item._id}
              item={item}
              index={index}
              currentOrder={currentOrder}
              selected={selected}
              saveSelectedChoice={saveSelectedChoice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const QuestionItem = ({ item, index, currentOrder, 
    submissionArray, selected, saveSelectedChoice }) => {
  let { idExam } = useParams();
  const history = useHistory();
  const temp = submissionArray?.find((t) => t.question_id === item._id);
  let itemClassName = "list-item";
  if (temp !== undefined) {
    itemClassName += " answered";
  }
  if (index + 1 === currentOrder) {
    itemClassName += " selected";
  }

  return (
    <span
      onClick={async () => {
        await saveSelectedChoice(selected);
        history.push(`/exams/${idExam}/attempt?question=${index + 1}`);
      }}
      className={itemClassName}
    >
      <span className="text text-test">{index + 1}</span>
    </span>
  );
};

export default QuestionList;
