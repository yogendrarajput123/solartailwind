import React from "react";
import nav1 from "../VendorCards/images/nav1.png";
import nav2 from "../VendorCards/images/nav2.png";
import nav3 from "../VendorCards/images/nav3.png";
import nav4 from "../VendorCards/images/nav4.png";
import nav5 from "../VendorCards/images/nav5.png";
import nav6 from "../VendorCards/images/nav6.png";
import nav7 from "../VendorCards/images/nav7.png";
import card1 from "../VendorCards/images/card1.png";
import like from "../VendorCards/images/like.png";
export default function VendorCards() {
  return (
    <main className="bg-gray-500 w-full h-[100vh]">
      <nav className="bg-white w-full h-[15%]">
        <div className="flex gap-x-10 justify-center items-center ">
          <img src={nav1} alt="" className="w-[70px]" />
          <img src={nav2} alt="" className="w-[90px] h-auto" />
          <img src={nav3} alt="" className="w-[250px]" />
          <img src={nav4} alt="" className="w-[90px]" />
          <img src={nav5} alt="" className="w-[80px]" />
          <img src={nav6} alt="" className="w-[180px] h-[25px]" />
          <img src={nav7} alt="" className="w-[80px]" />

          <button className="text-red-600  font-semibold ">Log Out</button>
        </div>
      </nav>

      <div className="bg-gray-500 w-full h-[100vh] ">
        <div className="bg-white w-[85%] h-[100%] mx-auto my-10">
          <div className="p-10">
            <h1>VendorCards</h1>
          </div>

          <div>
            <div className="cards1  p-6 bg-gray-300 border-2 border-[#E87800] rounded-sm shadow w-[45%]">
              <div className=" flex gap-8">
                <div className="">
                  <img className="w-[200px]" src={card1} alt="" />

                  <h3 className="text-[14px] text-[#99A3AD] mt-10">
                    Phone No.
                  </h3>
                  <p className="text-[16px]">12345678345</p>

                  <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                  <p className="text-[16px]">info@autosysindore.com</p>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                    AutoSys Indore{" "}
                    <span>
                      <img src={like} alt="" className="w-5" />
                    </span>
                  </h3>

                  <h3 className="text-[14px] text-[#99A3AD] mt-4">
                    Contracter ID
                  </h3>
                  <p className="text-[16px]">RFTPCTR1366</p>

                  <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                  <p className="text-[16px]">
                    201, Sapphire Square TowerChouraha, Indore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
