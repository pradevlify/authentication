// frontend/src/components/Logout.js
import React from "react";
import axios from "../axios";

function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post("/logout");
      alert("Logged out successfully");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
