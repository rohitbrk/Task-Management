import { BrowserRouter, Route, Routes } from "react-router";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import TasksProvider from "./context/TasksContext";
import Layout from "./pages/Layout";
function App() {
  return (
    <>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<AllTasks />} />
              <Route path="/completed-tasks" element={<CompletedTasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </>
  );
}

export default App;
