// @ts-nocheck
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import Button from "./common/Button";

const TogglePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useLocation();

  const handleChangePage = () => {
    if (pathname === "/") {
      setIsChecked(!isChecked);
      return;
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex basis-1/4 space-x-3">
      <Button onClick={handleChangePage} variant="primary">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleChangePage}
        />
        {isChecked ? (
          <NavLink
            to="/"
            end
            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600 peer-checked:bg-blue-600"
          >
            Home
          </NavLink>
        ) : (
          <NavLink
            to="/completed-tasks"
            end
            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"
          >
            Completed
          </NavLink>
        )}
      </Button>
    </div>
  );
};

export default TogglePage;
