import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@themesberg/react-bootstrap";
import moment from "moment";
import {
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Tabs,
  TimePicker,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { createRandomTopicSession } from "app/core/apis/practice";
import "./PracticePage.css";
import { useHistory } from "react-router-dom";
const { Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const format = "HH:mm:ss";

const schema = yup
  .object({
    objectives: yup
      .array()
      .required()
      .min(1, "You need to choose 1 categories!!!"),
    numberOfQuestions: yup
      .number()
      .typeError("Must be a number")
      .min(0, "Duration > 0")
      .required("Please Enter Number of questions!"),
    timeLimited: yup
      .number()
      .typeError("Must be a number")
      .min(0, "Limited Time > 0")
      .required("Please Enter Limited Time"),
  })
  .required();

const TabPane2 = ({ allTopic }) => {
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const {
    control,
    handleSubmit,
    isSubmitting,
    setValue,
    reset,
    getValues,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      objectives: [],
      numberOfQuestions: 20,
      timeLimited: 0,
    },
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModalPracticeOneTopic = (item) => {
    setValue("objectives", [item._id]);
    setIsModalVisible(true);
  };

  const showModalAllTopic = () => {
    setValue(
      "objectives",
      allTopic?.map((item) => item._id)
    );
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    clearErrors();
    reset();
    setIsModalVisible(false);
  };

  const handleChange = (time) => {
    if (time) {
      clearErrors("timeLimited", "");
      const timeLimited =
        time._d.getSeconds() +
        time._d.getMinutes() * 60 +
        time._d.getHours() * 3600;
      setValue("timeLimited", timeLimited);
    } else {
      setError("timeLimited", "Limited Time > 0");
      setValue("timeLimited", 0);
    }
  };

  const handlePractice = async (values) => {
    try {
      const response = await createRandomTopicSession({
        topics: values.objectives,
        numberOfQuestions: values.numberOfQuestions,
        time: 1200,
      });
      if (response?.data) {
        history.push(`/practice/${response?.data?.exam?.exam}/attempt?type=topic_practice`);
      } else {
        alert(response.error);
      }
    } catch (error) {}
    console.log(values);
  };

  return (
    <>
      <Modal
        title="Practice Information"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          className="form-practice"
          layout={"vertical"}
          form={form}
          initialValues={{ layout: "vertical" }}
          onFinish={handleSubmit(handlePractice)}
        >
          <Form.Item label="*Pick Objectives:">
            <Controller
              name="objectives"
              style={{ width: "104%" }}
              control={control}
              render={({ field }) => {
                const props = {
                  ...field,
                };
                delete props.value;
                return (
                  <>
                    <Select
                      status={errors.objectives && "error"}
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      {...props}
                      showArrow
                      placeholder="Please select"
                      value={getValues("objectives")}
                    >
                      {allTopic?.map((item) => (
                        <Option key={item._id}>{item.title}</Option>
                      ))}
                    </Select>
                    {errors.objectives && (
                      <span className="error-message">
                        {errors.objectives?.message}
                      </span>
                    )}
                  </>
                );
              }}
            />
          </Form.Item>

          <div className="d-flex justify-content-between form-practice-bottom">
            <Form.Item
              label="*Number of question:"
              className="form-number-of-questions"
            >
              <Controller
                name="numberOfQuestions"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      status={errors.numberOfQuestions && "error"}
                    />
                    {errors.numberOfQuestions && (
                      <span className="error-message">
                        {errors.numberOfQuestions?.message}
                      </span>
                    )}
                  </>
                )}
              />
            </Form.Item>
            <Form.Item label="*Time limited to do test:" className="form-timer">
              <TimePicker
                status={errors.timeLimited && "error"}
                minuteStep={5}
                secondStep={10}
                format={format}
                showNow={false}
                onChange={handleChange}
              />
              {errors.timeLimited && (
                <span className="error-message">
                  {errors.timeLimited?.message}
                </span>
              )}
            </Form.Item>
          </div>

          <div className="form-item-button">
            <Button
              type="button"
              variant="secondary"
              className="mx-4"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button disabled={isSubmitting} type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
      <div className="practice-with-each-section">
        {allTopic?.map((item, index) => (
          <>
            <PracticeItem
              key={`PracticeItem${item._id}`}
              item={item}
              index={index}
              showModalPracticeOneTopic={showModalPracticeOneTopic}
            />
            <Divider />
          </>
        ))}
      </div>
      <div className="text-center mb-4 my-4">
        <Button
          variant="primary"
          className="make-full"
          onClick={showModalAllTopic}
        >
          Make full practice
        </Button>
      </div>
    </>
  );
};

const PracticeItem = ({ item, index, showModalPracticeOneTopic }) => {
  return (
    <div className="practice-item" id={`exams-item${index}`}>
      <h4>{item?.title}</h4>
      <div className="d-flex justify-content-between practice-item-top">
        <div className="practice-count-question">
          Questions (En):{item?.totalQuestions}
        </div>
        <div className="practice-count-question">
          Problems (En):{item?.totalProblems}
        </div>
        <Button
          variant="secondary"
          className="practice-now"
          onClick={() => showModalPracticeOneTopic(item)}
        >
          Practice
        </Button>
      </div>
      <Divider />
      {item?.section?.map((item2, index) => (
        <div key={item2?.id}>
          <h5>
            {index + 1}. {item2?.title}
          </h5>
          <div
            className="md-contents"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></div>
          <ul>
            {item2?.lectures?.map((item3) => (
              <li key={item3?.id}>{item3?.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TabPane2;
