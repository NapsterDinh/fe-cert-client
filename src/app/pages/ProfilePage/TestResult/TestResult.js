import { getHistoryExam } from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import TableTestResult from "./TableTestResult/TableTestResult";
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
      <h3 className="my-4">Exam Test History</h3>
      {data !== "" && <TableTestResult data={data} />}
    </div>
  );
};

export default TestResult;
