import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth } from "../../firebase";

const ExpenseForm = ({ onSave, onClose, expensesCollectionRef, getExpenses }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  const handleSaveClick = async () => {
    if (title.trim() === "" || cost.trim() === "") {
      alert("Please enter both title and cost");
      return;
    }

    try {
      await addDoc(expensesCollectionRef, {
        title: title,
        cost: cost,
        userId: auth?.currentUser?.uid,
      });
      getExpenses();
    } catch (err) {
      console.error(err);
    }

    // onSave({
    //   title: title.trim(),
    //   cost: cost,
    // });

    setTitle("");
    setCost("");

    onClose();
  };
  return (
    <div className="grid gap-[10px] ">
      <input
        className="bg-transparent p-[5px]  border border-dotted outline-none"
        type="text"
        placeholder="Input expense title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="bg-transparent p-[5px]  border border-dotted outline-none"
        type="number"
        min="1"
        placeholder="Input expense cost"
        onChange={(e) => setCost(e.target.value)}
        required
      />
      <input
        className=" text-black bg-[#ffe600] w-[100%] py-[5px] rounded-[5px] cursor-pointer"
        type="submit"
        value="Save Expense"
        onClick={handleSaveClick}
      />
    </div>
  );
};

export default ExpenseForm;
