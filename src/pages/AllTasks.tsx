// @ts-nocheck
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { sortTasksByDueDate } from "../utils/sortTasksByDueDate";
import FilterTasks from "../components/FilterTasks";
import CompletedTasks from "./CompletedTasks";
import { NavLink } from "react-router";
import FilteredTasks from "../components/FilterTasks";

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
  const [toggleCompletedTasks, setToggleCompletedTasks] = useState(false);
  const [task, setTask] = useState(initialTaskState);
  const [editTask, setEditTask] = useState({});
  const [filteredTasks, setFilteredTasks] = useState("all");
  const [tasks, setTasks] = useState(state);

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
    setTask((prev) => initialTaskState);
    setShowAddTaskModal((prev) => !prev);
    setTasks((prev) => [...prev, task]);
  };

  const handleEditTask = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: editTask,
    });
    setShowEditTaskModal((prev) => !prev);
    setTasks((prev) =>
      prev.map((item) => {
        if (item.id === editTask.id) return editTask;
        else return item;
      })
    );
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFilterTasks = (status) => {
    if (status === "all") return setTasks((prev) => state);
    let updatedTasks = [...state];
    updatedTasks = updatedTasks
      .map((item) => {
        if (item.status === status) return item;
        else return null;
      })
      .filter((item) => item !== null);

    setTasks((prev) => updatedTasks);
  };

  return (
    <div>
      <div>
        <div>
          {<TasksSummary summary={getTasksSummary(state)} />}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none">
            <NavLink to="/completed-tasks" end>
              View Completed Tasks
            </NavLink>
          </button>
        </div>
        <FilteredTasks
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
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
        <ul>
          {tasks.map((item) => (
            <div key={item.id}>
              <TaskCard
                setShowEditTaskModal={setShowEditTaskModal}
                setEditTask={setEditTask}
                task={item}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllTasks;
