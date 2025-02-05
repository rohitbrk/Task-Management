// @ts-nocheck
import { useState } from "react";
import { NavLink } from "react-router";

interface TasksSummaryProps {
  summary: { [key: string]: number };
}
const TasksSummary = ({ summary }: TasksSummaryProps) => {
  const summaryArr = [];
  for (let item in summary) {
    if (item === "all") summaryArr.push(`/, ${summary[item]}`);
    else summaryArr.push(`${item}, ${summary[item]}`);
  }
  const [isActive, setIsActive] = useState("/");
  return (
    <div className="flex justify-around py-2">
      <div className="flex flex-row">
        {summaryArr.map((item) => (
          <NavLink key={item.split(",")[0]} to={`${item.split(",")[0]}`} end>
            <span
              onClick={() => setIsActive((prev) => item.split(",")[0])}
              key={item.split(",")[0]}
              className={`${
                isActive === item.split(",")[0] ? "bg-gray-200" : "bg-white-200"
              } p-2 border border-gray-100 rounder-lg rounded-md`}
            >
              {item.split(",")[0] === "/"
                ? `all-${item.split(",")[1]}`
                : `${item.split(",")[0]}-${item.split(",")[1]}`}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TasksSummary;
