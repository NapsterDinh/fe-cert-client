import { PlusOutlined } from "@ant-design/icons";
import { Col, Container, Nav, Row } from "@themesberg/react-bootstrap";
import { Divider, message, Upload, Avatar } from "antd";
import dogGif from "app/assets/gif/dogLoading.gif";
import Banner from "app/components/Banner/Banner";
import { Routes } from "app/routes";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import PracticeResult from "./PracticeResult/PracticeResult";
import Profile3 from "app/assets/img/team/profile-picture-3.jpg";
import StatementHistory from "./StatementHistory/StatementHistory";
import MixingExamTest from "./MixingExamTest/MixingExamTest";
import { generateAvatar } from 'app/utils/StringUtils'
import "./Profile.css";
import TestResult from "./TestResult/TestResult";

const ProfilePage = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const user = useSelector((state) => state.persist.user?.user);
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <img src={Profile3} alt="avatar" /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      ></div>
    </div>
  );
  return (
    <>
      <Banner name={name} />
      <div className="profile-container">
        <Container>
          <Row>
            <Col lg={8} className="info-container d-flex">
              <div className="avatar-container">
                <Avatar
                className="avatar-private-profile"
                size={300}
                  style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                >
                  {generateAvatar(user?.name)}
                </Avatar>
                {/* <img
                  style={{ width: "300px", borderRadius: "50%" }}
                  src={Profile3}
                  alt="avatar"
                /> */}
              </div>
              <div className="mx-4 short-user-info d-flex align-center align-items-center">
                <h2>{user?.name}</h2>
              </div>
            </Col>
          </Row>
          <Divider style={{ margin: "15px 0" }} />
          <div className="d-flex justify-content-between align-items-center">
            <Nav className="me-auto">
              <NavLink
                exact
                to={"/user/profile/overview"}
                className="nav-link btn"
                activeClassName="active"
              >
                Overview
              </NavLink>
              <NavLink
                to={"/user/profile/exam-tests-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Exam Test History
              </NavLink>
              <NavLink
                to={"/user/profile/practice-tests-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Practice Tests History
              </NavLink>
              <NavLink
                to={"/user/profile/mixing-exam-tests-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Mixing Exam Tests History
              </NavLink>
              <NavLink
                to={"/user/profile/statement-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Statement History
              </NavLink>
            </Nav>
            {/* <Dropdown>
              <Dropdown.Toggle
                style={{
                  padding: "5px 10px",
                  backgroundColor: "white",
                  color: "#262B40",
                }}
                id="dropdown-basic"
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edit profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </Container>
      </div>
      <div className="profile-content-container">
        <Container>
          <Switch>
            <Route
              path={"/user/profile/exam-tests-history"}
              render={(props) => <TestResult {...props} />}
            />
            <Route
              path={"/user/profile/practice-tests-history"}
              render={(props) => <PracticeResult {...props} />}
            />
            <Route
              path={"/user/profile/statement-history"}
              render={(props) => <StatementHistory {...props} />}
            />
            <Route
              path={"/user/profile/mixing-exam-tests-history"}
              render={(props) => <MixingExamTest {...props} />}
            />
            <Route {...Routes.OverviewPage} />
          </Switch>
        </Container>
      </div>
    </>
  );
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

export default ProfilePage;
