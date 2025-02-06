import { createContext, ReactNode, useReducer } from "react";
import { sortByDate } from "../utils/sortByDate";
import { Task } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "UPDATE_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "FILTER_TASKS_"; payload: "pending" | "completed" };

interface TasksContextType {
  state: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextType>({
  state: [],
  dispatch: () => {},
});

const tasksReducer = (state: Task[], action: TaskAction) => {
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

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [storedValue] = useLocalStorage("storedTasks", []);
  const [state, dispatch] = useReducer(tasksReducer, storedValue);
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
export { TasksContext };
