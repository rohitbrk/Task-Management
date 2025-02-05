// @ts-nocheck
import DeleteSvg from "../svg/DeleteSvg";
import EditSvg from "../svg/EditSvg";
import GreenFillSvg from "../svg/GreenFill";
import RedFillSvg from "../svg/RedFillSvg";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  setEditTask: React.Dispatch<React.SetStateAction<Task>>;
  setShowEditTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: number) => void;
}

const TaskCard = ({
  task,
  setEditTask,
  setShowEditTaskModal,
  handleDelete,
}: TaskCardProps) => {
  return (
    <div className="block min-w-sm sm:min-w-md px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200">
      <div>
        <div className="flex justify-between">
          <h5 className="my-auto text-2xl font-bold tracking-tight text-gray-900">
            {task.title}
          </h5>
          <div>
            <span className="rounded-md bg-gray-100 font-normal text-gray-700">
              {task.dueDate}
            </span>
            <p className="font-normal text-gray-700 flex gap-1">
              {task.status === "completed" ? <GreenFillSvg /> : <RedFillSvg />}
              <span>{task.status}</span>
            </p>
          </div>
        </div>
        <p className="justify-between mb-3 font-normal text-gray-700">
          {task.description}
        </p>
        {/* <p className="font-normal text-gray-700 flex gap-1">
          {task.status === "completed" ? <GreenFillSvg /> : <RedFillSvg />}
          <span>{task.status}</span>
        </p> */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setEditTask((prev) => ({
                ...task,
              }));
              setShowEditTaskModal((prev) => !prev);
            }}
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Edit <EditSvg />
          </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete <DeleteSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskCard;
