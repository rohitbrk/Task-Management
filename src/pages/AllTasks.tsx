// @ts-nocheck
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";

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

  return (
    <div>
      AllTasks
      <div>
        <div>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
