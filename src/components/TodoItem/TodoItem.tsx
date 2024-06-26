import React, { FC } from "react";
import { Todo } from "../../types/todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <div className="todo-item">
      <div className={`todo-tile ${todo.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span>{todo.description}</span>
      </div>
    </div>
  );
};

export default TodoItem;
