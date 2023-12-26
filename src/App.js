import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
