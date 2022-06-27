import { Col, Form, Button } from "@themesberg/react-bootstrap";
import { Divider } from "antd";
import "./Checkout.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { payPricing } from "app/core/apis/pricing";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPricingById } from "app/core/apis/pricing";
const Checkout = () => {
  const user = useSelector((state) => state.persist.user?.user?.user);
  let { idServicePack } = useParams();
  const history = useHistory();
  const [data, setData] = useState("");
  const [isSendAPI, setIsSendAPI] = useState(false);
  const handlePayment = async () => {
    setIsSendAPI(true);
    try {
      const response = await payPricing({
        user: user?._id,
        _id: data?._id,
      });
      if (response?.status === 200) {
        window.open(
          response.data?.ability,
          "MyWindow",
          "width=1200,height=600"
        );
        return false;
      } else {
        setIsSendAPI(true);
      }
    } catch (error) {
      console.log(error);
      setIsSendAPI(true);
    }
  };

  useEffect(() => {
    (async () => {
      if (idServicePack === undefined) {
        history.push("/404");
      }
      try {
        const response = await getPricingById(idServicePack);
        if (response.status === 200) {
          setData(response?.data?.pricing);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
                  checked
                  label="PayPal"
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
              <li>
                <h4>{data?.name}</h4>
                <p>{data?.description}</p>
              </li>
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
              <span>{data?.price}$</span>
            </div>
            <div className="summary-item">
              <span>Discount price:</span>
              <span>0$</span>
            </div>
          </div>
          <Divider />
          <div className="summary-total">
            <span>Total:</span>
            <span>{data?.price}$</span>
          </div>
          <Button disabled={isSendAPI} onClick={handlePayment}>
            Proceed
          </Button>
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
