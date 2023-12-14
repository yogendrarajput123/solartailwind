import React, { useState } from "react";
// import FourthPage from "../FourthPage/PageFour";
// import FifthPage from "../FifthPage/FifthPage";
// import SeventhPage from "../SeventhPage/SeventhPage";
// import SixthPage from "../SixthPage/SixthPage";
import { Link, Routes } from "react-router-dom";

function ContentRouter() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`md:w-68  ${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative`}
      >
        <div className="sidebar space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer">
          <div className="sidebar xl2:w-[350px] s:w-[200px] bg-[#235688] justify-center space-y-3 xl2:pl-9 s:pl-3 md:pl-2 top-0 pt-14 h-[100%] md:w-[270px] bg-fixed fixed">
            <Link to="/firstpage">
              <p className="hover:text-slate-300">All About Solar Power</p>
            </Link>
            <Link to="/secondpage">
              <p className="hover:text-slate-300">Solar Panel Installation</p>
            </Link>
            <Link to="/thirdpage">
              <p className="hover:text-slate-300">
                Exploring Different Types of Solar Panels{" "}
              </p>
            </Link>
            <Link to="/fourthpage">
              <p className="hover:text-slate-300">
                Calculating the Budget for Solar Installation
              </p>
            </Link>
            <Link to="/fifthpage">
              <p className="hover:text-slate-300">
                A Guide to Finding the Right Solar Installer{" "}
              </p>
            </Link>
            <Link to="/sixthpage">
              <p className="hover:text-slate-300">
                Steps to Get Started with Solar Energy
              </p>
            </Link>
            <Link to="/seventhpage">
              <p className="hover:text-slate-300">
                In Which Category Dom You Belong to?
              </p>
            </Link>
          </div>
        </div>
      </div>

      <button className="md:hidden absolute top-4 z-50 " onClick={showSidebar}>
        <i className="fas fa-bars fa-2xl p-4"></i>
      </button>

      <Routes>
        {/* <Route path="/firstpage" element={<FifthPage />} />
        <Route path="/secondpage" element={<SixthPage />} />
        <Route path="/thirdpage" element={<SeventhPage />} /> */}
        {/* <Route path="/fourthpage" element={<FourthPage />} />
        <Route path="/fifthpage" element={<FifthPage />} />
        <Route path="/sixthpage" element={<SixthPage />} />
        <Route path="/seventhpage" element={<SeventhPage />} /> */}
      </Routes>

      {/* <FourthPage />  */}
      {/* <FifthPage />  */}
      {/* <SixthPage /> */}
      {/* <SeventhPage /> */}
    </div>
  );
}

export default ContentRouter;
