// @ts-nocheck
import { Task } from "../types";

const sortByDate = (a: Task, b: Task): any => {
  const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
  const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
  return dateA - dateB;
};

export { sortByDate };
