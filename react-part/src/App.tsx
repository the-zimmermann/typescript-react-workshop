import React from "react";
import "./App.css";
import TodoList from "./useReducer/TodoList";
import FilterableProductTable from "./ui-task/FilterableProductTable";

function App() {
  return (
    <div>
      <TodoList />
      <FilterableProductTable />
    </div>
  );
}

export default App;
