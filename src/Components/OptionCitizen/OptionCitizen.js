import React from "react";
import calculator from "./Images/calculator.png";
import vendorlist from "./Images/vendorlist.png";
import awareness from "./Images/awareness.png";
import financial from "./Images/financial.png";
import greencertificate from "./Images/greencertificate.png";
import notification from "./Images/notification.png";
import close from "./Images/close.png";

function OptionCitizen() {
  return (
    <div className="Container w-full md:h-[100vh] h-auto bg-[#D3D8DC] p-5">
      <div className="Buttons-Section flex md:flex-col items-end cursor-pointer justify-end md:space-y-4 space-x-2 mr-[3%]">
        <img src={close} alt="" className="w-[16%] md:w-[5%]" />
        <img src={notification} alt="" className="w-[16%] md:w-[5%]" />
      </div>
      <div className="Cards-Section flex s:flex-col md:flex-row md:mt-[7%] mt-[15%] s:ml-[10%] md:ml-0 s:space-y-4 md:space-y-0 cursor-pointer">
        <div className="">
          <img src={calculator} alt="" className="w-[90%]"></img>
        </div>
        <div className="">
          <img src={vendorlist} alt="" className="w-[90%]"></img>
        </div>
        <div className="">
          <img src={awareness} alt="" className="w-[90%]"></img>
        </div>
        <div className="">
          <img src={financial} alt="" className="w-[90%]"></img>
        </div>
        <div className="">
          <img src={greencertificate} alt="" className="w-[90%]"></img>
        </div>
      </div>
    </div>
  );
}

export default OptionCitizen;
