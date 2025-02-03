// @ts-nocheck
import { NavLink, Outlet, useLocation } from "react-router";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const Layout = () => {
  const { state } = useContext(TasksContext);
  const { pathname } = useLocation();

  return (
    <div>
      <TasksSummary summary={getTasksSummary(state)} />
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none">
          {pathname === "/" ? (
            <NavLink to="/completed-tasks" end>
              View Completed Tasks
            </NavLink>
          ) : (
            <NavLink to="/" end>
              Go to Home
            </NavLink>
          )}
        </button>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 All righte reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
