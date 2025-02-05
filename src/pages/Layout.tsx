// @ts-nocheck
import { useLocation } from "react-router";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Task } from "../types";
import TasksList from "../components/TasksList";
import Button from "../components/common/Button";
import RightPointingArrowSvg from "../svg/RightPointingArrowSvg";
import AddTaskForm from "../components/AddTaskForm";

const Layout = () => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") return setFilteredTasks((prev) => state);
    const filteredTasks_ = state.filter(
      (item) => item.status === pathname.substring(1)
    );
    setFilteredTasks((prev) => filteredTasks_);
  }, [pathname]);

  const { state, dispatch } = useContext(TasksContext);
  const initialTaskState = {
    id: state.length + 1,
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  };
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState<boolean>(false);
  const [task, setTask] = useState<Task | null>(initialTaskState);
  const [editTask, setEditTask] = useState<Task | null>(null);

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

  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex justify-around items-center">
        <TasksSummary summary={getTasksSummary(state)} />
      </div>
      <main>
        {/* <Outlet /> */}
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
          setShowEditTaskModal={setShowEditTaskModal}
          setEditTask={setEditTask}
          handleDelete={handleDelete}
          tasks={filteredTasks}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
