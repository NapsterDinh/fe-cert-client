import { _get } from "./apis";

export const getAllTopic = () => {
  return _get("/api/v1/topic/list");
};

export const getAllTopicFullList = () => {
  return _get("/api/v1/topic/full-list");
};

export const getAllTopicFullListWithDeleted = () => {
  return _get("/api/v1/topic/full-with-deleted");
};



