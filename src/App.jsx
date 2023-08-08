import React, { useState , useRef} from "react";
import {  Routes, Route, useNavigate, Link } from "react-router-dom";

import AddTodo from "./component/AddTodo";
import DiplayTodo from "./component/DiplayTodo";
import AboutApp from "./component/AboutApp";
import NotFound from "./component/NotFound";
import LandingPage from "./component/LandingPage";
import Welcome from "./component/Welcome";
import BlogPage from "./component/BlogPage";
import Signup from "./component/Signup";
import ClassBased from "./component/ClassBased";
import ShowUsers from "./component/ShowUsers";

const App = () => {
  const [taskArray, settaskArray] = useState([]);
  const[input, setInput]= useState('')
  const navigate = useNavigate();



  let inputRef = useRef()
  let headerRef = useRef()

  const runInput =()=>{
     navigate('/welcome/'+input)
  }
  const handleSubmit =()=>{
    console.log(inputRef.current.value)

    headerRef.current.style.color= "red"
  }

  return (
    <div className="bg-dark text-light min-vh-100">
      <nav className="nav bg-light mb-4 shadow-sm">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/">Home</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/about">About Us </Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/blog">Our Blog </Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/welcome/adebisi">Visit Adebisi</Link> </li>
       
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/signup">Sign Up</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/add-todo">Add Todo</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/add-todo">Add Todo</Link> </li>
          <li className="nav-item"><Link className="nav-link text-dark fw-bold" to="/user">User</Link> </li>
        </ul>
      </nav>

      {/* <ClassBased/> */}


      {/* <div className="container">
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={runInput}>The Button</button>
      </div> */}

      {/* <h1 ref={headerRef}>Using Use Ref</h1>

      <input ref={inputRef} type="text" />
      <button className="btn btn-primary" onClick={handleSubmit}>Sumbit </button> */}


      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/blog" element={<BlogPage taskArray={taskArray} />} />

        <Route path="/welcome/:token" exact element={<Welcome />} />
        <Route path="/add-todo/*" exact element={<AddTodo />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/user" exact element={<ShowUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
};

export default App;
