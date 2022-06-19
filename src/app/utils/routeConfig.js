import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as momment from "moment";
import configuration from "app/configuration";
import { useDispatch } from "react-redux";
import { updateUser } from "app/store/userReducer";
import { BannerAnswerQuiz, BannerPricing } from "app/components/Banner/Banner";

//components
import Header from "app/components/Header";
import Footer from "app/components/Footer";
import Banner from "app/components/Banner/Banner";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(...props) => <Component {...props} />} />;
};

export const RouteWithSidebar = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <div className="App">
            <Header />
            <div className="main-app gray">
              {rest?.name === "Pricing Page" ? (
                <BannerPricing />
              ) : rest?.name === "Topic Page" ? null : rest?.name ===
                "Document Page" ? null : (
                <Banner {...props} {...rest} />
              )}
              <Component {...props} {...rest} />
            </div>
            <Footer />
          </div>
        </>
      )}
    />
  );
};

export const RouteWithSidebarNeedLogin = ({
  component: Component,
  ...rest
}) => {
  const dispatch = useDispatch();

  const checkToken = () => {
    //check token is null
    if (configuration.getAPIRequestToken()?.access !== undefined) {
      //check token is expired
      const oldRefreshToken = configuration.getAPIRequestToken().access;
      if (oldRefreshToken.expires > momment().unix()) {
        //refresh token
        return true;
      }
    }
    dispatch(updateUser({ user: "" }));
    return false;
  };

  const configRender = () => {
    if (checkToken()) {
      return (
        <Route
          {...rest}
          render={(props) => (
            <>
              <div className="App">
                <Header />
                <div className="main-app gray">
                  {rest?.name === "Answer Page" && <BannerAnswerQuiz />}

                  <Component {...props} {...rest} />
                </div>
                <Footer />
              </div>
            </>
          )}
        />
      );
    } else {
      return (
        <Redirect
          from={rest.location.pathname}
          to={{
            pathname: "/login",
            state: {
              from: rest.location.pathname,
              search: rest.location.search,
            },
          }}
        />
      );
    }
  };

  return <>{configRender()}</>;
};

export const RouteBasicPage = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const checkToken = () => {
    //check token is null
    if (configuration.getAPIRequestToken()?.access !== undefined) {
      //check toke is expired
      const oldRefreshToken = configuration.getAPIRequestToken().access;
      if (oldRefreshToken.expires > momment().unix()) {
        //refresh token
        return false;
      }
    }
    dispatch(updateUser({ user: "" }));
    return true;
  };

  const configRender = () => {
    if (checkToken()) {
      return (
        <Route {...rest} render={(...props) => <Component {...props} />} />
      );
    } else {
      return <Redirect from={rest.location.pathname} to={"/"} />;
    }
  };

  return <>{configRender()}</>;
};

export default RouteWithLoader;
