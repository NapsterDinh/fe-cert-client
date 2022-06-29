import { PlusOutlined } from "@ant-design/icons";
import { Col, Container, Nav, Row } from "@themesberg/react-bootstrap";
import { Avatar, Divider, message, Tooltip } from "antd";
import Profile3 from "app/assets/img/team/profile-picture-3.jpg";
import Banner from "app/components/Banner/Banner";
import { Routes } from "app/routes";
import { generateAvatar } from "app/utils/StringUtils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import "./Profile.css";
import StatementHistory from "./StatementHistory/StatementHistory";
import TestResult from "./TestResult/TestResult";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { getAllAbilityPricing } from "app/core/apis/pricing";

const ProfilePage = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [listAbilities, setListAbilities] = useState([]);
  const user = useSelector((state) => state.persist.user?.user);
  console.log(user);
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
  useEffect(() => {
    (async () => {
      try {
        const response = await getAllAbilityPricing();
        setListAbilities(response?.data?.ability);
      } catch (error) {}
    })();
  }, []);
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
                  {generateAvatar(user?.user?.name)}
                </Avatar>
                {/* <img
                  style={{ width: "300px", borderRadius: "50%" }}
                  src={Profile3}
                  alt="avatar"
                /> */}
              </div>
              <div
                className="mx-4 
              flex-col
              justify-content-center
              short-user-info d-flex align-center align-items-center"
                style={{ flexDirection: "column" }}
              >
                <h2 style={{ width: "100%" }}>{user?.user?.name}</h2>
                {user?.user?.role?.name === "admin" ? (
                  <Tooltip
                    title={() => {
                      return listAbilities?.map((item) => (
                        <p style={{ marginBottom: "0px" }}>{item?.name}</p>
                      ));
                    }}
                  >
                    <h4>
                      Admin <FontAwesomeIcon icon={faCircleQuestion} />
                    </h4>
                  </Tooltip>
                ) : (
                  user?.pricing !== undefined && (
                    <div>
                      <h4>
                        Pricing:{" "}
                        <strong
                          style={{ fontWeight: "700", marginRight: "10px" }}
                        >
                          {user?.pricing?.pricing?.name}
                        </strong>
                        <Tooltip
                          title={() => {
                            return user?.pricing?.abilities?.map((item) => {
                              const temp = listAbilities?.find(
                                (t) => t?._id === item
                              );
                              return (
                                <p style={{ marginBottom: "0px" }}>
                                  {temp?.name}
                                </p>
                              );
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faCircleQuestion} />
                        </Tooltip>
                      </h4>
                      <p>
                        Expired time:{" "}
                        <strong style={{ fontWeight: "700" }}>
                          {new Date(user?.pricing?.expireDate).toLocaleString()}{" "}
                        </strong>
                      </p>
                    </div>
                  )
                )}
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
                to={"/user/profile/tests-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Test History
              </NavLink>
              <NavLink
                to={"/user/profile/statement-history"}
                className="nav-link btn"
                activeClassName="active"
              >
                Statement History
              </NavLink>
            </Nav>
          </div>
        </Container>
      </div>
      <div className="profile-content-container">
        <Container>
          <Switch>
            <Route
              path={"/user/profile/tests-history"}
              render={(props) => <TestResult {...props} />}
            />
            <Route
              path={"/user/profile/statement-history"}
              render={(props) => <StatementHistory {...props} />}
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
