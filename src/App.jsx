import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Home from "./component/Home/Home"
import Register from "./component/Register/Register"
import Login from "./component/Login/Login"
import Header from './component/Header/Haeder';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
