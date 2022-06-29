import { Button, Container, Modal } from "@themesberg/react-bootstrap";
import { Checkbox, Tooltip, Popconfirm } from "antd";
import { getAllExam } from "app/core/apis/exam";
import { createPractice } from "app/core/apis/practice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TableExam from "./TablesExam/TablesExam";

const CheckboxGroup = Checkbox.Group;

const SchedulePage = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [show, setShow] = useState(false);
  const [checkedList, setCheckedList] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();
  const currentDoingExam = useSelector(
    (state) => state?.exam?.currentDoingExam
  );
  const user = useSelector((state) => state.persist.user.user);
  console.log(user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await getAllExam("exam");
        setData(
          response?.data?.exam
            ?.filter((item) => item.isPublic === "Public")
            ?.sort(
              (a, b) =>
                new Date(b.eventDate).getTime() -
                new Date(a.eventDate).getTime()
            )
            .map((item, index) => ({
              ...item,
              id: item._id,
              isSessionMorning: item.isSessionMorning ? "Morning" : "Afternoon",
            }))
        );
        setPending(false);
      } catch (error) {}
    })();
  }, []);

  const onChangeCheckbox = (list) => {
    setCheckedList(list);
  };

  const startPraticing = async () => {
    try {
      const response = await createPractice({
        exams: checkedList,
      });
      if (response?.data) {
        history.push(
          `/exams/${response?.data?.exam?.exam}/attempt?type=normal_practice`
        );
      } else {
        alert(response.error);
      }
    } catch (error) {}
  };

  return (
    <Container className="schedule-container">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mixing Exam Test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "red" }}>{error}</p>
            <CheckboxGroup
              className="checkbox-exam-tab1"
              value={checkedList}
              onChange={onChangeCheckbox}
              options={data?.map((item) => ({
                label: item.title,
                value: item._id,
              }))}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {currentDoingExam?.exam !== undefined ? (
              <Tooltip title="You need to complete the previous test before taking this test again">
                <Button variant="primary">Submit</Button>
              </Tooltip>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  if (checkedList.length < 2) {
                    setError("You need to choose at least 2 exam");
                    return;
                  }
                  startPraticing();
                  handleClose();
                }}
              >
                Submit
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </>
      <div className="layout-container-top">
        <h1 className="title text-center mb-4">FE Certification Examination</h1>
      </div>
      <div className="layout-container-body">
        <TableExam data={data} />
      </div>
      {user === "" ? (
        <Popconfirm
          title="You need to login to use this feature. Login now ?"
          onConfirm={() => (window.location = "/login")}
          okText="Yes"
          cancelText="No"
        >
          <div className="d-flex justify-content-center my-4">
            <Button>Doing Mixing Exam Tests</Button>
          </div>
        </Popconfirm>
      ) : (
        <div className="d-flex justify-content-center my-4">
          <Button onClick={() => handleShow()}>Doing Mixing Exam Tests</Button>
        </div>
      )}
    </Container>
  );
};

export default SchedulePage;
