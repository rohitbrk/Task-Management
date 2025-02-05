import { Task } from "../types";

const getTasksSummary = (tasks: Task[]) => {
  return tasks.reduce(
    (acc: any, task: Task) => {
      const status = task.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    { pending: 0, inprogress: 0, completed: 0 }
  );
};

export { getTasksSummary };
