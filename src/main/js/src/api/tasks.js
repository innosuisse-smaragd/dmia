import axios from "axios";

export const fetchTasks = async () => {
  const config = {
    method: "get",
    url: "http://localhost:8081/api/v1/tasks",
  };

  const response = await axios.request(config);

  return response.data;
};

export const fetchTaskQuestionnaire = async (taskId, token) => {
  console.log(token);

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

export const postQuestionnaireResponse = async (
  questionnaireResponse,
  taskId,
  token
) => {
  let config = {
    method: "post",
    url: `http://localhost:8081/api/v1/tasks/${taskId}/responses/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: JSON.stringify(questionnaireResponse),
  };

  const response = axios.request(config);

  console.log(response);
};
