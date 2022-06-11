import { Col, Form, Button } from "@themesberg/react-bootstrap";
import { Divider } from "antd";
import "./Checkout.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <Col className="col-left">
        <div className="info-checkout">
          <h1>Checkout</h1>
          <div>
            <div className="payment-method">
              <h2>Payment Method</h2>
              <span>
                Secured connection
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <ul className="payment-method-list">
              <li className="payment-method-item">
                <Form.Check
                  inline
                  label="Paypal"
                  name="group1"
                  type={`radio`}
                  id={`inline-radio-1`}
                />
                <div className="description-paymnent-method">
                  In order to complete your transaction, we will transfer you
                  over to VNPay's secure servers.
                </div>
              </li>
              <li className="payment-method-item">
                <Form.Check
                  inline
                  label="VNPay"
                  name="group1"
                  type={`radio`}
                  id={`inline-radio-2`}
                />
                <div className="description-paymnent-method">
                  In order to complete your transaction, we will transfer you
                  over to PayPal's secure servers.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2>Order Summary</h2>
            <ul>
              <li>Premium</li>
            </ul>
          </div>
        </div>
      </Col>
      <Col className="col-right">
        <div className="summary">
          <h2>Summary</h2>
          <div>
            <div className="summary-item">
              <span>Original price:</span>
              <span>$84.99</span>
            </div>
            <div className="summary-item">
              <span>Discount price:</span>
              <span>$0</span>
            </div>
          </div>
          <Divider />
          <div className="summary-total">
            <span>Total:</span>
            <span>$84.99</span>
          </div>
          <Button>Proceed</Button>
          <p>
            By completing your purchase you agree to these Terms of Service.
          </p>
          <p>
            Fe VietNam is required by law to collect applicable transaction
            taxes for purchases made in certain tax jurisdictions.
          </p>
        </div>
      </Col>
    </div>
  );
};

export default Checkout;
