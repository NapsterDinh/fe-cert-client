import React from "react";

//basic page
const LockPage = React.lazy(() => import("app/pages/BasicPage/Lock"));
const ServerErrorPage = React.lazy(() =>
  import("app/pages/BasicPage/ServerError")
);
const NotFoundPage = React.lazy(() => import("app/pages/BasicPage/NotFound"));
const LoginPage = React.lazy(() => import("app/pages/BasicPage/Login"));
const Register = React.lazy(() => import("app/pages/BasicPage/Register"));
const ForgotPassword = React.lazy(() =>
  import("app/pages/BasicPage/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("app/pages/BasicPage/ResetPassword")
);
const EmailSent = React.lazy(() => import("app/pages/BasicPage/EmailSent"));

//main page
const HomePage = React.lazy(() => import("app/pages/HomePage/HomePage"));
const SchedulePage = React.lazy(() =>
  import("app/pages/SchedulePage/SchedulePage")
);
const StudyRoad = React.lazy(() => import("app/pages/StudyRoad"));
const TopicPage = React.lazy(() => import("app/pages/TopicPage"));
const DocumentPage = React.lazy(() => import("app/pages/DocumentPage"));
const ExamPage = React.lazy(() => import("app/pages/ExamPage/ExamPage"));
const DoingQuizPage = React.lazy(() => import("app/pages/DoingQuiz/DoingQuiz"));
const AnswerQuizPage = React.lazy(() =>
  import("app/pages/AnswerQuiz/AnswerQuiz")
);
const AnswerPracticePage = React.lazy(() =>
  import("app/pages/AnswerPractice/AnswerPractice")
);
const DoingPracticePage = React.lazy(() =>
  import("app/pages/DoingPractice/DoingPractice")
);

const ProfilePage = React.lazy(() => import("app/pages/ProfilePage/Profile"));
const OverviewPage = React.lazy(() =>
  import("app/pages/ProfilePage/OverviewPage/OverviewPage")
);
const PracticePage = React.lazy(() =>
  import("app/pages/PracticePage/PracticePage")
);
const PricingPage = React.lazy(() =>
  import("app/pages/PricingPage/PricingPage")
);

const CheckoutPage = React.lazy(() => import("app/pages/Checkout/Checkout"));

const ResultCheckoutPage = React.lazy(() =>
  import("app/pages/ResultCheckout/ResultCheckout")
);

export const Routes = {
  // pages
  LockPage: {
    path: "/lock",
    exact: true,
    name: "Lock Page",
    element: LockPage,
  },
  ServerErrorPage: {
    path: "/500",
    exact: true,
    name: "Server Error Page",
    element: ServerErrorPage,
  },
  NotFoundPage: {
    path: "/404",
    exact: true,
    name: "Not Found Page",
    element: NotFoundPage,
  },
  LoginPage: { path: "/login", exact: true, name: "Login", element: LoginPage },
  Register: {
    path: "/register",
    exact: true,
    name: "Register",
    element: Register,
  },
  ForgotPassword: {
    path: "/forgotPassword",
    exact: true,
    name: "ForgotPassword",
    element: ForgotPassword,
  },
  ResetPassword: {
    path: "/reset-password",
    exact: false,
    name: "Reset Password",
    element: ResetPassword,
  },
  EmailSent: {
    path: "/emailSent",
    exact: false,
    name: "Email Sent",
    element: EmailSent,
  },

  SchedulePage: {
    path: ["/schedule", "/exams"],
    exact: true,
    name: "Examination",
    element: SchedulePage,
  },
  StudyRoad: {
    path: "/studyRoad",
    exact: true,
    name: "Learning path",
    element: StudyRoad,
  },
  TopicPage: {
    path: "/topics/:slugTopic",
    exact: true,
    name: "Topic Page",
    element: TopicPage,
  },
  DocumentPage: {
    path: "/lessons/:slugSection",
    exact: true,
    name: "Document Page",
    element: DocumentPage,
  },
  ExamPage: {
    path: ["/exams/:idExam"],
    exact: true,
    name: "Exam Page",
    element: ExamPage,
  },
  DoingQuizPage: {
    path: [
      "/exams/:idExam/attempt",
      "/exams/:idExam/attempt?question=:orderQuestion",
      "/practice/:idPractice/attempt",
      "/practice/:idPractice/attempt?question=:orderQuestion",
    ],
    exact: true,
    name: "Exam Page",
    element: DoingQuizPage,
  },
  DoingPracticePage: {
    path: [
      "/practice/:idPractice/attempt?type=:type",
      "/practice/:idPractice/attempt",
      "/practice/:idPractice/attempt?question=:orderQuestion",
    ],
    exact: true,
    name: "Practice Page",
    element: DoingPracticePage,
  },
  AnswerQuizPage: {
    path: [
      "/exams/:idExam/attempt/:hashIdExamSession/result",
      "/exams/:idExam/attempt/:hashIdExamSession/result?question=:orderQuestion",
      "/practice/:idPractice/attempt/:hashIdExamSession/result",
      "/practice/:idPractice/attempt/:hashIdExamSession/result?question=:orderQuestion",
    ],
    exact: true,
    name: "Answer Page",
    element: AnswerQuizPage,
  },
  // AnswerPracticePage: {
  //   path: [
  //     "/practice/:idPractice/attempt/:hashIdExamSession/result",
  //     "/practice/:idPractice/attempt/:hashIdExamSession/result?question=:orderQuestion",
  //   ],
  //   exact: true,
  //   name: "Answer Practice Page",
  //   element: AnswerPracticePage,
  // },
  ProfilePage: {
    path: ["/user/profile", "/user/profile/:idTab", "/user"],
    exact: true,
    name: "Your private profile",
    element: ProfilePage,
  },
  OverviewPage: {
    path: ["/user/profile/overview", "/user/profile"],
    exact: true,
    name: "Overview",
    component: OverviewPage,
  },
  PracticePage: {
    path: ["/practice"],
    exact: true,
    name: "Practice Page",
    element: PracticePage,
  },
  PricingPage: {
    path: ["/pricing"],
    exact: true,
    name: "Pricing Page",
    element: PricingPage,
  },
  CheckoutPage: {
    path: ["/checkout/:idServicePack", "/checkout/:idServicePack/pending"],
    exact: true,
    name: "Checkout Page",
    element: CheckoutPage,
  },
  ResultCheckoutPage: {
    path: ["/result-checkout/:status"],
    exact: true,
    name: "Result Checkout Page",
    element: ResultCheckoutPage,
  },

  HomePage: {
    path: "/",
    exact: true,
    name: "Home Page",
    element: HomePage,
  },
};
