import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const routesBreadcrumb = {
  "/studyRoad": "Learning Path",
  "/exams": "Exam",
  "/pricing": "Pricing",
  "/practice": "Practice",
  "/user": "User",
  "/user/profile": 'Profile',
  "/user/profile/overview": 'Overview',
  "/user/profile/exam-tests-history": 'Exam Tests History',
  "/user/profile/practice-tests-history": 'Practice Tests History',
  "/user/profile/mixing-exam-tests-history": 'Mixing Exam Tests History',
  "/user/profile/statement-history": 'Statement History',
};

export default function useBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{routesBreadcrumb[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return breadcrumbItems;
}
