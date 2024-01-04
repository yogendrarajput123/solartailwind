import React from "react";
import info from "../Calculator/images/info.png";

const Calculator = () => {
  return (
    <div className="w-full mt-10 mb-10 p-1">
      <div className="Content bg-blue-50 w-full h-[100%] rounded-sm md:p-8 s:p-2">
        <div first-section className="lg:ml-4 md:-ml-4">
          <p className="font-semibold text-2xl text-center">Calculator</p>
          <p className="font-semibold mt-8">1. Total Roof Top Area</p>
          <div className="flex s:flex-col md:flex-row md:justify-center md:items-center ml-0">
            <div className="md:w-[50%] s:w-[100%]">
              <input
                type="text"
                placeholder="12m"
                className="rounded-sm mt-3 p-2 border border-black s:w-[40%] md:w-[50%]"
              />
              <input type="radio" className="lg:ml-4 md:ml-1 s:ml-1" />
              <label className="ml-2 ">Sq. Meter</label>
              <input type="radio" className="lg:ml-3 md:ml-1  s:ml-1" />
              <label className="ml-2">Sq. Feet</label>
            </div>
            <div className="flex s:flex-col md:flex-row md:items-center md:space-x-2 md:w-[50%] s:w-[100%]">
              <p className="text-gray-600 xl2:-ml-24 md:ml-2 s:mt-2 s:ml-10">OR</p>
              <p className="bg-white s:w-[40%] md:w-[50%] p-2 h-10 border rounded-sm mt-2 border-black">
                12%
              </p>
              <p className="text-[#626262] ">
                Approximate percent of the Available rooftop area
              </p>
            </div>
          </div>
          <hr className="mt-4 w- border-t border-gray-400 -ml-12" />
        </div>
        <div className="second-section">
          <p className="font-semibold mt-8 flex">
            2. Select Customer Category{" "}
            <span>
              <img src={info} alt="" className="w-7 ml-4" />
            </span>
          </p>

          <select className="p-2 md:w-[50%] s:w-[100%] rounded-md mt-4">
            <option>Select Customer Category</option>
            <option value="1">one</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </div>
        <hr className="mt-4 w- border-t border-gray-400 -ml-12" />

        <div className="Third-Section">
          <p className="font-semibold mt-8 flex">
            3. What is your average Electricity Cost?
          </p>
          <input
            type="text"
            placeholder="8"
            className="rounded-md mt-3 p-2 border border-gray-200 md:w-[20%]"
          />
          <span className="ml-2 text-[#626262]">Rs. /kwh</span>
        </div>
        <div className="Button-Section flex justify-center">
          <button className="bg-[#E87800] text-white p-2 rounded-sm md:w-[20%] s:w-[50%] mt-8 text-center ">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
