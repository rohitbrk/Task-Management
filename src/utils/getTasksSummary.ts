// @ts-nocheck
const getTasksSummary = (tasks) => {
  return tasks.reduce((acc, task) => {
    const status = task.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
};

export { getTasksSummary };
