import axios from "axios";

export const fetchTasks = async () => {
  let answer;
  let hasError = false;

  let config = {
    method: "get",
    url: "http://localhost:8081/api/v1/tasks",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.request(config).catch(function (error) {
    hasError = true;
    if (error.response) {
      if (error.response.status === 400) {
        answer = {
          result: "Bitte stellen Sie eine Frage mit mehr als drei Wörtern.",
        };
      } else if (error.response.status === 501) {
        answer = {
          result:
            "Es tut mir leid, auf diese Frage wurde keine Antwort gefunden. Bitte stellen Sie die Frage ihrem Arzt bzw. Ihrer Ärztin.",
        };
      }
    } else if (error.request) {
      if (error.code === "ERR_NETWORK") {
        answer = {
          result:
            "Es tut mir leid, ich habe derzeit Probleme, Ihre Frage zu beantworten. Bitte melden Sie dies dem medizinischen Personal",
        };
      }
      console.log(error.code);
    } else {
      console.log("Error", error.message);
    }
  });

  if (!hasError) {
    answer = response.data;
  }

  return answer;
};