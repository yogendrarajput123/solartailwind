import React from "react";
import calculator from "./Images/calculator.png";
import vendorlist from "./Images/vendorlist.png";
import awareness from "./Images/awareness.png";
import financial from "./Images/financial.png";
import greencertificate from "./Images/greencertificate.png";
import notification from "./Images/notification.png"
import close from "./Images/close.png"

function OptionCitizen() {
  return (
    <div className="">
         <div className="Container grid grid-rows-3 h-screen w-auto lg:h-full
                        md:h-[650px] sm:h-[1150px] m:h-[1300px] s:h-[1510px]
                         bg-[#D3D8DC] max-w-[2560] min-w-[1200px]">

<div className=" first grid justify-end mr-8 space-y-5 xl2:mr-20 md:mr-12 md:space-y-36">
  <div className="">
    <img className="w-[70px] mt-10" src={close} alt="" />
  </div>

  <div>
    <img className="w-[70px] sm:mt-[-120px] m:mt-[-145px] s:mt-[-175px]" src={notification} alt="" />
  </div>
</div>


<div className="second grid grid-cols-5 s:ml-10 s:mt-[-70px] md:mt-16 mr-4">

  
   <div className="w-[230px] h-[140px] s:w-[200px] p-10 border-[1px] rounded border-[#235688] hover:bg-[#c8d3d3] hover:border-none ">
    <img className="w-[60px] -mt-5 ml-6 " src={calculator} alt="" />
     <p className="font-semibold text-center text-[#235688] text-[20px]">Calculator</p>
  </div>

  <div className="w-[230px] h-[140px] s:w-[200px] p-10 border-[1px]  rounded border-[#235688] hover:border-none">
    <img className="w-[60px] -mt-5 ml-3" src={vendorlist} alt="" />
     <p className="font-semibold text-[#235688] text-center text-[20px]">Vendor List</p>
  </div>

  <div className="w-[230px] h-[140px] s:w-[200px] p-10 border-[1px] rounded border-[#235688] hover:border-none">
    <img className=" w-[60px] -mt-5 ml-[-31px] " src={awareness} alt="" />
    <p className="font-semibold text-[#235688]  ml-[-29px] text-[20px]">Awareness Content</p>
  </div>

  <div className="w-[230px] h-[140px] s:w-[200px] p-10 border-[1px] rounded border-[#235688] hover:border-none">
    <img className="w-[60px] -mt-5 ml-[9px]" src={financial} alt="" />
    <p className="font-semibold text-[#235688] text-center text-[20px]">Financial Help</p>
  </div>

  <div className="w-[230px] h-[140px] s:w-[200px] p-10 border-[1px] rounded border-[#235688] hover:border-none">
    <img className="w-[60px] -mt-5 -ml-3" src={greencertificate} alt="" />
     <p className="font-semibold text-[#235688] ml-[-7px] text-[20px]">Green Certificate</p>
  </div>

   

</div>
</div>
    </div>
    
  );
}

export default OptionCitizen;