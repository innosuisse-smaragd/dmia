import axios from "axios";

export const login = async (credentials) => {
  let returnData;
  let hasError;

  let config = {
    method: "post",
    url: "http://localhost:8081/api/v1/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(credentials),
  };

  const response = await axios.request(config).catch((error) => {
    hasError = true;
    if (error.response) {
      returnData = error.response;
    }
  });

  if (!hasError) {
    returnData = response;
  }

  return returnData;
};

export const checkName = async (fullName) => {
  const response = await axios.get("http://localhost:8081/api/v1/users/exist", {
    params: { fullName },
  });

  return response.data;
};
