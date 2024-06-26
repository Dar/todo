import { FC } from "react";
import "./FilterButtons.css";

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
  currentFilter: string;
}

const FilterButtons: FC<FilterButtonsProps> = ({
  setFilter,
  currentFilter,
}) => {
  return (
    <div className="filter-buttons">
      <button
        disabled={currentFilter === "all"}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        disabled={currentFilter === "active"}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        disabled={currentFilter === "completed"}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
