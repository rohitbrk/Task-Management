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
  );
};

export default TasksList;
