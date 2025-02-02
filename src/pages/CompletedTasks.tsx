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
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none">
        <NavLink to="/" end>
          Go to Home
        </NavLink>
      </button>
    </div>
  );
};

export default CompletedTasks;
