// @ts-nocheck
import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";
import { Task } from "../types";
import Calendar from "./Calender";

interface AddTaskFormProps {
  task: Task;
  setShowAddTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTask: React.Dispatch<React.SetStateAction<Task>>;
  handleAddTask: () => void;
}

const AddTaskForm = ({
  task,
  setShowAddTaskModal,
  setTask,
  handleAddTask,
}: AddTaskFormProps) => {
  console.log(task);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Add Task</h2>
          <button
            onClick={() => setShowAddTaskModal((prev) => !prev)}
            className="cursor-pointer text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div>
          <form>
            <Input
              value={task.title}
              placeholder="Enter title"
              onChange={(e) =>
                setTask((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <br />

            <Input
              value={task.description}
              placeholder="Enter description"
              onChange={(e) =>
                setTask((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <br />
            {/* <Input
              value={task.dueDate}
              placeholder="Enter due date"
              onChange={(e) =>
                setTask((prev) => ({ ...prev, dueDate: e.target.value }))
              }
            /> */}
            <div className="flex flex-col items-center">
              <p>Due Date</p>
              <Calendar onChange={setTask} />
            </div>
          </form>
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => setShowAddTaskModal((prev) => !prev)}
            variant="default"
          >
            close
          </Button>
          <Button onClick={handleAddTask} variant="submit">
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddTaskForm;
