// @ts-nocheck

import DeleteSvg from "../svg/DeleteSvg";
import EditSvg from "../svg/EditSvg";

const TaskCard = ({
  id,
  title,
  description,
  status,
  dueDate,
  setEditTask,
  setShowEditTaskModal,
  handleDelete,
}) => {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          onClick={() => {
            setEditTask((prev) => ({
              id,
              title,
              description,
              status,
              dueDate,
            }));
            setShowEditTaskModal((prev) => !prev);
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
          <EditSvg />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
          <DeleteSvg />
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
