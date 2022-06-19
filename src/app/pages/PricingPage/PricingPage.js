import { Button, Col, Container } from "@themesberg/react-bootstrap";
import { ReactComponent as TickIcon } from "app/assets/icon/tick.svg";
import { ReactComponent as UnTickIcon } from "app/assets/icon/untick.svg";
import React from "react";
import { useHistory } from "react-router-dom";
import "./PricingPage.css";

const PricingPage = () => {
  return (
    <>
      <Container className="d-flex justify-content-center mt-4 pricing-page-container">
        <PricingItem />
        <PricingItem />
        <PricingItem isCommingSoon />
      </Container>
    </>
  );
};

const sampleData = [
  {
    _id: '123',
    title: ''
  }
]

const PricingItem = ({ isUsing, isCommingSoon = false }) => {
  const history = useHistory();
  return (
    <Col
      className={`pricing-item ${isUsing ? "using" : ""}`}
      style={{ position: "relative", minHeight: "569.14px" }}
    >
      <div className="pricing-item-padding">
        <div
          style={
            isCommingSoon ? { filter: "blur(8px)" } : { filter: "blur(0px)" }
          }
        >
          <h1>Lite</h1>
          <h6>Hit the ground runnig.</h6>
          <h1 className="price">Lite</h1>
          {!isCommingSoon && (
            <Button onClick={() => history.push("/checkout/123123asd1")}>
              Start free trial
            </Button>
          )}

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
      </div>
      {isCommingSoon && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
          className="blur-fragment d-flex justify-content-center align-items-center"
        >
          <h1>Comming Soon</h1>
        </div>
      )}
    </Col>
  );
};

export default PricingPage;
