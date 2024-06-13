import axios from "axios";

export const postResponse = async (questionnaireResponse, url) => {
  let config = {
    method: "post",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(questionnaireResponse),
  };

  const response = axios.request(config);

  return response;
};
