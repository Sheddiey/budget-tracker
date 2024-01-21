import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

const App = () => {
  const [userData, setUserData] = useState([]);
  const userDataCollectionRef = collection(db, "userData");

  const getUserData = async () => {
    try {
      const data = await getDocs(userDataCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <Home
                  userDataCollectionRef={userDataCollectionRef}
                  getUserData={getUserData}
                  setUserData={setUserData}
                />
              }
            />
            <Route
              path="/dashboard"
              element={<MainPage userData={userData} />}
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
