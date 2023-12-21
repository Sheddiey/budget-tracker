import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to your budget Tracker</h1>
      <p>
        Take control of your finances with our easy-to-use budget tracking app.
      </p>
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Welcome;
