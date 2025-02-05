// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import FilterTasks from "../components/FilterTasks";
import TasksList from "../components/TasksList";
import Button from "../components/common/Button";
import { Task } from "../types";
import RightPointingArrowSvg from "../svg/RightPointingArrowSvg";

const AllTasks = () => {
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
  const [filterBy, setFilterBy] = useState<string>("all");
  const [tasks, setTasks] = useState<Task[] | null>(state);

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

  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id },
    });
  };

  const handleFilterTasks = (status: string) => {
    if (status === "all") {
      setTasks((prev) => state);
      setFilterBy((prev) => status);
      return;
    }
    setFilterBy((prev) => status);
    setTasks((prev) => state.filter((item) => item.status === status));
  };

  return (
    <div>
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
        <div>
          <div className="flex justify-around text-2xl">All Tasks</div>
          <TasksList
            tasks={tasks}
            setShowEditTaskModal={setShowEditTaskModal}
            setEditTask={setEditTask}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
