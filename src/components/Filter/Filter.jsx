export const Filter = ({ filter, handleChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Search"
      value={filter}
      onChange={handleChange}
    />
  </div>
);
