import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { Container, Button, Col, FormCheck } from '@themesberg/react-bootstrap';
import { quizResult as quiz } from 'app/data/quiz'
import { ModalConfirmBeforeSubmit } from 'app/components/Modal';

const AnswerQuiz = () => {
    const [data, setData] = useState("");
    const [questionShow, setQuestionShow] = useState('')
    const location = useLocation();
    const currentOrder = new URLSearchParams(location.search).get("question") === null
        ? 1 : parseInt(new URLSearchParams(location.search).get("question"));

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
                    data={data}
                    setData={setData}
                />
            </Col>
        </Container>
    );
}

const QuestionList = ({ data, currentOrder }) => {
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0)

    useEffect(() => {
        if(data === undefined)
        {
            setTotalCorrectAnswer(0)
        }
        else
        {
            let total = 0
            data?.submissions?.map(item => {
                if(item.correct)
                {
                    total++
                }
            })
            setTotalCorrectAnswer(total)
        }
    }, [data])

    return (
        <div className="sticky-sidebar">
            <div className="post-index hidden-sm-down">
                <div className="section-title-line">
                    <h5 className="text-uppercase">Question List</h5>
                    <h2>{`${totalCorrectAnswer} / ${data?.exam?.totalQuestions}`}</h2>
                </div>
                <div className='status-answer d-flex'>
                    <span className='correct'>Corrected</span>
                    <span className='incorrect'>Incorrected</span>
                </div>
                <hr></hr>
                <div className="question-container d-flex">
                    {
                        data?.questions?.map((item, index) => (
                            <QuestionItem key={item.id} item={item} index={index} currentOrder={currentOrder}
                                submissionsItem={data?.submissions?.find(t => t.question_id === item.id)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const QuestionItem = ({ item, index, currentOrder, submissionsItem }) => {
    const history = useHistory()
    let itemClassName = 'list-item'
    if (submissionsItem.correct) {
        itemClassName += ' correct'
    }
    else {
        itemClassName += ' incorrect'
    }
    if (index + 1 === currentOrder) {
        itemClassName += ' selected'
    }

    return (
        <span
            onClick={() => history.push(`/exams/fe-exam1-morning-session/attempt/X7axMXJbyv/result?question=${index + 1}`)}
            className={itemClassName}>
            <span className="text text-test">{index + 1}</span>
        </span>
    )
}

const DetailQuestion = ({ item, saveSelectedChoice, data, setData, currentOrder }) => {
    const history = useHistory()

    return (
        <>
            <div className="count-question">
                <h1>Question {item.index}</h1>
                <div className='question-content' dangerouslySetInnerHTML={{ __html: item?.question }}></div>
                <hr></hr>
                <span>Choose the correct answer</span>
                <ul className="choose-answer answer-mode">
                    {
                        item?.choices?.map((item1, index1) => (
                            <li key={item1.id}>
                                <FormCheck
                                    defaultChecked={data?.submissions?.find(t => t.question_id === item.id)?.answers === item1.id}
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
                <div className='question-action'>
                    <Button
                        onClick={() => {

                            history.push(`/exams/fe-exam1-morning-session/attempt/X7axMXJbyv/result?question=${item.index - 1}`)
                        }}
                        disabled={item.first}
                        className='btn-back'>Go back to previous</Button>
                    <Button
                        disabled={item.last}
                        onClick={() => {

                            history.push(`/exams/fe-exam1-morning-session/attempt/X7axMXJbyv/result?question=${item.index + 1}`)
                        }}>Next question</Button>
                    <Button
                        onClick={() => {


                        }}
                        className='btn-submit'
                    >Try Test Again</Button>
                </div>
            </div>
        </>
    );
};

export default AnswerQuiz;