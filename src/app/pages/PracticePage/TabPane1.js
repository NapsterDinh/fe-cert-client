import { Checkbox, Divider, Tabs } from "antd";
import { Button } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import "./PracticePage.css";
import { createPractice } from "app/core/apis/practice";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];
const optionalItems = [
  {
    value: "random-sort-choices",
    label: "Randomly sort the choices",
  },
  {
    value: "do-not-ask-question-without-explanation",
    label: "Do not ask questions without explanation",
  },
  {
    value: "show-explanation-after-submit",
    label: "Show explanation after submit",
  },
];

const TabPane1 = ({ allExam }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [optionalItemsChecked, setOptionalItemsChecked] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const history = useHistory();

  const onChangeCheckbox = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < allExam.length);
    setCheckAll(list.length === allExam.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? allExam : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const startPraticing = async () => {
    try {
      const response = await createPractice({
        exams: checkedList,
      });
      if (response?.data) {
        history.push(
          `/practice/${response?.data?.exam?.exam}/attempt?type=normal_practice`
        );
      } else {
        alert(response.error);
      }
    } catch (error) {}
  };

  return (
    <>
      <CheckboxGroup
        className="checkbox-exam-tab1"
        value={checkedList}
        onChange={onChangeCheckbox}
        options={allExam}
      />
      <div className="d-flex justify-content-end">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          className="my-4"
        >
          Check all
        </Checkbox>
      </div>
      <Divider />
      <div
        data-show="true"
        className="ant-alert ant-alert-info ant-alert-with-description ant-alert-no-icon"
        role="alert"
      >
        <div className="ant-alert-content">
          <div className="ant-alert-message">Optional Item</div>
          <div className="ant-alert-description">
            <CheckboxGroup
              className="d-flex justify-content-between"
              options={optionalItems}
              value={optionalItemsChecked}
              onChange={setOptionalItemsChecked}
            />
          </div>
        </div>
      </div>
      <div className="text-center mb-4 my-4">
        <Button
          variant="primary"
          className="make-full"
          onClick={startPraticing}
        >
          Start practicing
        </Button>
      </div>
    </>
  );
};

export default TabPane1;
