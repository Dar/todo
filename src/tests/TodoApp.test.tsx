import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "../components/TodoApp/TodoApp";

describe("TodoApp", () => {
  test("renders TodoApp and adds a task", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("Enter new task");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).not.toBeChecked();
  });

  test("toggles task completion status", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("Enter new task");
    fireEvent.change(input, { target: { value: "New Task" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
