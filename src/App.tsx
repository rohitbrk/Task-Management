import { BrowserRouter, Route, Routes } from "react-router";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/completed-tasks" element={<CompletedTasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
