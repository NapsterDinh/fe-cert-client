import { Button, Col, Container, FormCheck } from "@themesberg/react-bootstrap";
import { Alert } from "antd";
import { getResultByIdUserExam } from "app/core/apis/exam";
import { updateExam } from "app/store/examReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ReactComponent as TickIcon } from "app/assets/icon/tick.svg";
import { ReactComponent as UnTickIcon } from "app/assets/icon/untick.svg";
import "./PricingPage.css";

const PricingPage = () => {
  const location = useLocation();

  return (
    <>
      <Container className="d-flex justify-content-center mt-4 pricing-page-container">
        <PricingItem />
        <PricingItem />
        <PricingItem />
        <PricingItem />
      </Container>
      {/* <div className="compared-feature-container">
        <h1>Compare features</h1>
        <Container className="compared-feature">
          <Col>
          
          </Col>
        </Container>
      </div> */}
    </>
  );
};

const PricingItem = ({ isUsing }) => {
  const history = useHistory();
  return (
    <Col className={`pricing-item ${isUsing ? "using" : ""}`}>
      <div className="pricing-item-padding">
        <h1>Lite</h1>
        <h6>Hit the ground runnig.</h6>
        <h1 className="price">Lite</h1>
        <Button onClick={() => history.push("/checkout/123123asd1")}>
          Start free trial
        </Button>
        <div className="my-4">
          <ul>
            <li>
              <TickIcon />
              Sell on your own terms
            </li>
            <li>
              <TickIcon />
              Sell on your own terms
            </li>
            <li>
              <TickIcon />
              Sell on your own terms
            </li>
            <li>
              <TickIcon />
              Sell on your own terms
            </li>
            <li>
              <UnTickIcon />
              Sell on your own terms
            </li>
            <li>
              <UnTickIcon />
              Sell on your own terms
            </li>
            <li>
              <UnTickIcon />
              Sell on your own terms
            </li>
            <li>
              <UnTickIcon />
              Sell on your own terms
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default PricingPage;
