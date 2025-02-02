// @ts-nocheck
const TasksSummary = ({ summary }) => {
  return (
    <div className="py-2">
      <span className="p-2 border rounder-lg bg-gray-200">
        pending-{summary.pending}
      </span>
      <span className="p-2 border rounder-lg bg-gray-200">
        inprogress-{summary.inprogress}
      </span>
      <span className="p-2 border rounder-lg bg-gray-200">
        completed-{summary.completed}
      </span>
    </div>
  );
};

export default TasksSummary;
