import { SearchOutlined } from "@ant-design/icons";
import { Card } from "@themesberg/react-bootstrap";
import { Button, Input, Space, Table, Tag } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import "./TableExam.css";
import { useHistory } from "react-router-dom";

export const TableExam = ({ data }) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

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
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "20%",
      sorter: (a, b) => a.title < b.title,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("title"),
    },
    {
      title: "Session",
      dataIndex: "isSessionMorning",
      key: "isSessionMorning",
      width: "5%",
      sorter: (a, b) => a.isSessionMorning < b.isSessionMorning,
      sortDirections: ["descend", "ascend"],
      render: (isSessionMorning) => {
        return <span>{isSessionMorning}</span>;
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
      title: "Event Date",
      dataIndex: "eventDate",
      key: "eventDate",
      width: "10%",
      sorter: (a, b) =>
        new Date(a.eventDate).toLocaleDateString() <
        new Date(b.eventDate).toLocaleDateString(),
      sortDirections: ["descend", "ascend"],
      render: (eventDate) => {
        return <span>{new Date(eventDate).toLocaleDateString()}</span>;
      },
      filters: data
        ?.map((item, index) => ({
          key: `eventDate${index}`,
          text: new Date(item.eventDate).getFullYear(),
          value: new Date(item.eventDate).getFullYear(),
        }))
        .filter(
          (value, index, self) =>
            self.findIndex((item) => item.value === value.value) === index
        ),
      onFilter: (value, record) => record.eventDate.indexOf(value) === 0,
    },
    {
      title: "Last Updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: "10%",
      align: "center",
      ...getColumnSearchProps("updatedAt"),
      sorter: (a, b) => new Date(a.updatedAt) < new Date(b.updatedAt),
      sortDirections: ["descend", "ascend"],
      render: (updateAt) => {
        return <span>{new Date(updateAt).toLocaleString()}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      align: "center",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button onClick={() => history.push(`/exams/${record._id}`)}>
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

export default TableExam;
