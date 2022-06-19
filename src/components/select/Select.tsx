import React, { ChangeEvent } from "react";
import "./select.styles.css"
type SelectProps = {
  filteredTitle: string[];
  handleSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedTitle: string;
};
const Select = ({
  filteredTitle,
  handleSelect,
  selectedTitle,
}: SelectProps) => {
  return (
    <div>
      <select
        className="select"
        onChange={handleSelect}
        name="title"
        id="title"
        value={selectedTitle}
      >
        <option value="">Filter By Title...</option>
        {filteredTitle &&
          filteredTitle.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
      </select>
    </div>
  );
};
export default Select;
