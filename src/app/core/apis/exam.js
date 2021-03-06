import { _get, _post } from "./apis";

export const getAllExam = (type) => {
  if (type !== undefined) {
    return _get(`/api/v1/exam/list?type=${type}`);
  }
  return _get("/api/v1/exam/list");
};

export const getExamById = (id) => {
  return _get(`/api/v1/exam?_id=${id}`);
};

export const checkExamByIdAndUser = (id, user) => {
  if (id === undefined) {
    return _get(`/api/v1/exam/session`);
  }
  return _get(`/api/v1/exam/session?exam=${id}&user=${user}`);
};

export const getStatisticByIDExam = (id) => {
  return _get(`/api/v1/exam/statistic?exam=${id}`);
};

export const updateAnswer = (data) => {
  return _post(`/api/v1/exam/update-result`, data);
};

export const createSession = (data) => {
  return _post(`/api/v1/exam/create-session`, data);
};

export const submitResult = (data) => {
  return _post(`/api/v1/exam/submit`, data);
};

export const getCurrentExam = (id) => {
  return _get(`/api/v1/exam/current-session?exam=${id}`);
};

export const getResultByIdUserExam = (data) => {
  return _post(`/api/v1/exam/result`, data);
};

export const getHistoryExam = () => {
  return _get(`/api/v1/exam/history`);
};

export const getHistoryByIdExam = (idExam) => {
  return _get(`/api/v1/exam/history-by-id?exam=${idExam}`);
};

export const predictNextResultExam = (idExam) => {
  return _get(`/api/v1/exam/predict?exam=${idExam}`);
};
