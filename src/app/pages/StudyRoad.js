import React, { useState, useEffect } from "react";
import { Container } from "@themesberg/react-bootstrap";
import StudyRoadItem from "app/components/StudyRoadItem";
import { topicsDescription } from "app/data/topic";
import { getAllTopic } from "app/core/apis/topic";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import { updateLoading } from "app/store/loadingReducer";

const StudyRoad = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        dispatch(updateLoading(true));
        const response = await getAllTopic();
        if (response?.status === 200) {
          setData(
            response?.data?.topic
              .map((item) => ({
                ...item,
                description: decodeURIComponent(
                  escape(window.atob(item?.description))
                ),
              }))
              ?.filter((t) => t?.status === "public")
          );
        }
      } catch (error) {
        alert(error);
      } finally {
        dispatch(updateLoading(false));
      }
    })();
  }, []);

  return (
    <Container className="container-card">
      <div className="layout-container-top study-road">
        <h1 className="title">Learning path for becoming a FE Engineer !!!</h1>
        <div dangerouslySetInnerHTML={{ __html: topicsDescription }}></div>
      </div>
      <div className="layout-container-body study-road">
        {Array.isArray(data) &&
          data.length > 0 &&
          data?.map((item, index) => (
            <StudyRoadItem key={item.id} index={index} item={item} />
          ))}
      </div>
    </Container>
  );
};

export default StudyRoad;
