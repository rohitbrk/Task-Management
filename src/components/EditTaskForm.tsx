// @ts-nocheck

const EditTaskForm = ({
  editTask,
  setEditTask,
  handleEditTask,
  setShowEditTaskModal,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Edit Task</h2>
          <button
            onClick={() => setShowEditTaskModal((prev) => !prev)}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div>
          <form>
            <label>
              title
              <input
                value={editTask.title}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <br />
            <label>
              description
              <input
                value={editTask.description}
                onChange={(e) =>
                  setEditTask((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </label>
            <br />
            <label>
              dueDate
              <input
                value={editTask.dueDate}
                onChange={(e) =>
                  setEditTask((prev) => ({ ...prev, dueDate: e.target.value }))
                }
              />
            </label>
          </form>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setShowEditTaskModal((prev) => !prev)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 focus:outline-none"
          >
            close
          </button>
          <button
            onClick={handleEditTask}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;
