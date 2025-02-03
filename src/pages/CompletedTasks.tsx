// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { TasksContext } from "../context/TasksContext";
import TasksList from "../components/TasksList";

const CompletedTasks = () => {
  const { state, dispatch } = useContext(TasksContext);
  const [completedTasks, setCompletedTasks] = useState([]);
  useEffect(() => {
    const completedTasks_ = state.filter((item) => item.status === "completed");
    setCompletedTasks((prev) => completedTasks_);
  }, [state]);

  return (
    <div>
      CompletedTasks
      <TasksList
        tasks={completedTasks}
        setShowEditTaskModal={() => {}}
        setEditTask={() => {}}
        handleDelete={() => {}}
      />
    </div>
  );
};

export default CompletedTasks;
