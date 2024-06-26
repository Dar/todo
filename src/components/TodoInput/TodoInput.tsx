import React, { useState, FC } from "react";
import "./TodoInput.css";

interface TodoInputProps {
  addTodo: (description: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (description.trim()) {
      addTodo(description);
      setDescription("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          if (e.target.value.trim()) setError(false);
        }}
        placeholder="Enter new task"
        className={error ? "error" : ""}
      />
      <button onClick={handleAdd}>Add</button>
      {error && <div className="error-message">Please enter a task</div>}
    </div>
  );
};

export default TodoInput;
