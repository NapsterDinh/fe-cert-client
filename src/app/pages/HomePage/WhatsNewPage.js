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
const WhatsNewPage = () => {
    const [ data, setData ] = useState([]) 

    useEffect(() => {
        setData(data1)
    }, [])

    return ( 
    <Container className='d-flex justify-content-center container-news'>
        <div className="layout-container-top news d-flex">
            <h3 className="title">What's new</h3>
            <a href='/news' className="see-more">See more
                <FontAwesomeIcon className='mx-3' icon={faArrowRight}/>
            </a>
        </div>
        <div className="layout-container-body news">
        {
            Array.isArray(data) && data.length > 0 && 
            data?.map((item, index) => <WhatsNewItem key={item.id} item={item} />)
        }
        </div>
    </Container> 
    );
}

const WhatsNewItem = ({item}) => {
    return ( 
        <>
        <li className='d-flex news-item'>
            <div className='tag-news'>Update</div>
            <div className='time-news'>3 hours</div>
            <div className='content-news'>
                <a href="" className='title-news'>[4168] Fall 2014 Afternoon Question 5</a>
                <span className='contributor'>Contributor: <a className='contributor-href' href=''>Tan tu</a></span>
            </div>
        </li>
        </>
     );
}
 
 
export default WhatsNewPage;