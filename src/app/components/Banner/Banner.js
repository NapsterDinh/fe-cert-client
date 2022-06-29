import {
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "@themesberg/react-bootstrap";
import { Tooltip } from "antd";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import React from "react";
import { useSelector } from "react-redux";
import useBreadcrumb from "app/utils/useBreadCrumb";
import { PageHeader, Breadcrumb, Spin } from "antd";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Banner.css";

const Banner = ({ name }) => {
  const isHome =
    name === "Home Page" ? "pageBanner_def home" : "pageBanner_def";
  const breadcrumbItems = useBreadcrumb();
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
              </div>
            ) : (
              <>
                <Col span={18}>
                  <PageHeader
                    className="site-page-header"
                    title={name}
                    breadcrumbRender={() => (
                      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
                    )}
                  />
                </Col>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BannerAnswerQuiz = () => {
  const location = useLocation();
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
    <Spin spinning={exam === ""} tip="Loading..." size="large">
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="banner-answer"
      >
        <div className="container_common">
          <div className="content_common">
            <div className="ifm">
              <Container
                className="banner-answer-container"
                style={{ paddingBottom: "10px" }}
              >
                <Breadcrumb style={{ paddingTop: "50px" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {exam?.type === "normal_practice" && (
                      <a href="/user/profile/tests-history">
                        Mixing Exam Tests
                        {location.pathname.includes("result") ? " Result" : ""}
                      </a>
                    )}
                    {exam?.type === "exam" && (
                      <a href="/user/profile/tests-history">
                        Exam Tests
                        {location.pathname.includes("result") ? " Result" : ""}
                      </a>
                    )}
                    {exam?.type === "topic_practice" && (
                      <a href="/user/profile/tests-history">
                        Practice Tests
                        {location.pathname.includes("result") ? " Result" : ""}
                      </a>
                    )}
                  </Breadcrumb.Item>
                  {exam?.type === "topic_practice" && (
                    <Breadcrumb.Item>Practice by Topic</Breadcrumb.Item>
                  )}
                  {exam?.type === "exam" && (
                    <Breadcrumb.Item>{exam.title}</Breadcrumb.Item>
                  )}
                  {exam?.type === "normal_practice" && (
                    <Breadcrumb.Item>Mixing Exam Tests</Breadcrumb.Item>
                  )}
                </Breadcrumb>
              </Container>
              <Container className="d-flex banner-answer-container">
                <Col lg={9}>
                  {exam?.type === "topic_practice" && (
                    <h2>Practice by topic</h2>
                  )}
                  {exam?.type === "normal_practice" && (
                    <h2>Mixing Exam Test</h2>
                  )}
                  {exam?.type === "exam" && <h2>{exam?.title}</h2>}

                  {exam?.content !== undefined && (
                    <div
                      style={{
                        whiteSpace: "pre-line",
                        color: "white",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: decodeURIComponent(
                          escape(window.atob(exam?.content))
                        ),
                      }}
                    ></div>
                  )}
                  <p className="requirement">{`Requirement: ${Math.ceil(
                    exam?.questions?.length * 0.6
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
    </Spin>
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
