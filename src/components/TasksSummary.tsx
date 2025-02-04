// @ts-nocheck
const TasksSummary = ({ summary }) => {
  const summaryArr = [];
  for (let item in summary) summaryArr.push(`${item}, ${summary[item]}`);
  return (
    <div className="py-2">
      {summaryArr.map((item) => (
        <span
          key={item.split(",")[0]}
          className="p-2 border border-gray-300 rounder-lg bg-gray-100 rounded-md"
        >{`${item.split(",")[0]}-${item.split(",")[1]}`}</span>
      ))}
    </div>
  );
};

export default TasksSummary;
