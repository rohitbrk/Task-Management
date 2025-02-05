import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import TasksList from "../components/TasksList";
import { Task } from "../types";

const CompletedTasks = () => {
  const { state } = useContext(TasksContext);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
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
