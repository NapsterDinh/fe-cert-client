import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';

const data1 = [
    {
        id: '123',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '124',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '125',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '126',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '127',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '128',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '129',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
    {
        id: '1210',
        tag: 'Updated',
        dateCreated: '22/4/2022 13:25 PM',
        title: '[4168] Fall 2014 Afternoon Question 5',
        contributor: 'Tantu'
    },
]

const ExamSchedule = () => {
    const [ data, setData ] = useState([]) 

    useEffect(() => {
        setData(data1)
    }, [])

    return ( 
    <Container className='d-flex justify-content-center container-news'>
        <div className="layout-container-top news d-flex">
            <h3 className="title">FE Examination Latest Inform</h3>
            <a href='/news' className="see-more">See more
                <FontAwesomeIcon className='mx-3' icon={faArrowRight}/>
            </a>
        </div>
        <div className="layout-container-body exam">
        {
            Array.isArray(data) && data.length > 0 && 
            data?.map((item, index) => <ExamScheduleItem key={item.id} item={item} />)
        }
        </div>
    </Container> 
    );
}

const ExamScheduleItem = ({item}) => {
    return ( 
        <>
        <li className='d-flex exam-item'>
            <div className='time-exam'>October 2</div>
            <div className='content-exam'>
                <a href="" className='title-news'>The Fundamental Information Technology Engineer Examination was held in the fall of the first year of Reiwa.</a>
            </div>
        </li>
        </>
     );
}
 
export default ExamSchedule;


