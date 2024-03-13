import axios from "axios";

export const fetchTasks = async (token) => {
  const config = {
    method: "get",
    url: "http://localhost:8081/api/v1/tasks",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await axios.request(config);

  return response.data;
};

export const fetchTaskQuestionnaire = async (taskId, token) => {
  const config = {
    method: "get",
    url: `http://localhost:8081/api/v1/tasks/${taskId}/questionnaires`,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await axios.request(config);

  return response.data;
};
