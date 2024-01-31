import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Home from "./Components/Home/Home";
import MainPage from "./Components/MainPage/MainPage.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebase.js";

const App = () => {
  const [userData, setUserData] = useState([]);
  const userDataCollectionRef = collection(db, "userData");
  const authUid = auth?.currentUser?.uid;
  const getUserData = async () => {
    try {
      const dataQuery = query(
        userDataCollectionRef,
        where("userId", "==", authUid)
      );
      const querySnapshot = await getDocs(dataQuery);
      const AuthUserData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserData(AuthUserData);
      console.log(AuthUserData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authUid) {
      getUserData();
    }
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
