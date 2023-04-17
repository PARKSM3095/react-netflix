import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Logo from "./imgs/logo.png";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login Logo={Logo} />} />
      <Route path="/main" element={<Main Logo={Logo} />} />
      <Route path="/about" element={<div>어바웃페이지</div>} />
    </Routes>
  );
}

export default App;
