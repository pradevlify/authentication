// frontend/src/components/SecretPage.js
import React, { useEffect, useState } from "react";
import axios from "../axios";

function SecretPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSecret = async () => {
      try {
        const response = await axios.get("/secret");
        setMessage(response.data.message);
      } catch (err) {
        setError("Access denied or token expired");
      }
    };

    fetchSecret();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default SecretPage;
