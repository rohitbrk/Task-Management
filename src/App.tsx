import { BrowserRouter, Route, Routes } from "react-router";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import TasksProvider from "./context/TasksContext";
import Layout from "./pages/Layout";
import PendingTasks from "./pages/PendingTasks";
import InprogressTasks from "./pages/InprogressTasks";
function App() {
  return (
    <>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<AllTasks />} />
              <Route path="/pending" element={<PendingTasks />} />
              <Route path="/inprogress" element={<InprogressTasks />} />
              <Route path="/completed" element={<CompletedTasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </>
  );
}

export default App;
