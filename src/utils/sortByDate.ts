// @ts-nocheck
const sortByDate = (a, b) => {
  const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
  const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
  return dateA - dateB;
};

export { sortByDate };
