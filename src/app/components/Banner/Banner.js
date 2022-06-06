import {
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import { Modal, Tooltip, Tag } from "antd";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import { trafficShares } from "app/data/charts";
import InnerHTML from "dangerously-set-html-content";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CircleChartWidget } from "../Widgets";
import "./Banner.css";

const Banner = ({ name }) => {
  const isHome =
    name === "Home Page" ? "pageBanner_def home" : "pageBanner_def";

  return (
    <div className={isHome} style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="container_common">
        <div className="content_common">
          <div className="ifm">
            {name === "Home Page" ? (
              <div className="w3-content learntocodecontent">
                <h1 className="learntocodeh1">Learn about FE</h1>
                <h3 className="learntocodeh3">
                  With the world's largest web developer site.
                </h3>
                <br></br>
                <div className="container-form">
                  <input
                    type="text"
                    placeholder="Search our tutorials"
                    id="search2"
                  ></input>
                  <button type="button" id="learntocode_searchbtn">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <h4>
                  <a href="/studyRoad">Not Sure Where To Begin?</a>
                </h4>
              </div>
            ) : (
              <div className="name">{name}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BannerAnswerQuiz = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const exam = useSelector((state) => state.exam.exam);
  const totalCorrectAnswer = () => {
    let total = 0;
    if (exam !== "") {
      exam?.submissions?.map((item) => {
        if (item.correct) {
          total++;
        }
      });
    }
    return total;
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Modal
        className="modal-result-report"
        title="Result Report"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Row>
          <Col className="mb-4" xs={12} sm={6} xl={4}>
            <div style={{ marginBottom: "20px" }}>
              <CircleChartWidget
                title="Segmentation of topics"
                data={trafficShares}
              />
            </div>
            <ProgressTrackWidget />
          </Col>
          <Col xs={12} sm={6} xl={4} className="mb-4">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Result</th>
                  <th>Question</th>
                  <th>Topic</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody className="result-report">
                {exam?.questions?.map((item, index) => {
                  const temp = exam?.submissions.find(
                    (t) => item._id === t.question_id
                  );
                  let result = "";
                  if (temp === undefined) {
                    result = "No Answer";
                  } else {
                    if (temp.correct) {
                      result = "Correct";
                    } else {
                      result = "Incorrect";
                    }
                  }
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td className="td-correct-wrong">
                        {result === "No Answer" && (
                          <Tag color="#108ee9">{result}</Tag>
                        )}
                        {result === "Correct" && (
                          <Tag color="#87d068">{result}</Tag>
                        )}
                        {result === "Incorrect" && (
                          <Tag color="#f50">{result}</Tag>
                        )}
                      </td>
                      <td className="td-question">
                        <Tooltip title={item.question}>{item.question}</Tooltip>
                      </td>
                      <td>@mdo</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Modal>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="banner-answer"
      >
        <div className="container_common">
          <div className="content_common">
            <div className="ifm">
              <Container className="d-flex banner-answer-container">
                <Col lg={9}>
                  <h2>{exam?.title}</h2>
                  <p className="description">{exam?.description}</p>
                  <InnerHTML html={exam?.content?.toString()} />
                  <p>Rules:</p>
                  <p className="maximum-test">
                    Maximum number of tests: {exam?.maxTotalTests}
                  </p>
                  <p className="requirement">{`Requirement: ${Math.round(
                    exam?.questions?.length / 2
                  )}/${exam?.questions?.length}`}</p>
                </Col>
                <Col lg={3} className="col-right-answer-exam">
                  <div className="circle">
                    <div className="content-circle">
                      <h1>{`${totalCorrectAnswer()}/${
                        exam?.questions?.length
                      }`}</h1>
                      <h2>{exam?.result?.isPassed ? "Passed" : "Failed"}</h2>
                      <Tooltip title="Test again">
                        <FontAwesomeIcon
                          onClick={() =>
                            (window.location = `/exams/${exam?._id}`)
                          }
                          icon={faCirclePlay}
                        />
                      </Tooltip>
                    </div>
                  </div>
                  <div>
                    <Button onClick={showModal} variant="outlined">
                      Detail Result Report
                    </Button>
                  </div>
                </Col>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";

    return (
      <Row className={`align-items-center ${extraClassName}`}>
        {/* <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col> */}
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Result by major topic</h5>
      </Card.Header>
      <Card.Body>
        <Progress
          title="Rocket - SaaS Template"
          color="purple"
          icon={faBootstrap}
          percentage={34}
        />
        <Progress
          title="Pixel - Design System"
          color="danger"
          icon={faAngular}
          percentage={60}
        />
        <Progress
          title="Spaces - Listings Template"
          color="tertiary"
          icon={faVuejs}
          percentage={45}
        />
        <Progress
          title="Stellar - Dashboard"
          color="info"
          icon={faReact}
          percentage={35}
        />
        <Progress
          last
          title="Volt - Dashboard"
          color="purple"
          icon={faBootstrap}
          percentage={34}
        />
      </Card.Body>
    </Card>
  );
};

export default Banner;
