// @ts-nocheck
const getTasksSummary = (tasks) => {
  return tasks.reduce((acc, task) => {
    const status = task.status;
    // Increment the count for the task's status, or initialize it if not present
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
};

export { getTasksSummary };
