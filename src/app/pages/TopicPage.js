import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container } from "@themesberg/react-bootstrap";
import { Breadcrumb, PageHeader } from "antd";
import bannerBg from "app/assets/img/to-chuc-thi-scaled.jpg";
import { getAllTopicFullList } from "app/core/apis/topic";
import { updateLoading } from "app/store/loadingReducer";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const TopicPage = () => {
  const [data, setData] = useState("");
  const { slugTopic } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        dispatch(updateLoading(true));
        const response = await getAllTopicFullList();
        if (response?.status === 200) {
          const temp = response?.data?.topic?.filter(
            (item) => item._id === slugTopic && item.status === "public"
          )?.[0];
          if (temp === undefined) {
            window.location = "/404";
          } else {
            setData(temp);
          }
        }
      } catch (error) {
        alert(error);
      } finally {
        dispatch(updateLoading(false));
      }
    })();
  }, []);

  const countTotalLessons = () => {
    if (data?._id !== undefined) {
      let total = 0;
      data?.sections
        ?.filter((t) => t.status === "public")
        ?.map((item) => (total += item.lessons.length));
      return total;
    }
    return 0;
  };

  return (
    <>
      <div
        className={"pageBanner_def"}
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container_common">
          <div className="content_common">
            <div className="ifm">
              <>
                <Col span={18}>
                  <PageHeader
                    className="site-page-header"
                    title={data?.title}
                    breadcrumbRender={() => (
                      <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                          <a href="/studyRoad">Learning Path</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                          <Breadcrumb.Item>Topic</Breadcrumb.Item>
                        </Breadcrumb.Item>
                      </Breadcrumb>
                    )}
                  />
                </Col>
              </>
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "300px" }}>
        {data?._id !== undefined && (
          <Container className="container-card">
            <div className="layout-container-top module">
              <h1 className="title">{data.title}</h1>
              {data?.description !== undefined && (
                <div
                  className="sub-title"
                  dangerouslySetInnerHTML={{
                    __html: decodeURIComponent(
                      escape(window.atob(data?.description))
                    ),
                  }}
                ></div>
              )}
              <h3 className="what-learning-title">What you'll learn ?</h3>
              <div className="what-learning-title-container">
                {data?.objective?.map((item) => (
                  <div className="what-learning-item">
                    <FontAwesomeIcon icon={faCirclePlay} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="layout-container-body module">
              <div className="d-flex justify-content-between">
                <h3 className="what-learning-title">Topic Content</h3>
                <span className="total-sections">
                  {data?.sections?.filter((t) => t.status === "public")?.length}{" "}
                  sections
                </span>
                <span className="icon-circle">•</span>
                <span className="total-lectures">
                  {countTotalLessons()} lessons
                </span>
              </div>
              <Accordion>
                {data?.sections
                  ?.filter((t) => t.status === "public")
                  ?.map((item, index) => (
                    <Accordion.Item key={item._id} eventKey={item._id}>
                      <Accordion.Header>{`${index + 1}. ${
                        item.title
                      }`}</Accordion.Header>
                      <Accordion.Body>
                        {item?.lessons?.map((item2, index2) => (
                          <a href={`/lessons/${item2._id}`}>{`${index + 1}.${
                            index2 + 1
                          } ${item2.title}`}</a>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default TopicPage;
