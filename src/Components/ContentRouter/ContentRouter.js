import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import FirstPage from "../FirstPage.js";
import SecondPage from "../SecondPage.js";
import ThirdPage from "../ThirdPage.js";
import FourthPage from "../FourthPage/PageFour.js";
import FifthPage from "../FifthPage/FifthPage.js";
import SixthPage from "../SixthPage/SixthPage.js";
import SeventhPage from "../SeventhPage/SeventhPage.js";

function ContentRouter() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`md:w-68 bg-gray-800 ${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative`}
      >
        <div className="sidebar space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer ">
          <div className="sidebar xl2:w-[350px] s:w-[200px] bg-[#235688] justify-center space-y-3 xl2:pl-9 s:pl-3 md:pl-2 top-0 pt-14 h-[100%] md:w-[270px] bg-fixed fixed p-8">
            <Link to="/firstPage">
              <p className="hover:text-slate-300">All About Solar Power</p>
            </Link>

            <Link to="/secondPage">
              <p className="hover:text-slate-300">Solar Panel Installation</p>
            </Link>

            <Link to="/thirdPage">
              <p className="hover:text-slate-300">
                Exploring Different Types of Solar Panels{" "}
              </p>
            </Link>

            <Link to="/fourthPage">
              <p className="hover:text-slate-300">
                Calculating the Budget for Solar Installation
              </p>
            </Link>

            <Link to="/fifthPage">
              <p className="hover:text-slate-300">
                A Guide to Finding the Right Solar Installer{" "}
              </p>
            </Link>

            <Link to="/sixthPage">
              <p className="hover:text-slate-300">
                Steps to Get Started with Solar Energy
              </p>
            </Link>

            <Link to="/seventhPage">
              <p className="hover:text-slate-300">
                In Which Category Dom You Belong to?
              </p>
            </Link>
          </div>
        </div>
      </div>

      <button
        className="menu-bar md:hidden p-3 z-999 absolute "
        id="menuBar"
        onClick={showSidebar}
      >
        <i className="fas fa-bars fa-xl"></i>
      </button>

      <Routes>
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/fourthPage" element={<FourthPage />} />
        <Route path="/fifthPage" element={<FifthPage />} />
        <Route path="/sixthPage" element={<SixthPage />} />
        <Route path="/seventhPage" element={<SeventhPage />} />
      </Routes>
    </div>
  );
}

export default ContentRouter;
