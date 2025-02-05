import { BrowserRouter, Route, Routes } from "react-router";
import TasksProvider from "./context/TasksContext";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </>
  );
}

export default App;
