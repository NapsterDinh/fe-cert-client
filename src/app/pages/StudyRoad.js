import React, { useState, useEffect } from 'react';
import { Container } from '@themesberg/react-bootstrap';
import StudyRoadItem from 'app/components/StudyRoadItem';
import { topics, topicsDescription } from 'app/data/topic';

const StudyRoad = () => {
    const [ data, setData ] = useState('')

    useEffect(() => {
        setData(topics)
    }, [])

    return ( 
    <Container className='container-card'>
        <div className="layout-container-top study-road">
            <h1 className="title">Study Road for becoming a FE Engineer!!!</h1>
            <div dangerouslySetInnerHTML={{ __html: topicsDescription }}>

            </div>
        </div>
        <div className="layout-container-body study-road">
        {
            Array.isArray(data) && data.length > 0 && 
            data?.map((item, index) => <StudyRoadItem key={item.id} index={index} item={item} />)
        }
        </div>
    </Container> 
    );
}
 
export default StudyRoad;