import { getStatementHistoryByIdUser } from "app/core/apis/pricing";
import React, { useEffect, useState } from "react";
import TableStatementHistory from "./TableStatementHistory/TableStatementHistory";


export const StatementHistory = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await getStatementHistoryByIdUser();
        if (response.status === 200) {
          setData(
            response?.data?.userPricing
              ?.sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((item, index) => ({
                ...item,
                id: item?._id,
                code: item?._id,
                index: index,
                service: item?.pricing?.name,
                price: item?.price?.$numberDecimal,
                duration: item?.pricing?.duration
              }))
          );
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h3 className="my-4">Statement History</h3>
      {data !== "" && <TableStatementHistory data={data} />}
    </div>
  );
};

export default StatementHistory;
