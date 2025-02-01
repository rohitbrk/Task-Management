// @ts-nocheck
const TasksSummary = ({ summary }) => {
  return (
    <div>
      Summary
      <div>pending-{summary.pending}</div>
      <div>inprogress-{summary.inprogress}</div>
      <div>completed-{summary.completed}</div>
    </div>
  );
};

export default TasksSummary;
