import { Button, Col, Container, Table } from "@themesberg/react-bootstrap";
import { ReactComponent as TickIcon } from "app/assets/icon/tick.svg";
import { ReactComponent as UnTickIcon } from "app/assets/icon/untick.svg";
import React from "react";
import { getAllPricing, getAllAbilityPricing } from "app/core/apis/pricing";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLoading } from "app/store/loadingReducer";

import "./PricingPage.css";

const PricingPage = () => {
  const [allPricing, setAllPricing] = React.useState([]);
  const [allAbilities, setAllAbilities] = React.useState([]);
  const [allPricingPublic, setAllPricingPublic] = React.useState([]);
  const user = useSelector((state) => state.persist.user?.user);
  console.log(user);
  console.log(
    user?.pricing?.pricing?._id !== undefined &&
      new Date(user?.pricing?.expireDate).getTime() > new Date().getTime()
  );
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(updateLoading(true));
        const response1 = await getAllAbilityPricing();
        setAllAbilities(response1?.data?.ability);
        const response = await getAllPricing();
        if (response.status === 200) {
          let temp = [];
          Object.entries(response?.data?.pricing).map((t) => temp.push(t[1]));
          temp.unshift({
            _id: "defaulPricing",
            name: "Basic",
            description: "Practice with common interest",
            price: 0,
            abilities: response1?.data?.ability?.filter((t) => t?.isDefault),
            status: "public",
            duration: 30,
            numberOfPayment: 0,
            numberOfUser: 0,
            revenue: 0,
            isBestValue: false,
            isDeleted: false,
            createdAt: "2022-06-22T04:12:42.407Z",
            updatedAt: "2022-06-22T04:18:06.737Z",
            __v: 0,
          });
          setAllPricing(temp);
          setAllPricingPublic(temp?.filter((t) => t?.status === "public"));
        } else {
          console.log(response?.data?.msg);
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(updateLoading(false));
      }
    })();
  }, []);

  return (
    <>
      <Container className="d-flex justify-content-center mt-4 pricing-page-container">
        {allPricing?.map((item) => {
          return (
            <PricingItem
              isUsing={user?.pricing?.pricing?._id === item?._id}
              isPremium={true}
              key={item._id}
              item={item}
              allAbilities={allAbilities}
              history={history}
            />
          );
        })}
      </Container>
      <div className="d-flex justify-content-center mt-4 compared-feature-container">
        <h1>Comparation between service package</h1>
        <div className="compared-feature">
          <div>
            <div className="d-flex">
              <Col lg={4} className="th-title td"></Col>
              {allPricingPublic?.map((u) => (
                <Col
                  className="text-center td th-title"
                  key={`theader${u._id}`}
                >
                  {u?.name}
                </Col>
              ))}
            </div>
          </div>
          <div>
            {allAbilities?.map((t) => (
              <div key={`trow${t?._id}`} className="d-flex">
                <Col lg={4} className="td td-row-title">
                  <p className="td-name">{t?.name}</p>
                  <p>{t?.description}</p>
                </Col>
                {allPricingPublic?.map((u) => (
                  <Col
                    className="text-center td td-tick"
                    key={`td${t?._id}${u?._id}`}
                  >
                    {u?.abilities?.findIndex((v) => v?._id === t?._id) !==
                    -1 ? (
                      <TickIcon className="td-green-tick" />
                    ) : (
                      <UnTickIcon className="td-red-tick" />
                    )}
                  </Col>
                ))}
              </div>
            ))}
          </div>
          <div className="d-flex">
            <Col lg={4} className="td td-row-title"></Col>
            {allPricingPublic?.map((u) => (
              <Col className="text-center td th-title" key={`theader${u._id}`}>
                {u?.name === "Basic" ? (
                  <>
                    <Button className="btn-padding mt-3" disabled>
                      Default
                    </Button>
                    {u?.price !== 0 && <h3 className="mt-3">Free</h3>}
                  </>
                ) : user?.pricing?.pricing?._id === u?._id ? (
                  <>
                    <Button className="btn-padding mt-3" disabled>
                      Using
                    </Button>
                    <h3 className="mt-3">{u?.price?.$numberDecimal + " $"}</h3>
                  </>
                ) : user?.pricing?.pricing?._id !== undefined &&
                  new Date(user?.pricing?.expireDate).getTime() >
                    new Date().getTime() ? (
                  <>
                    <Button disabled className="btn-padding mt-3">
                      Cannot buy
                    </Button>
                    <h3 className="mt-3">{u?.price?.$numberDecimal + " $"}</h3>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => history.push("/checkout/" + u?._id)}
                      className="btn-padding mt-3"
                    >
                      Buy now
                    </Button>
                    <h3 className="mt-3">{u?.price?.$numberDecimal + " $"}</h3>
                  </>
                )}
              </Col>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PricingItem = ({
  isUsing,
  item,
  allAbilities,
  history,
  handlePayment,
}) => {
  const user = useSelector((state) => state.persist.user?.user);
  return (
    <Col
      className={`pricing-item ${isUsing ? "using" : ""}`}
      style={{ position: "relative", minHeight: "569.14px" }}
    >
      <div className="pricing-item-padding">
        <div
          style={
            item?.status === "coming_soon"
              ? { filter: "blur(8px)" }
              : { filter: "blur(0px)" }
          }
        >
          <h1>{item?.name}</h1>
          <h6>{item?.description}</h6>
          <h1 className="price">
            {item?.price === 0 ? "Free" : item?.price?.$numberDecimal + " $"}
          </h1>
          {item?.name === "Basic" ? (
            <Button disabled>Default</Button>
          ) : isUsing ? (
            <Button disabled>Using</Button>
          ) : user?.pricing?.pricing?._id !== undefined &&
            new Date(user?.pricing?.expireDate).getTime() >
              new Date().getTime() ? (
            <Button disabled className>
              Cannot buy
            </Button>
          ) : (
            <Button
              onClick={() => history.push("/checkout/" + item?._id)}
              className
            >
              Buy now
            </Button>
          )}

          <div className="my-4">
            <ul>
              {allAbilities?.map((t) => {
                if (item?.abilities.findIndex((u) => u._id === t._id) !== -1) {
                  return (
                    <li>
                      <TickIcon />
                      {t?.name}
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <UnTickIcon />
                      {t?.name}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      {item?.status === "coming_soon" && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
          className="blur-fragment d-flex justify-content-center align-items-center"
        >
          <h1>Coming Soon</h1>
        </div>
      )}
    </Col>
  );
};

export default PricingPage;
