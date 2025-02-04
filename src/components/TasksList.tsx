// @ts-nocheck
import TaskCard from "./TaskCard";

const TasksList = ({
  tasks,
  setShowEditTaskModal,
  setEditTask,
  handleDelete,
}) => {
  return (
    <ul>
      {tasks.map((item) => (
        <div key={item.id} className="m-1 p-1">
          <TaskCard
            setShowEditTaskModal={setShowEditTaskModal}
            setEditTask={setEditTask}
            task={item}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </ul>
  );
};

export default TasksList;
