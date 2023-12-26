import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="grid w-[309px] mx-[auto] space-between text-[#fff] top-[0px]">
      <div className="">
        <div>
          <img src="" alt="" />
        </div>
        <div className="grid">
          <p className="text-[10px] text-[#ffe600] text-bold">Expenses</p>
          <h2 className="text-5xl text-bold">
            Monthly <span className="text-[#51d289]">Budget</span>
          </h2>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <button className="hidden">New Expense</button>
        <div className="flex gap-[5px]">
          <img src="" alt="" />
          <h5 className="text-2xl mb-[15px]">Welcome Alexander!</h5>
        </div>
      </div>
      <hr className=" " />
    </nav>
  );
};

export default Navbar;
