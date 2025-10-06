import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {

  // document.addEventListener("DOMContentLoaded", () => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show"); // Optional: resets effect if scrolled away
  //       }
  //     });
  //   }, { threshold: 0.3 });
  
  //   document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
  // });
    

  window.onload = function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });
  
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>}/>

      </Routes>
    </Router>
  );
}

export default App;
