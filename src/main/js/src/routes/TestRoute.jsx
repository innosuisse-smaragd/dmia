import { useState } from "react";
import { login } from "../api/authentication";
import { fetchTasks } from "../api/tasks";

// THIS FILE WAS CREATED TO TEST THE AUTHENTICATION AND SHOULD BE DELETED IN THE FINAL PRODUCT
function TestRoute() {
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);

  const onLogin = async () => {
    console.log("LOGIN WAS CLICKED");
    const newToken = await login();
    setToken(newToken);
  };

  const onFetchTasks = async () => {
    console.log("FETCH TASKS WAS CLICKED");
    const newTasks = await fetchTasks(token);
    setTasks(newTasks);
  };

  console.log("Token:", token);
  console.log("Tasks:", tasks);

  return (
    <>
      <button onClick={onLogin}>login</button>
      <button onClick={onFetchTasks}>Fetch tasks</button>
    </>
  );
}

export default TestRoute;
