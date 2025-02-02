// @ts-nocheck

const FilterTasks = ({ filterBy, setFilterBy, handleFilterTasks }) => {
  return (
    <div>
      <label htmlFor="dropdown">Filter by status: </label>
      <select
        id="dropdown"
        value={filterBy}
        onChange={(e) => {
          handleFilterTasks(e.target.value);
          setFilterBy((prev) => e.target.value);
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

export default FilterTasks;
