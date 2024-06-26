import { Todo } from "../types/todo";

export const loadTodos = (): Todo[] => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Could not load todos from localStorage", error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Could not save todos to localStorage", error);
  }
};
