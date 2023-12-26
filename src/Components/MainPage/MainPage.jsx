import React from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import netflix from "../../Assets/netflix-1-logo-svgrepo-com.svg";
import spotify from "../../Assets/spotify.svg";
import amazon from "../../Assets/amazon.svg";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook-1.svg";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="grid">
          <section>
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
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </section>
          <section className="section my-[30px]">
            <div>
              <div className="text-center text-[24px]">
                <h2>Calculation</h2>
                <div className="top-line line"></div>
              </div>
              <div className="income grid text-center uppercase font-bold shadow-lg bg-white">
                <p className="text-[12px]">Income</p>
                <h3 className="text-[26px]">$2,700.00</h3>
              </div>
              <div>
                <circle className="outer-circle">
                  <div className="inner-circle">
                    <p className="text-[24px] text-black">20%</p>
                    <p className="bottom-[50px] absolute">spent</p>
                  </div>
                </circle>
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
          <section className="section">
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
              <div className="goals-section">
                <p className="font-bold text-black">
                  "Save 10% of this amount entered this month from my salary"
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
