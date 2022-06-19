import { _get, _post } from "./apis";

export const getSectionById = (id) => {
  return _get(`/api/v1/topic/section?_id=${id}`);
};
