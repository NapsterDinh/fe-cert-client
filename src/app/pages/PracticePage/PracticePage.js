import { Button, Col, Container } from "@themesberg/react-bootstrap";
import { Tabs } from "antd";
import {
  checkExamByIdAndUser,
  getAllExam,
  getExamById,
} from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PracticePage.css";
import TabPane1 from "./TabPane1";
import TabPane2 from "./TabPane2";
import TabPane3 from "./TabPane3";
const { TabPane } = Tabs;

const dataSampleTopicArray = [
  {
    id: "topic1",
    title: "Basic Theory",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic1",
    title: "Basic Theory1",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic2",
    title: "Basic Theory2",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic3",
    title: "Basic Theory3",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic4",
    title: "Basic Theory4",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic5",
    title: "Basic Theory5",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic6",
    title: "Basic Theory6",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
  {
    id: "topic7",
    title: "Basic Theory7",
    description: "gì gì đó",
    totalQuestions: 30,
    totalProblems: 20,
    section: [
      {
        id: "section1",
        title: "Basic Theory",
        lectures: [
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
          {
            id: "lecture1",
            title: "Discrete Mathematics",
          },
        ],
      },
    ],
  },
];
const PracticePage = () => {
  const [allExam, setAllExam] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllExam();
        setAllExam(response?.data?.exam);
      } catch (error) {}
    })();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const options = [
    {
      label: "Fall of the first year of Reiwa",
      value: "fall-of-the-first-year-of-Reiwa",
    },
    {
      label: "Spring 2019",
      value: "spring-2019",
    },
    {
      label: "Fall-2018",
      value: "fall-2018",
    },
    {
      label: "Fall-2018",
      value: "fall-2018",
    },
    {
      label: "Fall-2018",
      value: "fall-2018",
    },
    {
      label: "Fall-2018",
      value: "fall-2018",
    },
    {
      label: "Spring 2019",
      value: "spring-2019",
    },
    {
      label: "Fall of the first year of Reiwa",
      value: "fall-of-the-first-year-of-Reiwa",
    },
    {
      label: "Spring 2019",
      value: "spring-2019",
    },
  ];

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
            It is possible to work on past exercises by utilizing
            the gap time, free of charge, compatible with PC / smartphone /
            tablet, and management of learning history.{`\n`} 
            Please use it as a test
            preparation."
          </pre>
        </div>
        <Tabs defaultActiveKey="1" onChange={onChange} destroyInactiveTabPane>
          <TabPane tab="Questions by specifying the exam times" key="1">
            <TabPane1 allExam={allExam?.map((item) => item.title)} />
          </TabPane>
          <TabPane tab="Questions by specifying a field" key="2">
            <TabPane2 dataSampleTopicArray={dataSampleTopicArray} />
          </TabPane>
          <TabPane tab="Questions in a mock exam format" key="3">
            <TabPane3 />
          </TabPane>
        </Tabs>
      </Col>
    </Container>
  );
};

export default PracticePage;
