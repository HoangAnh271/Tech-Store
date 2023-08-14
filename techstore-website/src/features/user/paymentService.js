import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getUrl = async ({ info, amount }) => {
  const response = await axios.post(`${base_url}payment/urlpayment`, {
    amount,
    info
  });
  return response.data;
};

export const validatePayment = async search => {
  const response = await axios.post(`${base_url}payment/validate${search}`);
  return response.data;
};
