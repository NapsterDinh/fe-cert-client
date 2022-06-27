import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { Routes } from "app/routes";

import { forgotPass } from "app/core/apis/user";

const ForgotPassword = () => {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = React.useState("");
  const onResetPassword = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.elements.email.value;
      const globalRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

      if (!globalRegex.test(email)) {
        setErrorMsg("Email must be correct with format abc@exampl.com");
        return;
      }
      const result = await forgotPass({
        email: email,
      });

      if (result?.data?.result?.result) {
        history.push("/emailSent");
      } else {
        setErrorMsg(result?.data?.result?.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link
                as={Link}
                to={Routes.LoginPage.path}
                className="text-gray-700"
              >
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
                sign in
              </Card.Link>
            </p>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">
                  Don't fret! Just type in your email and we will send you a
                  code to reset your password!
                </p>
                <Form onSubmit={onResetPassword}>
                  <div className="mb-4">
                    {errorMsg !== "" && (
                      <Alert
                        className="mb-4"
                        message={errorMsg}
                        type={"error"}
                      />
                    )}
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control
                        required
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </InputGroup>
                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Recover password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ForgotPassword;
