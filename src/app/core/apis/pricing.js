import { _get, _post, _put, instance } from "./apis";

// APIS
export const getAllPricing = () => {
  return _get("/api/v1/pricing/list");
};

export const getPricingById = (id) => {
  return _get(`/api/v1/pricing?_id=${id}`);
};

export const getAllAbilityPricing = () => {
  return _get("/api/v1/pricing/ability/list");
};

export const payPricing = (data) => {
  return _post("/api/v1/pricing/pay", data);
};

export const getStatementHistoryByIdUser = (idUser) => {
  return _get("/api/v1/pricing/get-user-purchase");
};
