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
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "@themesberg/react-bootstrap";
import { Tooltip, Alert } from "antd";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import InnerHTML from "dangerously-set-html-content";
import React from "react";
import { useSelector } from "react-redux";
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

  return (
    <>
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
                  {exam?.content !== undefined && (
                    <div
                      style={{
                        whiteSpace: "pre-line",
                        color: "white",
                      }}
                      dangerouslySetInnerHTML={{
                        __html:decodeURIComponent(escape(window.atob(exam?.content))),
                      }}
                    ></div>
                  )}
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

export const BannerPricing = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="banner-answer banner-pricing"
      >
        <div className="container_common">
          <div className="content_common">
            <div className="ifm">
              <Container className="d-flex banner-answer-container banner-pricing-container">
                <h3>PRICING</h3>
                <h1>
                  Get Started Now, {`\n`}
                  Pick a Plan Later
                </h1>
                <p>Choose a plan that works best for you</p>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
