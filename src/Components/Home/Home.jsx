import React, { useState } from "react";
import banner from "../../Assets/barner.png";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { addDoc } from "firebase/firestore";

const Home = ({ getUserData, userDataCollectionRef}) => {
  const navigate = useNavigate();

  const [income, setIncome] = useState("");
  const [goals, setGoals] = useState("");
  const [name, setName] = useState("");

  

  const onStartCalculation = async () => {
    try {
      await addDoc(userDataCollectionRef, {
        name: name,
        income: Number(income),
        goals: goals,
        userId: auth?.currentUser?.uid,
      });
      getUserData();
    } catch (err) {
      console.error(err);
    }
    navigate("/dashboard");
  };

 

  return (
    <div className="flex welcome w-[90%] mx-[auto] ">
      <div className="hidden md:block banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="px-[40px] py-[20px]">
        <div className="grid income-input-section">
          <h2>
            Monthly <span>Budget</span>
          </h2>
          <div className="grid mt-[20px]">
            <input
              type="number"
              min="1"
              placeholder="Insert Your Income"
              onChange={(e) => setIncome(e.target.value)}
              required
            />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Insert Your Name"
              required
            />
            <input
              type="text"
              onChange={(e) => setGoals(e.target.value)}
              placeholder="Insert Your Goals"
              required
            />
          </div>
        </div>
        <div className="btn mt-[60px]">
          <input
            type="submit"
            value="Start Your Calculation"
            onClick={onStartCalculation}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
