// @ts-nocheck

import DeleteSvg from "../svg/DeleteSvg";
import EditSvg from "../svg/EditSvg";

const TaskCard = ({
  task,
  setEditTask,
  setShowEditTaskModal,
  handleDelete,
}) => {
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border rounded-lg shadow-sm">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{task.title}</h5>
        <p className="justify-between mb-3 font-normal">
          <span className="mr-2">{task.description}</span>
          <span className="ml-2">{task.dueDate}</span>
        </p>
        <p>Status - {task.status}</p>
        <button
          onClick={() => {
            setEditTask((prev) => ({
              ...task,
            }));
            setShowEditTaskModal((prev) => !prev);
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
          <EditSvg />
        </button>
        <button
          onClick={() => handleDelete(task.id)}
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
