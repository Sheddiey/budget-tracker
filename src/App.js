import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/signup" element={Signup} />
            <Route path="/login" element={Login} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
