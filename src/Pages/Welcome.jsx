import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to your budget Tracker</h1>
      <p>
        Take control of your finances with our easy-to-use budget tracking app.
      </p>
      <div className="auth-links">
        <Link className="auth-link" to="/signup">Sign up</Link>
        <Link className="auth-link" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Welcome;
