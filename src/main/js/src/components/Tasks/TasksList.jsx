import { useEffect, useState } from "react";
import { fetchTasks } from "../../api/tasks";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../slices/tokenSlice";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const authToken = useSelector(selectAuthToken);

  useEffect(() => {
    const fetchTasksData = async () => {
      const response = await fetchTasks(authToken);

      setTasks(response);
    };

    if (authToken !== "") {
      fetchTasksData();
    }
  }, [authToken]);

  return (
    <>
      {tasks.map((task, index) => {
        return <TaskCard key={index} task={task} />;
      })}
    </>
  );
}

export default TasksList;
