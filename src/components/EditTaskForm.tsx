// @ts-nocheck
import React from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import { Task } from "../types";
import Calendar from "./Calender";

interface EditTaskFormProps {
  editTask: Task;
  setEditTask: (task: any) => Task;
  handleEditTask: () => void;
  setShowEditTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskForm = ({
  editTask,
  setEditTask,
  handleEditTask,
  setShowEditTaskModal,
}: EditTaskFormProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Edit Task</h2>
          <button
            onClick={() => setShowEditTaskModal((prev) => !prev)}
            className="cursor-pointer text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div>
          <form>
            <Input
              value={editTask.title}
              placeholder="title"
              onChange={(e) =>
                setEditTask((prev: any) => ({ ...prev, title: e.target.value }))
              }
            />
            <br />
            <Input
              value={editTask.description}
              onChange={(e) =>
                setEditTask((prev: any) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <br />
            <div className="flex flex-col items-center">
              <p>Due Date</p>
              <Calendar onChange={setEditTask} />
            </div>
            <div className="flex justify-end">
              <label>
                status
                <select
                  className="border border-gray-300 cursor-pointer h-10 px-4 py-2 bg-gray-100 text-black items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  value={editTask.status}
                  onChange={(e) =>
                    setEditTask((prev: any) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                >
                  <option value={"pending"}>pending</option>
                  <option value={"inprogress"}>inprogress</option>
                  <option value={"completed"}>completed</option>
                </select>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => setShowEditTaskModal((prev) => !prev)}
            variant="default"
          >
            close
          </Button>
          <Button
            onClick={() => {
              if (task.title === "" || task.description === "")
                return alert("input cannot be empty");
              handleEditTask();
            }}
            variant="submit"
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;
