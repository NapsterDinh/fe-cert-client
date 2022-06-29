import { SearchOutlined } from "@ant-design/icons";
import { Card } from "@themesberg/react-bootstrap";
import { Button, Input, Space, Table, Tag } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";

import { useHistory } from "react-router-dom";

export const TableStatementHistory = ({ data }) => {
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
      title: "No",
      dataIndex: "index",
      key: "index",
      width: "5%",
      sorter: (a, b) => a.index < b.index,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("index"),
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: "10%",
      sorter: (a, b) => a.code < b.code,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("code"),
    },
    {
      title: "Price($)",
      dataIndex: "price",
      key: "price",
      width: "5%",
      sorter: (a, b) => a.price < b.price,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("price"),
    },
    {
      title: "Duration(days)",
      dataIndex: "duration",
      key: "duration",
      align: "center",
      width: "5%",
      sorter: (a, b) => a.duration < b.duration,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("duration"),
    },
    {
      className: "tag-col",
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "10%",
      sorter: (a, b) => a.service < b.service,
      sortDirections: ["descend", "ascend"],
      render: (service) => {
        return (
          <Tag color={service === "Premium" ? "#2db7f5" : "#108ee9"}>
            {service}
          </Tag>
        );
      },
      filters: [
        {
          text: "Premium",
          value: "Premium",
        },
        {
          text: "Premium",
          value: "Premium",
        },
      ],
      onFilter: (value, record) => record.service.indexOf(value) === 0,
    },
    {
      title: "Buy Time",
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
      className: "tag-col",
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "5%",
      sorter: (a, b) => a.status < b.status,
      sortDirections: ["descend", "ascend"],
      render: (status) => {
        return (
          <Tag color={status === "valid" ? "#87d068" : "#f50"}>{status}</Tag>
        );
      },
      filters: [
        {
          text: "valid",
          value: "valid",
        },
        {
          text: "invalid",
          value: "invalid",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   width: "10%",
    //   align: "center",
    //   render: (_, record) => {
    //     return (
    //       <Space size="middle">
    //         <Button>View</Button>
    //         <Button>Export</Button>
    //       </Space>
    //     );
    //   },
    // },
  ];
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="mt-3">
        <Table columns={columns} dataSource={data} />
      </Card.Body>
    </Card>
  );
};

export default TableStatementHistory;
