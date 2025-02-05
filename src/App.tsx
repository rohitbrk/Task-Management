import { Route, Routes } from "react-router";
import TasksProvider from "./context/TasksContext";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <TasksProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/pending" element={<Main />} />
            <Route path="/inprogress" element={<Main />} />
            <Route path="/completed" element={<Main />} />
          </Route>
        </Routes>
      </TasksProvider>
    </>
  );
}

export default App;
