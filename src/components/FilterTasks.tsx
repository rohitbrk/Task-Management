// @ts-nocheck

const FilterTasks = ({ filters, filterBy, handleFilterTasks }) => {
  return (
    <div>
      <label htmlFor="dropdown">Filter</label>
      <select
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
