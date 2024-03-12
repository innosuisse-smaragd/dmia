import axios from "axios";

export const login = async () => {
  // TODO: ADD ERROR HANDLING
  let config = {
    method: "post",
    url: "http://localhost:8081/api/v1/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username: "Miriam Brönnimann",
      password: "1973-03-08",
    }),
  };

  const response = await axios.request(config);

  return response.data;
};
