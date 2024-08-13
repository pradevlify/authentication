// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import SecretPage from "./components/SecretPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/secret" element={<SecretPage />} />
        {/* <Route path="/private" element={<PrivateRoute />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
