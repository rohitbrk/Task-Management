import { Task } from "../types";

const getTasksSummary = (tasks: Task[]) => {
  return tasks.reduce(
    (acc: any, task: Task) => {
      acc["all"] += 1;
      const status = task.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    { all: 0, pending: 0, inprogress: 0, completed: 0 }
  );
};

export { getTasksSummary };
