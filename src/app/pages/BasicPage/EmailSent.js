
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container } from "react-bootstrap";

import { Link } from 'react-router-dom';

import { Routes } from "app/routes";
import NotFoundImage from "app/assets/img/illustrations/signin.svg";

const EmailSent = () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                <Card.Link as={Link} to={Routes.HomePage.path}>
                  <Image src={NotFoundImage} className="img-fluid w-75" />
                </Card.Link>
                <h1 className="text-primary mt-5">
                  Verification email was sent
                </h1>
                <p className="lead my-4">
                  We was sent to your email a verify link. You need to active your account by click on this link
                </p>
                <Button as={Link} variant="primary" className="animate-hover" to={Routes.HomePage.path}>
                  <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                  Go back home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default EmailSent;
