// @ts-nocheck

const FilteredTasks = ({ filteredTasks, handleFilterTasks }) => {
  return (
    <div>
      <label htmlFor="dropdown">Choose an option: </label>
      <select
        id="dropdown"
        value={filteredTasks}
        onChange={(e) => {
          handleFilterTasks(e.target.value);
        }}
      >
        <option value="">-- Select --</option>
        <option value={"pending"}>pending</option>
        <option value={"inprogress"}>inprogress</option>
        <option value={"completed"}>completed</option>
      </select>
    </div>
  );
};

export default FilteredTasks;
