import { _get } from "./apis"

export const getAllTopic= () => {
    return _get("/api/v1/topic/list");
};