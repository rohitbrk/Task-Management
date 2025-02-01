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
  const [showFilterTasksModal, setShowFilterTasksModal] = useState(false);

  const [task, setTask] = useState(initialTaskState);
  const [editTask, setEditTask] = useState({});

  const [statuses, setStatuses] = useState([
    { status: "pending", checked: false },
    { status: "inprogress", checked: false },
    { status: "completed", checked: false },
  ]);

  const toggleChecked = (status) => {
    let updatedStatuses = [...statuses];
    updatedStatuses = updatedStatuses.map((item) => {
      if (item.status === status) return { ...item, checked: !item.checked };
      else return item;
    });
    setStatuses((prev) => updatedStatuses);
  };

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        dueDate: task.dueDate,
      },
    });
    setTask((prev) => initialTaskState);
    setShowAddTaskModal((prev) => !prev);
  };

  const handleEditTask = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        id: editTask.id,
        title: editTask.title,
        description: editTask.description,
        status: editTask.status,
        dueDate: editTask.dueDate,
      },
    });
    setShowEditTaskModal((prev) => !prev);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const handleFilterTasks = () => {
    if (statuses.length === 0) return;
    dispatch({
      type: "FILTER_TASKS",
      payload: [
        statuses.map((item) => {
          if (item.checked === true) return item.status;
          else return null;
        }),
      ],
    });
    setShowFilterTasksModal((prev) => !prev);
  };

  return (
    <div>
      <div>
        <div>{<TasksSummary summary={getTasksSummary(state)} />}</div>
        <div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            onClick={() => setShowFilterTasksModal((prev) => !prev)}
          >
            Filter
          </button>
        </div>
        {showFilterTasksModal && (
          <FilterTasks
            toggleChecked={toggleChecked}
            statuses={statuses}
            handleFilterTasks={handleFilterTasks}
          />
        )}
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
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            onClick={() => dispatch({ type: "SORT_TASKS_BY_DUE_DATE" })}
          >
            sort by due date
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
          {state.map((item) => (
            <div key={item.id}>
              <TaskCard
                setShowEditTaskModal={setShowEditTaskModal}
                setEditTask={setEditTask}
                id={item.id}
                title={item.title}
                description={item.description}
                status={item.status}
                dueDate={item.dueDate}
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
