import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCartShopping,
  faCreditCard,
  faGamepad,
  faPiggyBank,
  faSuitcaseMedical,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import netflix from "../../Assets/netflix-1-logo-svgrepo-com.svg";
import spotify from "../../Assets/spotify.svg";
import amazon from "../../Assets/amazon.svg";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook-1.svg";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseForm from "../Expenses/ExpenseForm";

const MainPage = () => {
  const [userData, setUserData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const openForm = () => {
    setIsFormOpen(true);
    setEditData(null);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditData(null);
  };

  const handleSave = async (data) => {
    const userId = userData.length > 0 ? userData[0].uid : null;
    const userDocRef = doc(db, "userData", userId);
    const expensesCollectionRef = collection(userDocRef, "expenses");

    if (editData) {
      const expenseDocRef = doc(expensesCollectionRef, editData.id);
      await updateDoc(expenseDocRef, data);
    } else {
      await addDoc(expensesCollectionRef, data);
    }

    fetchData();
    closeForm(); 
  };

  const handleDelete = async (id) => {
    const userId = userData.length > 0 ? userData[0].uid : null;
    const userDocRef = doc(db, "userData", userId);
    const expensesCollectionRef = collection(userDocRef, "expenses");
    const expenseDocRef = doc(expensesCollectionRef, id);

    await deleteDoc(expenseDocRef);

    fetchData();
  };

  const handleEdit = (data) => {
    setEditData(data);
    setIsFormOpen(true);
  };

  const fetchData = async () => {
    if (userData.length === 0 || !userData[0].uid) {
      console.error("User ID not available");
      return;
    }

    const userId = userData[0].uid;
    const userDocRef = doc(db, "userData", userId);
    const expensesCollectionRef = collection(userDocRef, "expenses");

    const querySnapshot = await getDocs(expensesCollectionRef);
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar userData={userData} openForm={openForm} />
      <main>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 w-[90%] md:w-[95%] mx-[auto] gap-[40px]">
          <section className="order-last w-[100%] md:col-span-2 lg:col-span-1 p-[10px] bg-[#393636] rounded-[10px] text-white mx-[auto] lg:order-first shadow-lg">
            <div className="line-1 md:hidden"></div>
            <div className="flex justify-between items-center mb-[20px]">
              <h4 className="text-[#ffe600]">Description </h4>
              <div className="flex border-[#ffe600] border-2 text-[14px] p-[3px]">
                <h4>Filter Expenses |</h4>
                <select
                  name="option"
                  id="options"
                  className="text-[#ffe600] outline-none bg-transparent"
                >
                  <option value="All">All</option>
                </select>
              </div>
            </div>
            <div className="line md:hidden"></div>
            <div className="text-center  flex flex-col gap-[20px]">
              <div className="text-3xl font-bold mt-[70px]">
                <h5>
                  Looks Like You Havent Added Any{" "}
                  <span className="text-[#51d289]">Expenses Yet.</span>
                </h5>
              </div>
              <div>
                <h5>
                  No Worries, Just Hit The{" "}
                  <span className="text-[#51d289]">'Add'</span> Button To Get
                  Started
                </h5>
              </div>
              <div className="text-3xl text-[#51d289]">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
            {isFormOpen && (
              <ExpenseForm onSave={handleSave} onClose={closeForm} editData={editData} />
            )}
            <ExpenseItem />
            {userData.map((data) => (
              <ExpenseItem
                key={data.id}
                icon={faCartShopping}
                title={data.title} // Assuming you have a title property in your data
                category={data.category} // Assuming you have a category property in your data
                date={data.date} // Assuming you have a date property in your data
                amount={data.amount} // Assuming you have an amount property in your data
                onDelete={() => handleDelete(data.id)}
                onEdit={() => handleEdit(data)}
              />
            ))}
          </section>
          <section className="section w-[100%] shadow-mb">
            <div>
              <div className="text-center text-[24px]">
                <h2>Calculation</h2>
                <div className="top-line line"></div>
              </div>
              {userData.length > 0 && (
                <div className="income grid text-center uppercase font-bold shadow-lg bg-white">
                  <p className="text-[12px]">Income</p>
                  <h3 className="text-[26px]">
                    ${userData[0].income.toLocaleString()}
                  </h3>
                </div>
              )}
              <div>
                <div className="outer-circle">
                  <div className="inner-circle">
                    <p className="text-[24px] text-black">20%</p>
                    <p className="bottom-[50px] absolute">spent</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="icome-available shadow py-[3px] text-bold uppercase">
                  <p className="text-white text-[10px]">Available</p>
                  <p className="text-[16px] text-[#51D289]">$2,000.00</p>
                </div>
                <div className="icome-available shadow uppercase">
                  <p className="text-white text-[10px]">SPent</p>
                  <p className="text-[16px] text-[#ffe600]">$800.00</p>
                </div>
              </div>
              <div className="bottom-line line"></div>
              <button className="reset-btn bg-[#ffe600] w-[100%] py-[5px] rounded-[5px]">
                Reset Expenses
              </button>
            </div>
          </section>
          <section className="section w-[100%]">
            <div>
              <div>
                <h2 className="text-center text-[24px]">Optionals</h2>
                <div className="top-line line"></div>
              </div>
              <div className="card">
                <h3 className="text-center uppercase mb-[20px] font-bold text-[14px]">
                  Choose any fix Expenses
                </h3>
                <div className="grid gap-[20px]">
                  <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                      <div className="icon-container">
                        <img src={netflix} alt="" />
                      </div>
                      <p>NETFLIX</p>
                    </div>
                    <button className="select-btn">select</button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                      <div className="icon-container">
                        <img src={spotify} alt="" />
                      </div>
                      <p>SPOTIFY</p>
                    </div>
                    <button className="select-btn">select</button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                      <div className="icon-container">
                        <img src={amazon} alt="" />
                      </div>
                      <p>AMAZON</p>
                    </div>
                    <button className="select-btn">select</button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                      <div className="icon-container">
                        <img src={google} alt="" />
                      </div>
                      <p>GOOGLE</p>
                    </div>
                    <button className="select-btn">select</button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-[15px]">
                      <div className="icon-container">
                        <img src={facebook} alt="" />
                      </div>
                      <p>FACEBOOK</p>
                    </div>
                    <button className="select-btn">select</button>
                  </div>
                </div>
              </div>
              <div className="bottom-line line"></div>
              <h2 className="text-center text-[24px]">Goals</h2>
              {userData.length > 0 && (
                <div className="goals-section w-[104px]">
                  <p className="font-bold text-black">{userData[0].goals}</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
