import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Nav, Row } from "@themesberg/react-bootstrap";
import { Divider, Tag } from "antd";
import avatar from "app/assets/img/team/profile-picture-1.jpg";
import Banner from "app/components/Banner/Banner";
import React from "react";
import { NavLink, Route, Switch, Link } from "react-router-dom";
import { useMemo } from "react";
import { listTestResult } from "app/data/quiz";
import { GridActionsCellItem } from "@mui/x-data-grid";
import "./Profile.css";
import TestResult from "./TestResult/TestResult";

const ProfilePage = ({ name }) => {
  const columns = useMemo(
    () => [
      {
        field: "title",
        type: "string",
        headerName: "Exam",
      },
      {
        field: "mode",
        type: "string",
        headerName: "Mode",
      },
      {
        field: "results",
        type: "string",
        headerName: "Results"
      },
  {
    field: "numberTest",
    type: "string",
    headerName: "Number of test",
  },
  {
    field: "createdAt",
    type: "dateTime",
    headerName: "Start Time",
  },
  {
    field: "detail",
    headerName: "Detail",
    type: "actions",
    align: "center",
    getActions: (params) => [
      <Link to="/">
        <FontAwesomeIcon icon={faEye} className="me-2" />
      </Link>,
    ],
      },
    ],
[]
  );
return (
  <>
    <Banner name={name} />
    <div className="profile-container">
      <Container>
        <Row>
          <Col lg={8} className="info-container d-flex">
            <div className="avatar-container">
              <img src={avatar} alt="avatar" />
            </div>
            <div>
              <h2>Dinh Tan Tu</h2>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Divider />
        <div>
          <Nav className="me-auto">
            <NavLink
              exact
              to={"/user/profile/activity-logs"}
              className="nav-link btn"
              activeClassName="active"
            >
              Activity Logs
            </NavLink>
            <NavLink
              to={"/user/profile/tests"}
              className="nav-link btn"
              activeClassName="active"
            >
              Tests
            </NavLink>
            <NavLink
              to={"/user/profile/contributed-contents"}
              className="nav-link btn"
              activeClassName="active"
            >
              Contributed Contents
            </NavLink>
          </Nav>
        </div>
      </Container>
    </div>
    <div className="profile-content-container">
      <Container>
        <Card
          border="light"
          className="table-wrapper table-responsive shadow-sm"
        >
          <Card.Body className="pt-0">
            <Switch>
              <Route
                path={"/user/profile/tests"}
                render={(props) => (
                  <TestResult
                    {...props}
                    title={columns}
                    data={listTestResult}
                  />
                )}
              />
            </Switch>
          </Card.Body>
        </Card>
      </Container>
    </div>
  </>
);
};

export default ProfilePage;
