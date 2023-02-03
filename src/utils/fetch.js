import axios from "axios";

export const fetch = (url) => {
  return axios(url).then((res) => res.data);
};
