import { Outlet } from "react-router";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Layout = () => {
  const { state } = useContext(TasksContext);

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex justify-around items-center">
        <TasksSummary summary={getTasksSummary(state)} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
