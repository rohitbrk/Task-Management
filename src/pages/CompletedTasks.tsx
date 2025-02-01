import { NavLink } from "react-router";

const CompletedTasks = () => {
  return (
    <div>
      CompletedTasks
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none">
        <NavLink to="/" end>
          Go to Home
        </NavLink>
      </button>
    </div>
  );
};

export default CompletedTasks;
