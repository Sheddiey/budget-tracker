import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExpenseItem = ({ title, amount, onDelete, onEdit }) => {
  return (
    <div>
      <div className="line-2"></div>
      <div className="flex items-center justify-between">
        <div className="flex gap-[10px]">
          <div className="icon-container-expenses">
            <FontAwesomeIcon className="icon" icon={faCreditCard} />{" "}
          </div>
          <div className="flex flex-col">
            <h3 className="text-[18px]">{title}</h3>
            <p className="mt-[-10px] text-white">
              <span className="text-[12px] text-gray-400">Date:</span> december,
              12-23
            </p>
          </div>
        </div>
        <h4 className="text-[24px]">{amount}</h4>
      </div>
    </div>
  );
};

export default ExpenseItem;
