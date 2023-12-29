import React, { useState } from "react";
import banner from "../../Assets/barner.png";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const Home = () => {
  const navigate = useNavigate();

  const [income, setIncome] = useState("");
  const [goals, setGoals] = useState("");
  const [name, setName] = useState("");

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGoalsChange = (e) => {
    setGoals(e.target.value);
  };

  const onStart = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not Authenticated");
      return;
    }

    const userId = user.uid;

    try {
      const docRef = await addDoc(collection(db, "userData"), {
        userId,
        income,
        name,
        goals,
      });

      console.log("Document Written with ID: ", docRef.id);

      navigate("/dashboard");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
              value={income}
              onChange={handleIncomeChange}
              required
            />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Insert Your Name"
              required
            />
            <input
              type="text"
              value={goals}
              onChange={handleGoalsChange}
              placeholder="Insert Your Goals"
              required
            />
          </div>
        </div>
        <div className="btn mt-[60px]">
          <input
            type="submit"
            value="Start Your Calculation"
            onClick={onStart}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
