import { Col, Form, Button } from "@themesberg/react-bootstrap";
import { Divider, Result } from "antd";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { payPricing } from "app/core/apis/pricing";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { getPricingById } from "app/core/apis/pricing";

const ResultCheckout = () => {
  let { status } = useParams();
  const { search } = useLocation();

  const history = useHistory();
  const [data, setData] = useState("");
  const [userPricing, setUserPricing] = useState("");
  const [isSendAPI, setIsSendAPI] = useState(false);

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    window?.opener?.location?.replace(window.location.href);
    if (window?.opener !== undefined) {
      window?.close();
    }

    (async () => {
      if (status === undefined) {
        history.push("/404");
      } else {
        if (searchParams.get("pricing")) {
          try {
            const response = await getPricingById(searchParams.get("pricing"));
            if (response?.status === 200) {
              setData(response?.data?.pricing);
            }
          } catch (error) {
            console.log(error);
          }
          if (status === "success") {
            setUserPricing(searchParams.get("userPricing"));
          } else {
          }
        } else {
          history.push("/404");
        }
      }
    })();
  }, []);
  return (
    <div className="checkout-container">
      {status === "success" ? (
        <Result
          status="success"
          title={`Successfully Purchasing ${data?.name} Service!`}
          subTitle={`Order number: ${userPricing} ${data?.name} Service has been valid after you re-sign in`}
          extra={[
            <Button onClick={() => history.push("/")} key="buy">
              Go to home page
            </Button>,
          ]}
        />
      ) : (
        <Result
          status="warning"
          title={`Purchasing ${data?.name} Service Failed !`}
          extra={[
            <Button onClick={() => history.push("/pricing")} key="buy">
              Try Again
            </Button>,
          ]}
        />
      )}
    </div>
  );
};

export default ResultCheckout;
