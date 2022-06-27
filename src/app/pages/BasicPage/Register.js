import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { register as registerAPI } from "app/core/apis/user";
import * as yup from "yup";
import ThirdLogin from "./ThirdLogin";
import { useState, useEffect } from "react";
import { Routes } from "app/routes";
import BgImage from "app/assets/img/illustrations/signin.svg";
import { Controller, useForm } from "react-hook-form";
import { Modal, Alert } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Register.css";
// Schema yup
const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum must be greater 3 characters")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Full name has not contains special characters and number"
      ),
    email: yup
      .string()
      .required("Email is required")
      .email("Format must be an e-mail")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Email must be correct with format abc@exampl.com"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum must be greater 8 characters")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password has at least 1 uppercase, 1 digit, 1 special character and minimum 8 in length"
      ),
    confirmPassword: yup
      .string()
      .required("You need to confirm password")
      .oneOf(
        [yup.ref("password"), null],
        "Confirm password must be matched with password"
      ),
    agreeTerm: yup
      .boolean()
      .required("You need to checked it")
      .oneOf([true], "You need to checked it"),
    // role: yup.string().required("You need to choose your role"),
    role: yup.string(),
  })
  .required();

const Register = () => {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [secondsToGo, setSecondsToGo] = useState(5);
  const onRegister = async (values) => {
    try {
      const result = await registerAPI({
        name: values.fullName,
        email: values.email,
        password: values.password,
      });

      if (result.status === 201) {
        history.push("/emailSent");
      } else {
        setErrorMsg(result.data.message);
      }
    } catch (error) {console.log(error);}
  };
  // UseForm hook
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const showModal = () => {
    setVisible(true);
    const timer = setInterval(() => {
      setSecondsToGo((secondsToGo) => secondsToGo - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, 5 * 1000);
  };

  useEffect(() => {
    if (secondsToGo === 0) {
      hideModal();
      history.push("/");
    }
  }, [secondsToGo]);

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <main>
      <Modal
        title="Register Successfully"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Ok"
        footer={null}
      >
        <p>Your account has been created.</p>
        <p>
          We just sent to your email an link which contains active account link.{" "}
        </p>
        <p>You need to access into that link to verify your email.</p>
        <p>This page will be redirect to Home Page in {secondsToGo} seconds</p>
      </Modal>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.HomePage.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit(onRegister)}>
                  {errorMsg !== "" && (
                    <Alert message={errorMsg} type={"error"} />
                  )}
                  <Form.Group
                    id="name"
                    className={`mb-4 ${errors.fullName ? "error" : ""}`}
                  >
                    <Form.Label>Your Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            name="name"
                            type="text"
                            placeholder="Napster Dinh"
                            {...field}
                          />
                        )}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.fullName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    id="email"
                    className={`mb-4 ${errors.email ? "error" : ""}`}
                  >
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            name="email"
                            type="email"
                            placeholder="example@company.com"
                            {...field}
                          />
                        )}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    id="password"
                    className={`mb-4 ${errors.password ? "error" : ""}`}
                  >
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>

                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                            {...field}
                          />
                        )}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    id="confirmPassword"
                    className={`mb-4 ${errors.confirmPassword ? "error" : ""}`}
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            {...field}
                          />
                        )}
                      />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <FormCheck
                    type="checkbox"
                    className={`d-flex mb-4 ${errors.agreeTerm ? "error" : ""}`}
                  >
                    <Controller
                      name="agreeTerm"
                      control={control}
                      render={({ field }) => {
                        const props = {
                          ...field,
                        };
                        delete props.value;
                        return (
                          <>
                            <FormCheck.Input
                              {...props}
                              id="terms"
                              className="me-2"
                            />
                            <FormCheck.Label htmlFor="terms">
                              I agree to the{" "}
                              <Card.Link>terms and conditions</Card.Link>
                            </FormCheck.Label>
                          </>
                        );
                      }}
                    />
                  </FormCheck>
                  <Form.Control.Feedback type="invalid">
                    {errors.agreeTerm?.message}
                  </Form.Control.Feedback>

                  <Button
                    disabled={isSubmitting}
                    variant="primary"
                    type="submit"
                    className="w-100"
                  >
                    Sign up
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={Routes.LoginPage.path}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Register;
