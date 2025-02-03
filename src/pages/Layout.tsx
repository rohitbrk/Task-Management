// @ts-nocheck
import { NavLink, Outlet, useLocation } from "react-router";
import TasksSummary from "../components/TasksSummary";
import { getTasksSummary } from "../utils/getTasksSummary";
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import Footer from "../components/Footer";
import TogglePage from "../components/TogglePage";

const Layout = () => {
  const { state } = useContext(TasksContext);
  return (
    <div>
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
