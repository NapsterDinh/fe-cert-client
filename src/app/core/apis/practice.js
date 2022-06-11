import { _get, _post } from "./apis";

export const createPractice = (data) => {
  return _post(`/api/v1/exam/create-random-session`, data);
};

export const createRandomTopicSession = (data) => {
  return _post(`/api/v1/exam/create-random-topic-session`, data);
};

export const getCurrentRandomSession = (type) => {
  return _get(`/api/v1/exam/current-random-session?type=${type}`);
};
