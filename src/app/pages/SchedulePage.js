import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Table, Button, Container } from '@themesberg/react-bootstrap';
import { schedule } from 'app/data/schdule';

const SchedulePage = () => {
    const [ data, setData] = useState([])
    const [ location, setLocation ] = useState([])

    useEffect(() => {
        setData(schedule)
        let temp = []
        temp = [...schedule].map(item => {return item.location})
        setLocation(Array.from(new Set(temp)))
    }, [])

    return ( 
        <Container className='schedule-container container-card'>
            <div className="layout-container-top">
                <h1 className="title text-center">Schedule examination</h1>
                <div className='filter-action'>
                    <Form.Select aria-label="Select session">
                        <option>Select session</option>
                        <option value="1">Morning</option>
                        <option value="2">Afternoon</option>
                    </Form.Select>
                    <Form.Select aria-label="Select location">
                        <option>Select location</option>
                        {
                            location?.map(item => (
                                <option value={item}>{item}</option>
                            ))
                        }
                    </Form.Select>
                    <Form.Control type="date" name="startDate" placeholder="Ending date" />
                    <Form.Control type="date" name="endDate" placeholder="Starting date" />
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <Button variant='primary'>
                        Search
                    </Button>
                </div>
            </div>
            <div className="layout-container-body">
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Session</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.sessions}</td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div className='d-flex justify-content-center my-3'>
                <Button variant='primary'>
                        See more
                </Button>
            </div>
            
            </div>
        </Container> 
     );
}
 
export default SchedulePage ;