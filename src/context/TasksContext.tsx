// @ts-nocheck
import { createContext, useReducer } from "react";

const initialState = [
  {
    id: 1,
    title: "item1",
    description: "description1",
    status: "pending",
    dueDate: "22-02-2025",
  },
  {
    id: 2,
    title: "item2",
    description: "description2",
    status: "completed",
    dueDate: "25-02-2025",
  },
];
const TasksContext = createContext(initialState);

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
    case "DELETE_TASK":
      return state.filter((item) => item.id !== action.payload.id);
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
