// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { sortTasksByDueDate } from "../utils/sortTasksByDueDate";
import FilterTasks from "../components/FilterTasks";
import CompletedTasks from "./CompletedTasks";
import { NavLink } from "react-router";
import TasksList from "../components/TasksList";

const AllTasks = () => {
  const { state, dispatch } = useContext(TasksContext);
  const initialTaskState = {
    id: state.length + 1,
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  };
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [task, setTask] = useState(initialTaskState);
  const [editTask, setEditTask] = useState({});
  const [filterBy, setFilterBy] = useState("all");
  const [tasks, setTasks] = useState(state);

  useEffect(() => {
    setTasks((prev) => state);
  }, [state]);

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

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const handleFilterTasks = (status) => {
    if (status === "all") return setTasks((prev) => state);
    setTasks((prev) => state.filter((item) => item.status === status));
  };

  return (
    <div>
      <div>
        <div>
          <TasksSummary summary={getTasksSummary(state)} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none">
            <NavLink to="/completed-tasks" end>
              View Completed Tasks
            </NavLink>
          </button>
        </div>
        <FilterTasks
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          handleFilterTasks={handleFilterTasks}
        />
      </div>
      <div>
        <div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            onClick={() => setShowAddTaskModal((prev) => !prev)}
          >
            add
          </button>
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
          tasks={tasks}
          setShowEditTaskModal={setShowEditTaskModal}
          setEditTask={setEditTask}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default AllTasks;
