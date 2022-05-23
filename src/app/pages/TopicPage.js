import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Container } from '@themesberg/react-bootstrap';
import { Accordion } from "react-bootstrap";
import { topics } from 'app/data/topic';

const TopicPage = () => {
    const [data, setData] = useState('')
    const { slugTopic } = useParams()

    useEffect(() => {
        let temp = [...topics]
        setData(temp.find(item => item.slug === `/${slugTopic}`))
    }, [])

    const countTotalLessons = () => {
        if(data?.id !== undefined)
        {
            return data.sections.reduce((prev, cur, curIndex) => prev?.lessons?.length + cur?.lessons?.length, 0)
        }
        return 0
    }

    return (
        <>
            {
                data?.id !== undefined &&
                <Container className='container-card'>
                    <div className="layout-container-top module">
                        <h1 className="title">{data.title}</h1>
                        <span className="sub-title">{data.description}</span>
                        <h3 className="what-learning-title">What you'll learn ?</h3>
                        <div className='what-learning-title-container'>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span>Develop problem-solving skills</span>
                            </div>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span>Become proficient in programming</span>
                            </div>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span> Attain an in-depth knowledge in computing systems</span>
                            </div>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span>Understand the fundamental principles of computing</span>
                            </div>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span>Cultivate general intellectual skills in liberal arts education in relation to computing</span>
                            </div>
                            <div className='what-learning-item'>
                                <FontAwesomeIcon icon={faCirclePlay} />
                                <span>Gain a broad exposure to topics in computing and its related disciplines</span>
                            </div>
                        </div>
                    </div>
                    <div className="layout-container-body module">
                        <div className='d-flex justify-content-between'>
                            <h3 className="what-learning-title">Topic Content</h3>
                            <span className='total-sections'>{data?.sections.length} sections</span>
                            <span className='icon-circle'>•</span>
                            <span className='total-lectures'>{countTotalLessons()} Lectures</span>
                        </div>
                        <Accordion>
                            {
                                data?.sections?.map((item, index) =>
                                (
                                    <Accordion.Item key={item.id} eventKey={item.id}>
                                        <Accordion.Header>{`${index + 1}. ${item.title}`}</Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                item?.lessons?.map((item2, index2) =>
                                                (
                                                    <a href={`/section${item2.slug}`}>{`${index + 1}.${index2 + 1} ${item2.title}`}</a>
                                                ))
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                                )
                            }
                        </Accordion>
                    </div>
                </Container>
            }
        </>
    )
}

export default TopicPage;