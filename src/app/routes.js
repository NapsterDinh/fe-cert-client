import React from "react";

//basic page
const LockPage = React.lazy(() => import("app/pages/BasicPage/Lock"));
const ServerErrorPage = React.lazy(() => import("app/pages/BasicPage/ServerError"));
const NotFoundPage = React.lazy(() => import("app/pages/BasicPage/NotFound"));
const LoginPage = React.lazy(() => import("app/pages/BasicPage/Login"));
const Register = React.lazy(() => import("app/pages/BasicPage/Register"));
const ForgotPassword = React.lazy(() => import("app/pages/BasicPage/ForgotPassword"));
const ResetPassword = React.lazy(() => import("app/pages/BasicPage/ResetPassword"));
const EmailSent = React.lazy(() => import("app/pages/BasicPage/EmailSent"));

//main page
const HomePage = React.lazy(() => import("app/pages/HomePage/HomePage"));
const SchedulePage = React.lazy(() => import("app/pages/SchedulePage"));
const StudyRoad = React.lazy(() => import("app/pages/StudyRoad"));
const TopicPage = React.lazy(() => import("app/pages/TopicPage"));
const DocumentPage = React.lazy(() => import("app/pages/DocumentPage"));
const ExamPage = React.lazy(() => import("app/pages/ExamPage"));
const DoingQuizPage = React.lazy(() => import("app/pages/DoingQuiz"));
const AnswerQuizPage = React.lazy(() => import("app/pages/AnswerQuiz"));

export const Routes = {
  // pages
  LockPage: { path: "/lock", exact: true, name: "Lock Page", element: LockPage },
  ServerErrorPage: { path: "/500", exact: true, name: "Server Error Page", element: ServerErrorPage },
  NotFoundPage: { path: "/404", exact: true, name: "Not Found Page", element: NotFoundPage },
  LoginPage: { path: "/login", exact: true, name: "Login", element: LoginPage },
  Register: { path: "/register", exact: true, name: "Register", element: Register },
  ForgotPassword: { path: "/forgotPassword", exact: true, name: "ForgotPassword", element: ForgotPassword },
  ResetPassword: { path: "/reset-password", exact: false, name: "Reset Password", element: ResetPassword },
  EmailSent: { path: "/emailSent", exact: false, name: "Email Sent", element: EmailSent },

  SchedulePage: { path: "/schedule", exact: true, name: "Schedule Page", element: SchedulePage },
  StudyRoad: { path: "/studyRoad", exact: true, name: "Study Road", element: StudyRoad },
  TopicPage: { path: "/topic/:slugTopic", exact: true, name: "Topic Page", element: TopicPage },
  DocumentPage: { path: "/section/:slugSection", exact: true, name: "Document Page", element: DocumentPage },
  ExamPage: { path: "/exams/:slugExam", exact: true, name: "Exam Page", element: ExamPage },
  DoingQuizPage: { path: ["/exams/:slugExam/attempt","/exams/:slugExam/attempt?question=:orderQuestion"], exact: true, name: "Exam Page", element: DoingQuizPage },
  AnswerQuizPage: { path: ["/exams/:slugExam/attempt/:hashIdExamSession/result","/exams/:slugExam/attempt/:hashIdExamSession/result?question=:orderQuestion"], exact: true, name: "Answer Page", element: AnswerQuizPage },

  HomePage: {
    path: "/",
    exact: true,
    name: "Home Page",
    element: HomePage,
  },
};
