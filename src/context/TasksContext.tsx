// @ts-nocheck
import { createContext, useReducer } from "react";

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
const TasksContext = createContext(
  initialState.sort((a, b) => {
    const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
    const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
    console.log(dateA, dateB);
    return dateA - dateB;
  })
);

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload].sort((a, b) => {
        const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
        const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
        console.log(dateA, dateB);
        return dateA - dateB;
      });
    case "UPDATE_TASK":
      return state
        .map((item) => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        })
        .sort((a, b) => {
          const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
          const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
          console.log(dateA, dateB);
          return dateA - dateB;
        });
    case "DELETE_TASK":
      return state
        .filter((item) => item.id !== action.payload.id)
        .sort((a, b) => {
          const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
          const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
          console.log(dateA, dateB);
          return dateA - dateB;
        });
    case "FILTER_TASKS":
      return state
        .map((item) => {
          const arr = action.payload[0].filter((item) => item !== null);
          for (let filter of arr) {
            if (item.status === filter) return item;
            else return null;
          }
        })
        .filter((item) => item !== null)
        .sort((a, b) => {
          const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
          const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
          console.log(dateA, dateB);
          return dateA - dateB;
        });
    case "SORT_TASKS_BY_DUE_DATE":
      return state.sort((a, b) => {
        const dateA = new Date(a.dueDate.split("-").reverse().join("-"));
        const dateB = new Date(b.dueDate.split("-").reverse().join("-"));
        console.log(dateA, dateB);
        return dateA - dateB;
      });
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
