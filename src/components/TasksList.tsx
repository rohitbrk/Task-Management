import { Task } from "../types";
import TaskCard from "./TaskCard";

interface TasksListProps {
  tasks: Task[];
  setShowEditTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTask: React.Dispatch<React.SetStateAction<Task>>;
  handleDelete: (id: number) => void;
}

const TasksList = ({
  tasks,
  setShowEditTaskModal,
  setEditTask,
  handleDelete,
}: TasksListProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
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
    </div>
  );
};

export default TasksList;
