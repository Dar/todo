import React, { FC } from "react";
import { Todo } from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
