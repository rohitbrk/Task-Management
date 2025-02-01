// @ts-nocheck
import { createContext, useReducer } from "react";
import { sortByDate } from "../utils/sortByDate";

const initialState = [
  {
    id: 3,
    title: "item3",
    description: "description4",
    status: "pending",
    dueDate: "26-02-2025",
  },
  {
    id: 1,
    title: "item1",
    description: "description1",
    status: "completed",
    dueDate: "24-02-2025",
  },
  {
    id: 2,
    title: "item2",
    description: "description2",
    status: "completed",
    dueDate: "25-02-2025",
  },
];

const TasksContext = createContext(initialState.sort(sortByDate));

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload].sort(sortByDate);
    case "UPDATE_TASK":
      return state
        .map((item) => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        })
        .sort(sortByDate);
    case "DELETE_TASK":
      return state
        .filter((item) => item.id !== action.payload.id)
        .sort(sortByDate);
    case "FILTER_TASKS_":
      return state
        .map((item) => {
          if (item.status === action.payload) return item;
          else return null;
        })
        .filter((item) => item !== null)
        .sort(sortByDate);
    default:
      return state;
  }
};

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
export { TasksContext };
