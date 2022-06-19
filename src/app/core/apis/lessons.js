import { _get } from "./apis";

export const getLessonByID = (id) => {
  return _get(`/api/v1/topic/lesson?_id=${id}`);
};
