import React from "react";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex">
          <div>
            <div className="flex space-between">
              <h4>Description</h4>
              <div className="flex">
                <h4>Filter Expenses</h4>
                <option value="All">All</option>
              </div>
            </div>
            <div>
              <h5>
                Looks Like You Havent Added Any <span>Expenses Yet.</span>
              </h5>
            </div>
            <div>
              <h5>No Worries, Just Hit The 'Add' Button To Get Started</h5>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
