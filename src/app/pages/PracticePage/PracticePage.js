import { Col, Container } from "@themesberg/react-bootstrap";
import { Tabs } from "antd";
import { getAllTopicFullList } from "app/core/apis/topic";
import React, { useEffect, useState } from "react";
import "./PracticePage.css";
import TabPane2 from "./TabPane2";
const { TabPane } = Tabs;

const PracticePage = () => {
  const [allTopic, setAllTopic] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response1 = await getAllTopicFullList();
        setAllTopic(response1?.data?.topic);
      } catch (error) {}
    })();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Container className="d-flex container-card justify-content-center">
      <Col className="layout-container-top exam mx-3">
        <div>
          <h1 className="text-center">
            Basic Information Technology Engineer Pass Question
          </h1>
          <div className="d-flex justify-content-center my-4">
            <img
              src="https://www.fe-siken.com/img/doujoulogo.png"
              alt="doujou-logo"
            ></img>
          </div>

          <pre className="description-practice">
            "Fundamental Information Technology Engineer Examination Past
            Question Dojo" is a collection of Web questions with complete
            explanations that are randomly selected from the past questions
            (2560 questions) of the Fundamental Information Technology Engineer
            Examination.{`\n`}
            It is possible to work on past exercises by utilizing the gap time,
            free of charge, compatible with PC / smartphone / tablet, and
            management of learning history.{`\n`}
            Please use it as a test preparation."
          </pre>
        </div>
        <Tabs defaultActiveKey="1" onChange={onChange} destroyInactiveTabPane>
          <TabPane tab="Questions by specifying a field" key="2">
            <TabPane2 allTopic={allTopic} />
          </TabPane>
        </Tabs>
      </Col>
    </Container>
  );
};

export default PracticePage;
