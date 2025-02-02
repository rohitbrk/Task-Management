// @ts-nocheck

const FilterTasks = ({ filters, filterBy, handleFilterTasks }) => {
  return (
    <div>
      <label htmlFor="dropdown">Filter by status: </label>
      <select
        id="dropdown"
        value={filterBy}
        onChange={(e) => {
          handleFilterTasks(e.target.value);
        }}
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTasks;
