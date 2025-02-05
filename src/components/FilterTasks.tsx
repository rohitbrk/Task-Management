interface FilterTasksProps {
  filters: string[];
  filterBy: string;
  handleFilterTasks: (filter: string) => void;
}
const FilterTasks = ({
  filters,
  filterBy,
  handleFilterTasks,
}: FilterTasksProps) => {
  return (
    <div>
      <label htmlFor="dropdown">Filter</label>
      <select
        className="border border-gray-300 cursor-pointer h-10 px-4 py-2 bg-gray-100 text-black items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        id="dropdown"
        value={filterBy}
        onChange={(e) => {
          handleFilterTasks(e.target.value);
        }}
      >
        {filters.map((filter) => (
          <option className="cursor-pointer" key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTasks;
