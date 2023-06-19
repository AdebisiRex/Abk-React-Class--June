import React, { useState } from "react";
import {  Routes, Route, useNavigate, Link } from "react-router-dom";

import AddTodo from "./component/AddTodo";
import DiplayTodo from "./component/DiplayTodo";
import AboutApp from "./component/AboutApp";
import NotFound from "./component/NotFound";

const App = () => {
  const [taskArray, settaskArray] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link> </li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us </Link> </li>
          <li className="nav-item"><Link className="nav-link" to="/add-todo">Add Todo</Link> </li>
          <li className="nav-item"><Link className="nav-link" to="/dadadadada">Logout</Link> </li>
        </ul>
      </nav>
    
      {/* <div>
        <AddTodo settask={settaskArray} taskArray={taskArray} />
        <DiplayTodo taskArray={taskArray} />
      </div> */}
      <h1>Our Todo App</h1>
      <Routes>
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          onClick={() => navigate("/about")}
          type="button"
          className="btn btn-danger"
        >
          About Us
        </button>
        <button
          onClick={() => navigate("/add-todo")}
          type="button"
          className="btn btn-warning"
        >
          Add Todo
        </button>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn btn-success"
        >
          Home
        </button>
      </div>
    </>
  );
};

export default App;
