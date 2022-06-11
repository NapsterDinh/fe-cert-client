import { Button } from "@themesberg/react-bootstrap";
import { Checkbox, Divider, Radio, Tabs } from "antd";
import React, { useState } from "react";
import "./PracticePage.css";
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
const defaultCheckedList = ["Apple", "Orange"];

const TabPane3 = () => {
  const [value, setValue] = useState(1);
  const [optionalItemsChecked, setOptionalItemsChecked] = useState([]);
  const onChangeTab3 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const startPraticing = () => {
    console.log(optionalItemsChecked, value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChangeTab3}
        value={value}
        optionType="button"
        buttonStyle="solid"
      >
        <div className="tab3-title">Original practice test</div>
        <div>
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
        </div>
        <div className="tab3-title">This exam question</div>
        <div>
          <Radio value={4}>Option A</Radio>
          <Radio value={5}>Option B</Radio>
          <Radio value={6}>Option C</Radio>
        </div>
        <div className="tab3-title">Old examination system</div>
        <div>
          <Radio value={7}>Option A</Radio>
          <Radio value={8}>Option B</Radio>
          <Radio value={9}>Option C</Radio>
        </div>
      </Radio.Group>
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

export default TabPane3;
