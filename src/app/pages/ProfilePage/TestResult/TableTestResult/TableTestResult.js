import { SearchOutlined } from "@ant-design/icons";
import { Card } from "@themesberg/react-bootstrap";
import { Button, Input, Space, Table, Tag } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

import { useHistory } from "react-router-dom";

export const TableTestResult = ({ data }) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  console.log(data);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Exam",
      dataIndex: "title",
      key: "title",
      width: "20%",
      sorter: (a, b) => a.title < b.title,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("title"),
    },
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: "5%",
      sorter: (a, b) => a.no < b.no,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("no"),
    },
    {
      className: "tag-col",
      title: "Session",
      dataIndex: "isSessionMorning",
      key: "isSessionMorning",
      width: "5%",
      sorter: (a, b) => a.isSessionMorning < b.isSessionMorning,
      sortDirections: ["descend", "ascend"],
      render: (isSessionMorning) => {
        return (
          <Tag color={isSessionMorning === "Morning" ? "#2db7f5" : "#108ee9"}>
            {isSessionMorning}
          </Tag>
        );
      },
      filters: [
        {
          text: "Morning",
          value: "Morning",
        },
        {
          text: "Afternoon",
          value: "Afternoon",
        },
      ],
      onFilter: (value, record) => record.isSessionMorning.indexOf(value) === 0,
    },
    {
      className: "tag-col",
      title: "Result",
      dataIndex: "isPassed",
      key: "isPassed",
      width: "5%",
      sorter: (a, b) => a.isPassed < b.isPassed,
      sortDirections: ["descend", "ascend"],
      render: (isPassed, item) => {
        return (
          <>
            <Tag
              style={{ margin: "auto 0" }}
              color={isPassed === "Pass" ? "#87d068" : "#f50"}
            >
              <p style={{ marginBottom: "0px", fontSize: "14px" }}>
                {isPassed}
              </p>
            </Tag>
            <p style={{ marginBottom: "0px", fontSize: "14px" }}>
              {item.totalCorrect}/{item.totalQuestions}
            </p>
            <p style={{ marginBottom: "0px", fontSize: "14px" }}>questions</p>
          </>
        );
      },
      filters: [
        {
          text: "Pass",
          value: "Pass",
        },
        {
          text: "Failed",
          value: "Failed",
        },
      ],
      onFilter: (value, record) => record.isSessionMorning.indexOf(value) === 0,
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    //   width: "5%",
    //   sorter: (a, b) => a.status < b.status,
    //   sortDirections: ["descend", "ascend"],
    //   render: (status) => {
    //     return <span>{status}</span>;
    //   },
    //   filters: [
    //     {
    //       text: "Done",
    //       value: "done",
    //     },
    //     {
    //       text: "Not submited",
    //       value: "notSubmited",
    //     },
    //   ],
    //   onFilter: (value, record) => record.isSessionMorning.indexOf(value) === 0,
    // },
    {
      title: "Start Time",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "10%",
      align: "center",
      ...getColumnSearchProps("createdAt"),
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: (createdAt) => {
        return <span>{new Date(createdAt).toLocaleString()}</span>;
      },
    },
    {
      title: "Detail",
      key: "action",
      width: "10%",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button
              onClick={() =>
                history.push(
                  `/exams/${record.idExam}/attempt/${record.id}/result`
                )
              }
            >
              View Details
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="mt-3">
        <Table columns={columns} dataSource={data} />
      </Card.Body>
    </Card>
  );
};

export default TableTestResult;
