// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import Button from "../components/common/Button";
import EditTaskForm from "../components/EditTaskForm";
import TasksList from "../components/TasksList";
import RightPointingArrowSvg from "../svg/RightPointingArrowSvg";
import { Task } from "../types";
import { useLocation } from "react-router";
import { TasksContext } from "../context/TasksContext";

const Main = () => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { pathname } = useLocation();
  const { state, dispatch } = useContext(TasksContext);

  useEffect(() => {
    if (pathname === "/") return setFilteredTasks((prev) => state);
    const filteredTasks_ = state.filter(
      (item) => item.status === pathname.substring(1)
    );
    setFilteredTasks((prev) => filteredTasks_);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") return setFilteredTasks((prev) => state);
    setFilteredTasks((prev) => filteredTasks);
  }, [state]);

  const initialTaskState = {
    id: state.length + 1,
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  };

  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [task, setTask] = useState<Task | null>(initialTaskState);

  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    setTask((prev) => initialTaskState);
    setShowAddTaskModal((prev) => !prev);
  };

  const handleEditTask = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: editTask,
    });
    setEditTask((prev) => ({}));
    setShowEditTaskModal((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-around items-center">
        <Button
          onClick={() => setShowAddTaskModal((prev) => !prev)}
          variant="default"
        >
          Add <RightPointingArrowSvg />
        </Button>
      </div>
      <div>
        {showAddTaskModal && (
          <AddTaskForm
            task={task}
            setShowAddTaskModal={setShowAddTaskModal}
            setTask={setTask}
            handleAddTask={handleAddTask}
          />
        )}
      </div>
      <div>
        {showEditTaskModal && (
          <EditTaskForm
            editTask={editTask}
            setEditTask={setEditTask}
            handleEditTask={handleEditTask}
            setShowEditTaskModal={setShowEditTaskModal}
          />
        )}
      </div>
      <TasksList
        tasks={filteredTasks}
        setShowEditTaskModal={setShowEditTaskModal}
        setEditTask={setEditTask}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Main;
