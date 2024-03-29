import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({userData, openForm}) => {
  return (
    <div className="my-[25px]">
      <nav className="flex flex-col pb-[10px] md:flex-row justify-between w-[90%] md:w-[95%] mx-[auto] space-between text-[#fff] top-[0px]">
        <div className="flex">
          <div className="grid">
            <p className="text-[10px] text-[#ffe600] text-bold">Expenses</p>
            <h2 className="text-4xl text-bold">
              Monthly <span className="text-[#51d289]">Budget</span>
            </h2>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <button className="hidden md:block new-btn" onClick={openForm}>New Expense</button>
          <div className="flex text-2xl gap-[5px] items-center">
            <FontAwesomeIcon className="icon-user" icon={faCircleUser} />
            {userData.length > 0 && (
              <h3 className="capitalize">{userData[0].name}</h3>
            )}
          </div>
        </div>
      </nav>
      <hr className=" w-[90%] mx-[auto] md:w-[95%]" />
    </div>
  );
};

export default Navbar;
