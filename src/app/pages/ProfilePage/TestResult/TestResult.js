import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { textAlign } from "@mui/system";

export const TestResult = ({ data, title }) => {
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div style={{ height: 632, width: "100%" }}>
        <h3 className="my-4">Test Results</h3>
      <DataGrid
        sx={{
          ".MuiDataGrid-actionsCell": {
            width: "100%;",
          },
          ".MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "center"
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
          ".MuiDataGrid-columnHeader:nth-child(1)": {
            flexBasis: "30%!important",
          },
          ".MuiDataGrid-columnHeader:nth-child(2)": {
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-columnHeader:nth-child(3)": {
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-columnHeader:nth-child(4)": {
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-columnHeader:nth-child(5)": {
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-columnHeader:nth-child(6)": {
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
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(1)": {
            flexBasis: "30%!important",
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(2)": {
            flexBasis: "15%!important",
            justifyContent: "center"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(3)": {
            flexBasis: "15%!important",
            justifyContent: "center"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(4)": {
            justifyContent: "center",
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(5)": {
            flexBasis: "15%!important",
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(6)": {
            flexBasis: "10%!important",
          },
          ".MuiDataGrid-row .MuiDataGrid-cell .MuiDataGrid-cellContent": {
            borderRadius: "5px;",
            textAlign: "center",
            padding: "5px 0px;",
          },
          ".MuiDataGrid-row .MuiDataGrid-cell.Pass .MuiDataGrid-cellContent": {
            backgroundColor: "#f6ffed;",
            color: "#52c41a;",
            border: "solid 1px #b7eb8f;",
            width: "70px"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell.Failed .MuiDataGrid-cellContent": {
            backgroundColor: "#fff2f0;",
            color: "#ff4d4f;",
            border: "solid 1px #ffccc7;",
            width: "70px"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell.Exam .MuiDataGrid-cellContent": {
            backgroundColor: "#e6f7ff;",
            color: "#1890ff",
            border: "solid 1px #91d5ff;",
            width: "70px"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell.Practice .MuiDataGrid-cellContent": {
            backgroundColor: "#fffbe6",
            color: "#faad14",
            border: "solid 1px #ffe58f",
            width: "70px"
          },
          ".MuiDataGrid-row .MuiDataGrid-cell:nth-child(6) .MuiDataGrid-actionsCell": {
            justifyContent: "center"
          },
          ".css-pdct74-MuiTablePagination-selectLabel, .css-levciy-MuiTablePagination-displayedRows":
            {
              marginBottom: "0px",
            },
        }}
        rows={data}
        columns={title}
        getCellClassName={(params) => {
            if(params.field === "mode")
            {
                return params.row.mode
            }
            else if(params.field === 'results')
            {
                return params.row.results
            }
            else
            {
                return ""
            }
          }}
      />
    </div>
  );
};

export default TestResult;
