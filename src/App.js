import PopUpCurrentExam from "app/components/PopUpCurrentExam/PopUpCurrentExam";
import PreloaderNoProps from "app/components/PreloaderNoProps";
import ScrollTop from "app/components/ScrollTop";
import { Routes } from "app/routes";
import "app/scss/_App.scss";
//components
import {
  RouteBasicPage,
  RouteWithSidebar,
  RouteWithSidebarNeedLogin,
} from "app/utils/routeConfig";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={PreloaderNoProps}>
        <ScrollTop />
        <PopUpCurrentExam />

        <Switch>
          {/* RouteWithLoader */}
          <RouteBasicPage
            exact={Routes.LoginPage.exact}
            path={Routes.LoginPage.path}
            component={Routes.LoginPage.element}
            name={Routes.LoginPage.name}
          />

          <RouteBasicPage
            exact={Routes.Register.exact}
            path={Routes.Register.path}
            component={Routes.Register.element}
            name={Routes.Register.name}
          />

          <RouteBasicPage
            exact={Routes.ForgotPassword.exact}
            path={Routes.ForgotPassword.path}
            component={Routes.ForgotPassword.element}
            name={Routes.ForgotPassword.name}
          />

          <RouteBasicPage
            exact={Routes.ResetPassword.exact}
            path={Routes.ResetPassword.path}
            component={Routes.ResetPassword.element}
            name={Routes.ResetPassword.name}
          />

          <RouteBasicPage
            exact={Routes.EmailSent.exact}
            path={Routes.EmailSent.path}
            component={Routes.EmailSent.element}
            name={Routes.EmailSent.name}
          />

          {/* RouteWithSideBar */}
          <RouteWithSidebar
            exact={Routes.SchedulePage.exact}
            path={Routes.SchedulePage.path}
            component={Routes.SchedulePage.element}
            name={Routes.SchedulePage.name}
          />

          <RouteWithSidebar
            exact={Routes.StudyRoad.exact}
            path={Routes.StudyRoad.path}
            component={Routes.StudyRoad.element}
            name={Routes.StudyRoad.name}
          />

          <RouteWithSidebar
            exact={Routes.TopicPage.exact}
            path={Routes.TopicPage.path}
            component={Routes.TopicPage.element}
            name={Routes.TopicPage.name}
          />

          <RouteWithSidebar
            exact={Routes.DocumentPage.exact}
            path={Routes.DocumentPage.path}
            component={Routes.DocumentPage.element}
            name={Routes.DocumentPage.name}
          />

          <RouteWithSidebar
            exact={Routes.ExamPage.exact}
            path={Routes.ExamPage.path}
            component={Routes.ExamPage.element}
            name={Routes.ExamPage.name}
          />

          <RouteWithSidebarNeedLogin
            exact={Routes.DoingQuizPage.exact}
            path={Routes.DoingQuizPage.path}
            component={Routes.DoingQuizPage.element}
            name={Routes.DoingQuizPage.name}
          />

          {/* <RouteWithSidebarNeedLogin
            exact={Routes.DoingPracticePage.exact}
            path={Routes.DoingPracticePage.path}
            component={Routes.DoingPracticePage.element}
            name={Routes.DoingPracticePage.name}
          /> */}

          <RouteWithSidebarNeedLogin
            exact={Routes.AnswerQuizPage.exact}
            path={Routes.AnswerQuizPage.path}
            component={Routes.AnswerQuizPage.element}
            name={Routes.AnswerQuizPage.name}
          />

          {/* <RouteWithSidebarNeedLogin
            exact={Routes.AnswerPracticePage.exact}
            path={Routes.AnswerPracticePage.path}
            component={Routes.AnswerPracticePage.element}
            name={Routes.AnswerPracticePage.name}
          /> */}

          <RouteWithSidebar
            exact={Routes.HomePage.exact}
            path={Routes.HomePage.path}
            component={Routes.HomePage.element}
            name={Routes.HomePage.name}
          />

          <RouteWithSidebarNeedLogin
            exact={Routes.ProfilePage.exact}
            path={Routes.ProfilePage.path}
            component={Routes.ProfilePage.element}
            name={Routes.ProfilePage.name}
          />

          <RouteWithSidebarNeedLogin
            exact={Routes.CheckoutPage.exact}
            path={Routes.CheckoutPage.path}
            component={Routes.CheckoutPage.element}
            name={Routes.CheckoutPage.name}
          />

          <RouteWithSidebarNeedLogin
            exact={Routes.ResultCheckoutPage.exact}
            path={Routes.ResultCheckoutPage.path}
            component={Routes.ResultCheckoutPage.element}
            name={Routes.ResultCheckoutPage.name}
          />

          <RouteWithSidebar
            exact={Routes.PracticePage.exact}
            path={Routes.PracticePage.path}
            component={Routes.PracticePage.element}
            name={Routes.PracticePage.name}
          />
          <RouteWithSidebar
            exact={Routes.PricingPage.exact}
            path={Routes.PricingPage.path}
            component={Routes.PricingPage.element}
            name={Routes.PricingPage.name}
          />

          <Route component={Routes.NotFoundPage.element} />
          <Route
            exact={Routes.LockPage.exact}
            path={Routes.LockPage.path}
            component={Routes.LockPage.element}
          />
          <Route
            exact={Routes.ServerErrorPage.exact}
            path={Routes.ServerErrorPage.path}
            component={Routes.ServerErrorPage.element}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
