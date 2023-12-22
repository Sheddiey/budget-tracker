import React from "react";
import banner from "../Assets/barner.png";
import "./home.css";

const Home = () => {
  return (
    <div className="flex welcome">
      <div className="hidden md:block banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="px-[40px] py-[20px]">
        <div className="grid income-input-section">
          <h2>
            Monthly <span>Budget</span>
          </h2>
          <div className="grid mt-[20px]">
            <input type="text" placeholder="Insert Your Income" required />
            <input type="text" placeholder="Insert Your Name" required />
            <input type="text" placeholder="Insert Your Goals" required />
          </div>
        </div>
        <div className="btn mt-[60px]">
          <input type="submit" value="Start Your Calculation" />
        </div>
      </div>
    </div>
  );
};

export default Home;
