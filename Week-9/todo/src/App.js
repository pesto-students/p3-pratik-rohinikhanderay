import React from "react";
import "./App.css";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <div className="App">
      <span className="title">Todo List</span> <br />
      <TodoApp />
    </div>
  );
}

export default App;