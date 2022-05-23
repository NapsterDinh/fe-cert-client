
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import signInBg from 'app/assets/img/illustrations/signin.svg'

import { Routes } from "app/routes";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup"

import { login } from "app/core/apis/user";
import { updateUser } from "app/store/userReducer";
import configuration from "app/configuration";
import ThirdLogin from "./ThirdLogin";

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(8, 'Username muse be at least 6 characters'),
  password: Yup.string().required('Password is required')
})

const LoginPage = () => 
{
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation()

  const SignIn = async(values) => {
    const result = await login({
      email: values.username,
      password: values.password
    })

    if(result.status === 200)
    {
      //set token
      configuration.setApiRequestToken(result.data.tokens)
      dispatch(updateUser(result.data))
      if(location?.state !== undefined)
      {
        history.push(`${location.state.from}${location.state.search}`)
      }
      else
      {
        history.push('/')
      }
    }
  }

  return(
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.HomePage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${signInBg})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Formik
                  initialValues={{ username: "", password: "" }}
                  validationSchema={schema}
                  onSubmit={(values, { setSubmitting }) => SignIn(values)}
                >
                  {props => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit
                    } = props;
  
                    return (
                      <Form className="mt-4 basic-form" noValidate onSubmit={handleSubmit}>
                        <Form.Group id="username" className="mb-4">
                          <Form.Label>Your Username</Form.Label>
                          <InputGroup
                          className={errors.username && touched.username && "error"}
                          >
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.username && touched.username && "error"}
                            name="username"
                            />
                            
                          </InputGroup>
                          <ErrorMessage name="username" component="div" className="invalid-feedback"/>
                        </Form.Group>
                        <Form.Group>
                          <Form.Group id="password" className="mb-4">
                            <Form.Label>Your Password</Form.Label>
                            <InputGroup
                            className={errors.password && touched.password && "error"}
                            >
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faUnlockAlt} />
                              </InputGroup.Text>
                              <Form.Control 
                              name="password"
                              type="password" 
                              placeholder="Password" 
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={errors.password && touched.password && "error"}
                              />
                            </InputGroup>
                            <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                          </Form.Group>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Form.Check type="checkbox">
                              <FormCheck.Input id="defaultCheck5" className="me-2" />
                              <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                            </Form.Check>
                            <Card.Link as={Link} to={Routes.ForgotPassword.path}
                             className="small text-end">Lost password?</Card.Link>
                          </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
                          Sign in
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
                <ThirdLogin/>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.Register.path} className="fw-bold">
                      {` Create account `}
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
}
 
export default LoginPage;
