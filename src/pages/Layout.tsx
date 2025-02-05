import { Outlet } from "react-router";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Footer from "../components/Footer";
import TogglePage from "../components/TogglePage";

const Layout = () => {
  const { state } = useContext(TasksContext);
  return (
    <div>
      <h2>Task.io</h2>
      <TasksSummary summary={getTasksSummary(state)} />
      <TogglePage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
