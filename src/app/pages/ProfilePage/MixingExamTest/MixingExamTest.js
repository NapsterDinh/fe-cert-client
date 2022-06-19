import { getHistoryExam } from "app/core/apis/exam";
import React, { useEffect, useState } from "react";
import TableMixingExamTest from "./TableMixingExamTest/TableMixingExamTest";
export const MixingExamTest = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await getHistoryExam('normal_practice');
        if (response.status === 200) {
          setData(
            response.data.exam
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
      <h3 className="my-4">Mixing Exam Test History</h3>
      {data !== "" && <TableMixingExamTest data={data} />}
    </div>
  );
};

export default MixingExamTest;
