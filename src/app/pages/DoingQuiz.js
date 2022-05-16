import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import { Container, Button, Col, FormCheck } from '@themesberg/react-bootstrap';
import CountDownTimer from 'app/components/CountDownTimer'
import { quiz2 as quiz } from 'app/data/quiz'
import { ModalConfirmBeforeSubmit } from 'app/components/Modal';

const DoingQuiz = () => {
  const [data, setData] = useState("");
  const [questionShow, setQuestionShow] = useState('')
  const location = useLocation();
  const currentOrder = new URLSearchParams(location.search).get("question") === null
    ? 1 : parseInt(new URLSearchParams(location.search).get("question"));

  const saveSelectedChoice = (selectedChoice) => {
    let tempQuestions = [...data.questions]

    tempQuestions.splice(currentOrder - 1, 1, {
      ...tempQuestions[currentOrder - 1],
      choiceId: selectedChoice
    })

    setData({
      ...data,
      questions: tempQuestions
    })
  }

  useEffect(() => {
    if (currentOrder === null) {
      //get index = 0 or question 1
      setQuestionShow({
        ...quiz.questions[0],
        first: true,
        index: 0,
        last: false
      })
    }
    else {
      //get based on valueQuestion
      setQuestionShow({
        ...quiz.questions[currentOrder - 1],
        first: false,
        index: currentOrder,
        last: currentOrder === quiz.questions.length
      })
    }
    setData(quiz);
  }, []);

  useEffect(() => {
    if (data !== '') {
      if (currentOrder === null) {
        //get index = 0 or question 1
        setQuestionShow({
          ...data.questions[0],
          first: true,
          index: 0,
          last: false
        })
      }
      else {
        //get based on valueQuestion
        setQuestionShow({
          ...data.questions[currentOrder - 1],
          first: currentOrder === 1,
          index: currentOrder,
          last: currentOrder === data.questions.length
        })
      }
    }
  }, [location.search])

  return (
    <Container className="d-flex container-card">
      <Col className="layout-container-body quiz">
        <QuestionList data={data} currentOrder={currentOrder} />
      </Col>
      <Col className="layout-container-top quiz">
        <DetailQuestion 
          item={questionShow}
          currentOrder={currentOrder}
          saveSelectedChoice={saveSelectedChoice}
          data={data}
          setData={setData}
        />
      </Col>
    </Container>
  );
}

const QuestionList = ({ data, currentOrder }) => {
  return (
    <div className="sticky-sidebar">
      <div className="post-index hidden-sm-down">
        <div className="section-title-line">
          <h5 className="text-uppercase">Question List</h5>
          <CountDownTimer targetDate={new Date(new Date().getTime() + 150 * 60 * 1000 - 1)} />
        </div>
        <div className='status-answer d-flex'>
          <span>Available</span>
          <span className='answered'>Answered</span>
          {/* <span className='not-yet'>Not yet</span> */}
        </div>
        <hr></hr>
        <div className="question-container d-flex">
          {
            data?.questions?.map((item, index) => (
              <QuestionItem key={item.id} item={item} index={index} currentOrder={currentOrder} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

const QuestionItem = ({ item, index, currentOrder }) => {
  const history = useHistory()
  let itemClassName = 'list-item'
  if (item.choiceId !== undefined) {
    itemClassName += ' answered'
  }
  if (index + 1 === currentOrder) {
    itemClassName += ' selected'
  }

  return (
    <span
      onClick={() => history.push(`/exams/fe-exam1-morning-session/attempt?question=${index + 1}`)}
      className={itemClassName}>
      <span className="text text-test">{index + 1}</span>
    </span>
  )
}

const DetailQuestion = ({ item, saveSelectedChoice, data, setData, currentOrder }) => {
  const history = useHistory()
  const [ modalShow, setModalShow ] = useState(false)
  const [selected, setSelected] = useState(undefined)
  const [ warning, setWarning] = useState(` Please sure you answered all of questions. After submission, you can't change any your choice of questions
  Are you sure to submit ?`)

  useEffect(() => {
    if (item.choiceId !== undefined) {
      
      setSelected(item.choiceId)
    }
    else {
      setSelected(undefined)
    }
  }, [item])

  const rejectSelectedChoice = () => {
    let tempQuestions = [...data.questions]

    tempQuestions.splice(currentOrder - 1, 1, {
      ...tempQuestions[currentOrder - 1],
      choiceId: undefined
    })

    setSelected(undefined)

    setData({
      ...data,
      questions: tempQuestions
    })
  }

  return (
    <>
     <ModalConfirmBeforeSubmit 
        show={modalShow}
        onHide={() => setModalShow(false)}
        nameExam={data?.exam?.title}
        onSubmit={() => window.location = '/exams/fe-exam1-morning-session/attempt/X7axMXJbyv/result'}
        warning={warning}
        />
      <div className="count-question">
        <h1>Question {item.index}</h1>
        <div className='question-content' dangerouslySetInnerHTML={{ __html: item?.question }}></div>
        <hr></hr>
        <span>Choose the correct answer</span>
        <ul className="choose-answer">
          {
            item?.choices?.map((item1, index1) => (
              <li key={item1.id}>
                <FormCheck
                  defaultChecked={item.answerId === item1.id}
                  checked={selected === item1.id}
                  onChange={() => setSelected(item1.id)}
                  label={item1.label}
                  name={`group${item.id}`}
                  type='radio'
                  id={`inline-radio-${item1.id}`}
                />
              </li>
            ))
          }
        </ul>
        <hr></hr>
        <span
          onClick={() => rejectSelectedChoice()}
          className='clear-answer'>Clear Answer</span>
        <div className='question-action'>
          <Button
            onClick={() => {
              saveSelectedChoice(selected)
              history.push(`/exams/fe-exam1-morning-session/attempt?question=${item.index - 1}`)
            }}
            disabled={item.first}
            className='btn-back'>Go back to previous</Button>
          <Button
            disabled={item.last}
            onClick={() => {
              saveSelectedChoice(selected)
              history.push(`/exams/fe-exam1-morning-session/attempt?question=${item.index + 1}`)
            }}>Save and next question</Button>
          <Button
            onClick={() => {
              saveSelectedChoice(selected)
              if(data.questions.some(t => t.choiceId === undefined))
              {
                setWarning('You has to finish all of question in this exam before submitting. Are you sure to keep submitting ?')
              }
              setModalShow(true)
            }}
            className='btn-submit'
          >Submit</Button>
        </div>
      </div>
    </>
  );
};

export default DoingQuiz;