import React, { useState, useEffect } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import FilterButtons from "../FilterButtons/FilterButtons";
import { loadTodos, saveTodos } from "../../utils/localStorage";
import { Todo } from "../../types/todo";
import "./TodoApp.css";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [filter, setFilter] = useState<string>("all");
  const [storageError, setStorageError] = useState<string | null>(null);

  useEffect(() => {
    try {
      saveTodos(todos);
      setStorageError(null);
    } catch (error) {
      setStorageError("Could not save todos. Local storage is not available.");
    }
  }, [todos]);

  const addTodo = (description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Todo List</h1>
      {storageError && <div className="error-message">{storageError}</div>}
      <TodoInput addTodo={addTodo} />
      <FilterButtons setFilter={setFilter} currentFilter={filter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TodoApp;
