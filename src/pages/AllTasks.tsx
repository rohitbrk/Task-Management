// @ts-nocheck
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import FilterTasks from "../components/FilterTasks";
import TasksList from "../components/TasksList";
import Button from "../components/common/Button";

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
        <div className="flex justify-around items-center gap-2">
          <Button
            onClick={() => setShowAddTaskModal((prev) => !prev)}
            variant="primary"
          >
            Add
          </Button>
          <div>
            <FilterTasks
              filters={["all", "pending", "inprogress", "completed"]}
              filterBy={filterBy}
              handleFilterTasks={handleFilterTasks}
            />
          </div>
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
          <div className="flex justify-around">All Tasks</div>
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
