import { Button, Container, Form } from "@themesberg/react-bootstrap";
import { LoadingTable } from "app/components/PreloaderNoProps";
import { BootyPagination } from "app/components/ScheduleTable";
import { schedule } from "app/data/schedule";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getAllExam } from "app/core/apis/exam";
import TableExam from "./TablesExam/TablesExam";

const SchedulePage = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  const [pending, setPending] = React.useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllExam("exam");
        setData(
          response?.data?.exam
            ?.filter((item) => item.isPublic === "Public")
            .map((item) => ({
              ...item,
              id: item._id,
            }))
        );
        setPending(false);
      } catch (error) {}
    })();
  }, []);

  return (
    <Container className="schedule-container container-card">
      <div className="layout-container-top">
        <h1 className="title text-center">FE Certification Examination</h1>
        {/* <div className="filter-action">
          <Form.Select aria-label="Select session">
            <option>Select session</option>
            <option value="1">Morning</option>
            <option value="2">Afternoon</option>
          </Form.Select>
          <Form.Select aria-label="Select location">
            <option>Select location</option>
            {location?.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <Form.Control
            type="date"
            name="startDate"
            placeholder="Ending date"
          />
          <Form.Control
            type="date"
            name="endDate"
            placeholder="Starting date"
          />
        </div>
        <div className="d-flex justify-content-center my-3">
          <Button variant="primary">Search</Button>
        </div> */}
      </div>
      <div className="layout-container-body">
        <TableExam data={data} />
      </div>
    </Container>
  );
};

export default SchedulePage;
