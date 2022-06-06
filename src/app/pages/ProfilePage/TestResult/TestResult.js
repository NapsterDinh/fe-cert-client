import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getHistoryExam } from "app/core/apis/exam";

export const TestResult = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = useState("");
  const columns = useMemo(
    () => [
      {
        field: "title",
        type: "string",
        headerName: "Exam",
      },
      {
        field: "type",
        type: "string",
        headerName: "Type",
      },
      {
        field: "result",
        type: "string",
        headerName: "Result",
      },
      {
        field: "createdAt",
        type: "actions",
        headerName: "Start Time",
        getActions: (params) => {
          return [
            <span className="text-center">
              {new Date(params.row.createdAt).toLocaleString()}
            </span>,
          ];
        },
      },
      {
        field: "detail",
        headerName: "Detail",
        type: "actions",
        align: "center",
        getActions: (params) => {
          console.log(params);
          return [
            <Link
              className="text-center"
              to={`/exams/${params.row.idExam}/attempt/${params.row.id}/result`}
            >
              <FontAwesomeIcon icon={faEye} className="me-2" />
            </Link>,
          ];
        },
      },
    ],
    []
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await getHistoryExam();
        if (response.status === 200) {
          setData(
            response.data.exam.map((item) => ({
              id: item._id,
              title: item.exam.title,
              type: item.exam.type,
              result: item.isPassed,
              createdAt: item.createdAt,
              idExam: item.exam._id,
            }))
          );
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div style={{ height: 632, width: "100%" }}>
      <h3 className="my-4">Test Results</h3>
      {data !== "" && (
        <DataGrid
          sx={{
            ".MuiDataGrid-actionsCell": {
              width: "100%;",
            },
            ".MuiDataGrid-columnHeaderTitleContainer": {
              justifyContent: "center",
            },
            ".MuiDataGrid-columnHeaderTitle.css-1jbbcbn-MuiDataGrid-columnHeaderTitle":
              {
                fontWeight: "700;",
              },
            ".MuiDataGrid-actionsCell span": {
              width: "100%;",
              overflow: "hidden;",
              textOverflow: "ellipsis;",
            },
            ".css-1s0hp0k-MuiDataGrid-columnHeadersInner": {
              width: "100%",
            },
            ".MuiDataGrid-columnHeader": {
              width: "auto!important",
              maxWidth: "none!important",
              minWidth: "auto!important",
              flex: `0 0 15%;`,
            },
            ".MuiDataGrid-columnHeader:nth-of-type(1)": {
              flexBasis: "40%!important",
            },
            ".MuiDataGrid-columnHeader:nth-of-type(2)": {
              flexBasis: "15%!important",
            },
            ".MuiDataGrid-columnHeader:nth-of-type(3)": {
              flexBasis: "15%!important",
            },
            ".MuiDataGrid-columnHeader:nth-of-type(4)": {
              flexBasis: "20%!important",
            },
            ".MuiDataGrid-columnHeader:nth-of-type(5)": {
              flexBasis: "10%!important",
            },
            ".MuiDataGrid-columnHeader:nth-of-type(6)": {
              flexBasis: "10%!important",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell": {
              flex: `0 0 15%;`,
              minWidth: "auto!important",
              maxWidth: "none!important;",
            },
            ".MuiDataGrid-row, .MuiDataGrid-virtualScrollerRenderZone": {
              width: "100%",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(1)": {
              flexBasis: "40%!important",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(2)": {
              flexBasis: "15%!important",
              justifyContent: "center",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(3)": {
              flexBasis: "15%!important",
              justifyContent: "center",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(4)": {
              justifyContent: "center",
              flexBasis: "20%!important",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(5)": {
              flexBasis: "10%!important",
              textAlign: "center",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(5) .MuiDataGrid-actionsCell":
              {
                display: "flex",
                justifyContent: "center",
              },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(6)": {
              flexBasis: "10%!important",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell .MuiDataGrid-cellContent": {
              borderRadius: "5px;",
              textAlign: "center",
              padding: "5px 0px;",
            },
            ".MuiDataGrid-row .MuiDataGrid-cell.Pass .MuiDataGrid-cellContent":
              {
                backgroundColor: "#f6ffed;",
                color: "#52c41a;",
                border: "solid 1px #b7eb8f;",
                width: "70px",
              },
            ".MuiDataGrid-row .MuiDataGrid-cell.Failed .MuiDataGrid-cellContent":
              {
                backgroundColor: "#fff2f0;",
                color: "#ff4d4f;",
                border: "solid 1px #ffccc7;",
                width: "70px",
              },
            ".MuiDataGrid-row .MuiDataGrid-cell.Exam .MuiDataGrid-cellContent":
              {
                backgroundColor: "#e6f7ff;",
                color: "#1890ff",
                border: "solid 1px #91d5ff;",
                width: "70px",
              },
            ".MuiDataGrid-row .MuiDataGrid-cell.Practice .MuiDataGrid-cellContent":
              {
                backgroundColor: "#fffbe6",
                color: "#faad14",
                border: "solid 1px #ffe58f",
                width: "70px",
              },
            ".MuiDataGrid-row .MuiDataGrid-cell:nth-of-type(6) .MuiDataGrid-actionsCell":
              {
                justifyContent: "center",
              },
            ".css-pdct74-MuiTablePagination-selectLabel, .css-levciy-MuiTablePagination-displayedRows":
              {
                marginBottom: "0px",
              },
          }}
          rows={data}
          columns={columns}
          getCellClassName={(params) => {
            if (params.field === "type") {
              return params.row.type;
            } else if (params.field === "result") {
              return params.row.result;
            } else {
              return "";
            }
          }}
        />
      )}
    </div>
  );
};

export default TestResult;
