interface TasksSummaryProps {
  summary: { [key: string]: number };
}
const TasksSummary = ({ summary }: TasksSummaryProps) => {
  const summaryArr = [];
  for (let item in summary) summaryArr.push(`${item}, ${summary[item]}`);
  return (
    <div className="flex justify-around py-2 basis-3/4 ">
      <div className="flex flex-col sm:flex-row">
        {summaryArr.map((item) => (
          <span
            key={item.split(",")[0]}
            className="p-2 border border-gray-300 rounder-lg bg-gray-100 rounded-md"
          >{`${item.split(",")[0]}-${item.split(",")[1]}`}</span>
        ))}
      </div>
    </div>
  );
};

export default TasksSummary;
