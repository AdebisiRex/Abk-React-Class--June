import React, { useState } from "react";
import {  Routes, Route, useNavigate, Link } from "react-router-dom";

import AddTodo from "./component/AddTodo";
import DiplayTodo from "./component/DiplayTodo";
import AboutApp from "./component/AboutApp";
import NotFound from "./component/NotFound";
import LandingPage from "./component/LandingPage";
import Welcome from "./component/Welcome";
import BlogPage from "./component/BlogPage";

const App = () => {
  const [taskArray, settaskArray] = useState([]);

  const[input, setInput]= useState('')
  const navigate = useNavigate();

  const runInput =()=>{
     navigate('/welcome/'+input)
  }

  return (
    <div className="bg-dark text-light min-vh-100">
      <nav className="nav bg-light mb-4 shadow-sm">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/">Home</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/about">About Us </Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/blog">Our Blog </Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/welcome/adebisi">Visit Adebisi</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/welcome/ibrahim">Visit Ibrahim</Link> </li>
        </ul>
      </nav>


      {/* <div className="container">
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={runInput}>The Button</button>
      </div> */}
    
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/welcome/:token" exact element={<Welcome />} />
        <Route path="/add-todo/*" exact element={<AddTodo />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
};

export default App;
