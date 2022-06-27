import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@themesberg/react-bootstrap";
import {
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Tabs,
  Typography,
  Spin,
} from "antd";
import { createRandomTopicSession } from "app/core/apis/practice";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as yup from "yup";
import "./PracticePage.css";
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
      .min(20, "Number of question must be greate than 20")
      .required("Please Enter Number of questions!"),
    timeLimited: yup
      .number()
      .typeError("Must be a number")
      .min(10, "Limited Time > 60")
      .required("Please Enter Limited Time"),
  })
  .required();

const TabPane2 = ({ allTopic }) => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useSelector((state) => state.persist.user?.user?.user);
  const currentDoingExam = useSelector(
    (state) => state?.exam?.currentDoingExam
  );
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
      timeLimited: 900,
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

  const handlePractice = async (values) => {
    try {
      if (user === "") {
        window.location = "/login";
      }
      const response = await createRandomTopicSession({
        topics: values.objectives,
        numberOfQuestions: values.numberOfQuestions,
        time: values.timeLimited,
      });
      if (response?.data) {
        history.push(`/exams/${response?.data?.exam?.exam}/attempt`);
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
              <Controller
                name="timeLimited"
                control={control}
                render={({ field }) => (
                  <>
                    <Input {...field} status={errors.timeLimited && "error"} />
                    {errors.timeLimited && (
                      <span className="error-message">
                        {errors.timeLimited?.message}
                      </span>
                    )}
                  </>
                )}
              />
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
            <Button
              disabled={isSubmitting || currentDoingExam?.exam !== undefined}
              type="submit"
              variant="primary"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
      <Spin
        className="sping-practice"
        spinning={allTopic.length === 0}
        tip="Loading..."
        style={{ minHeight: "400px" }}
      >
        <div className="practice-with-each-section">
          {allTopic
            ?.filter((t) => t?.status === "public")
            ?.map((item, index) => (
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
        {allTopic.length !== 0 && (
          <div className="text-center mb-4 my-4">
            <Button
              variant="primary"
              className="make-full"
              onClick={showModalAllTopic}
            >
              Make full practice
            </Button>
          </div>
        )}
      </Spin>
    </>
  );
};

const PracticeItem = ({ item, index, showModalPracticeOneTopic }) => {
  return (
    <div className="practice-item" id={`exams-item${index}`}>
      <h4>{item?.title}</h4>
      <div className="d-flex justify-content-between practice-item-top">
        <div className="practice-count-question">
          Questions (En):
          {item?.questions.filter((item) => !item.isDeleted)?.length} questions
        </div>
        <div className="practice-count-question">
          {/* Problems (En):{item?.totalProblems} */}
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
      {item?.sections?.map((item2, index) => (
        <div key={item2?.id}>
          <h5>
            {index + 1}. {item2?.title}
          </h5>
          {/* <div
            className="md-contents"
            dangerouslySetInnerHTML={{
              __html: decodeURIComponent(
                escape(window.atob(item?.description))
              ),
            }}
          ></div> */}
          <ul>
            {item2?.lessons?.map((item3) => (
              <li key={item3?.id}>{item3?.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TabPane2;
