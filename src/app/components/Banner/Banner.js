import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container } from "@themesberg/react-bootstrap";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import "./Banner.css";
import { Tooltip } from "antd";

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
    return total
  };

  return (
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
                <pre className="content-description">{exam?.content}</pre>
                <p>Rules:</p>
                <p className="maximum-test">
                  Maximum number of tests: {exam?.maxTotalTests}
                </p>
                <p className="requirement">{`Requirement: ${totalCorrectAnswer()}/${exam?.questions?.length}`}</p>
              </Col>
              <Col lg={3} className="col-right-answer-exam">
                <div className="circle">
                  <div className="content-circle">
                    <h1>{`${totalCorrectAnswer()}/${exam?.questions?.length}`}</h1>
                    <h2>Failed</h2>
                    <Tooltip title="Test again">
                      <FontAwesomeIcon 
                      onClick={() => window.location = `/exams/${exam?._id}`}
                      icon={faCirclePlay} />
                    </Tooltip>
                  </div>
                </div>
              </Col>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
