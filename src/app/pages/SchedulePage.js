import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Table, Button, Container } from '@themesberg/react-bootstrap';
import { schedule } from 'app/data/schedule';
import { BootyPagination } from 'app/components/ScheduleTable';
import { LoadingTable } from 'app/components/PreloaderNoProps'



const SchedulePage = () => {
    const [data, setData] = useState([])
    const [location, setLocation] = useState([])
    const [pending, setPending] = React.useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(schedule)
            let temp = []
            temp = [...schedule].map(item => { return item.location })
            setLocation(Array.from(new Set(temp)))
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [])

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true
        },
        {
            name: "name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Location",
            selector: (row) => row.location,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => row.createdAt,
            sortable: true,
        },
        {
            button: true,
            cell: (row, index, column, id) => {
                const idExam = id.replace('cell-5-', '')
                const item = data[idExam]

                return(
                    <a href={`/exams/${item?.slug}`}>View Details</a>
                )
            }
        }
    ];

    return (
        <Container className='schedule-container container-card'>
            <div className="layout-container-top">
                <h1 className="title text-center">FE Certification Examination</h1>
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
                <DataTable
                    columns={columns}
                    data={schedule}
                    defaultSortFieldID={1}
                    progressPending={pending}
                    progressComponent={<LoadingTable />}
                    pagination
                    paginationComponent={BootyPagination}
                />
            </div>
        </Container>
    );
}

export default SchedulePage;