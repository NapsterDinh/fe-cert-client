import { getHistoryExam } from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import TableTestResult from "./TableTestResult/TableTestResult";
import { Tabs } from "antd";
import PracticeResult from "../PracticeResult/PracticeResult";
import MixingExamTest from "app/pages/SchedulePage/MixingExamTest/MixingExamTest";
const { TabPane } = Tabs;
export const TestResult = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await getHistoryExam();
        if (response.status === 200) {
          setData(
            response.data.exam
              .filter((item) => item.exam.type === "exam")
              .map((item) => ({
                id: item._id,
                title: item.exam.title,
                type: item.exam.type,
                result: item.isPassed,
                createdAt: item.createdAt,
                no: item.no,
                totalCorrect: item.totalCorrect,
                totalQuestions: item.totalQuestions,
                idExam: item.exam._id,
                isSessionMorning: item.exam.isSessionMorning
                  ? "Morning"
                  : "Afternoon",
                isPassed: item.isPassed ? "Pass" : "Failed",
                status: item.status,
              }))
              .filter((item) => item.status !== "pending")
          );
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h3 className="my-4">Tests History</h3>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Exam Test" key="1">
          {data !== "" && <TableTestResult data={data} />}
        </TabPane>
        <TabPane tab="Mixing Exam" key="2">
          <MixingExamTest />
        </TabPane>
        <TabPane tab="Topic Practice" key="3">
          <PracticeResult />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TestResult;
