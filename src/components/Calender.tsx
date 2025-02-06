// @ts-nocheck
import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";

const Calendar = ({ onChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Added state for selected date

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  const startOfCalendar = startOfWeek(startOfCurrentMonth);
  const endOfCalendar = endOfWeek(endOfCurrentMonth);

  const days = eachDayOfInterval({
    start: startOfCalendar,
    end: endOfCalendar,
  });

  const handlePrevMonth = () =>
    setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() - 1)));
  const handleNextMonth = () =>
    setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() + 1)));

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="max-w-lg mx-auto my-4 p-2 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="text-2xl">
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth} className="text-2xl">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}

        {days.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-full cursor-pointer ${
              isToday(day)
                ? "bg-blue-500 text-white"
                : isSameMonth(day, currentDate)
                ? "text-black"
                : "text-gray-300"
            } ${
              selectedDate &&
              isSameMonth(day, currentDate) &&
              day.getDate() === selectedDate.getDate()
                ? "bg-green-500 text-white"
                : ""
            }`}
            onClick={() => {
              handleDateSelect((prev) => day);
              onChange((prev) => ({
                ...prev,
                dueDate: format(day, "dd-MM-yyyy"),
              }));
            }}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
