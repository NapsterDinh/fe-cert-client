import WhatsNewPage from "./WhatsNewPage";
import ExamSchedule from "./ExamSchedule";
import { Button, Row } from "@themesberg/react-bootstrap";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div
        className="why-fe-vietnam d-flex justify-content-center"
        style={{ marginBottom: "60px" }}
      >
        <h1 className="text-center why-fe-title">Practice and Training</h1>
        <div className="d-flex justify-content-center">
          <p
            className="text-center"
            style={{ width: "70%", fontSize: "26px", whiteSpace: "pre-wrap" }}
          >
            FE VietNam is an adaptive digital solution for preparation of FE
            exams. {`\n`}Our digital platform is designed to help developer can
            improve more knowledge about IT. {`\n`}We have the best interactive
            platform to learn, practice, take mock exams for FE exams.
          </p>
        </div>
      </div>
      <div
        className="why-fe-vietnam module d-flex justify-content-center"
        style={{ background: `url(${bannerBg})` }}
      >
        <h1 className="text-center why-fe-title">Why FE VietNam ?</h1>
        <div className="module-list">
          <div className="module-container d-flex justify-content-between">
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/laptop-150x150.png"
              ></img>
              <h5>100% Digital</h5>
              <p>
                We offer full e-learning solutions. Practice from anywhere and
                whenever you want.
              </p>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/book-3-150x150.png"
              ></img>
              <h5>Build Your Basics</h5>
              <p>
                All the modules come with integrated basics module to sharpen
                your skills
              </p>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/idea-150x150.png"
              ></img>
              <h5>Quality Content</h5>
              <p>
                All the contents are prepared by professional professors to give
                you the real exam scenario
              </p>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/time-150x150.png"
              ></img>
              <h5>Exam Focused</h5>
              <p>Our mock exams provide the best experience for FE exams.</p>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/psychology-150x150.png"
              ></img>
              <h5>Training Focused</h5>
              <p>
                The Learning path are carefully designed by professionals for
                your training.
              </p>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/05/engineering-150x150.png"
              ></img>
              <h5>Track Your Progress</h5>
              <p>
                Our system helps you to track your daily progress and set your
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="why-fe-vietnam d-flex justify-content-center"
        style={{ padding: "60px" }}
      >
        <h1 className="text-center why-fe-title">
          We help developer to achieve their dreams come true
        </h1>
        <div className="module-list">
          <div
            className="module-container d-flex justify-content-between"
            style={{ width: "60%" }}
          >
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/04/world-130x130.png"
              ></img>
              <h5>Global Acceptance</h5>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/04/skills-130x130.png"
              ></img>
              <h5>Certify their Programming Skills</h5>
            </div>
            <div className="module-item">
              <img
                alt="module-item"
                src="https://exam-practice.com/wp-content/uploads/2019/04/promotion-130x130.png"
              ></img>
              <h5>Higher success</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="why-fe-vietnam module d-flex justify-content-center"
        style={{ background: `url(${bannerBg})` }}
      >
        <h1 className="text-center why-fe-title">What are you waiting for ?</h1>
        <div className="d-flex justify-content-center my-4">
          <Button
            onClick={() => (window.location = "/login")}
            style={{ padding: "15px 30px", fontSize: "20px" }}
            variant="secondary"
          >
            Join us now!!
          </Button>
        </div>
      </div>
      {/* <WhatsNewPage />
      <ExamSchedule /> */}
    </>
  );
};

export default HomePage;
