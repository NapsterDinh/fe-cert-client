import { PlusOutlined } from '@ant-design/icons';
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Col,
  Container, Dropdown, Nav,
  Row
} from "@themesberg/react-bootstrap";
import { Divider, message, Upload } from "antd";
import dogGif from 'app/assets/gif/dogLoading.gif';
import Banner from "app/components/Banner/Banner";
import { Routes } from "app/routes";
import React, { useState } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import "./Profile.css";
import TestResult from "./TestResult/TestResult";


const ProfilePage = ({ name }) => {
  
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

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
      {loading ? <img src={dogGif} alt="avatar"/> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
      </div>
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
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div className="mx-4 short-user-info d-flex align-center align-items-center">
                <h2>Dinh Tan Tu</h2>
              </div>
            </Col>
            <Col></Col>
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
            <Dropdown>
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
            </Dropdown>
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
                    />
                  )}
                />
                <Route {...Routes.OverviewPage} />
              </Switch>
            </Card.Body>
          </Card>
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
