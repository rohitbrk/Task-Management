// @ts-nocheck

const FilteredTasks = ({
  filteredTasks,
  setFilteredTasks,
  handleFilterTasks,
}) => {
  return (
    <div>
      <label htmlFor="dropdown">Filter by status: </label>
      <select
        id="dropdown"
        value={filteredTasks}
        onChange={(e) => {
          handleFilterTasks(e.target.value);
          setFilteredTasks((prev) => e.target.value);
        }}
      >
        <option value={"all"}>all</option>
        <option value={"pending"}>pending</option>
        <option value={"inprogress"}>inprogress</option>
        <option value={"completed"}>completed</option>
      </select>
    </div>
  );
};

export default FilteredTasks;
