import React from "react";
import nav1 from "../VendorCards/images/nav1.png";
import nav2 from "../VendorCards/images/nav2.png";
import nav3 from "../VendorCards/images/nav3.png";
import nav4 from "../VendorCards/images/nav4.png";
import nav5 from "../VendorCards/images/nav5.png";
import nav6 from "../VendorCards/images/nav6.png";
import nav7 from "../VendorCards/images/nav7.png";
import card1 from "../VendorCards/images/card1.png";
import card2 from "../VendorCards/images/card2.png";
import like from "../VendorCards/images/like.png";
export default function VendorCards() {
  return (
    <main className="bg-[#8A8F93] w-full h-auto mb-10">
      <nav className="bg-white w-full h-[15%]">
        <div className="flex lg:gap-x-10 md:gap-x-7 justify-center items-center ">
          <img src={nav1} alt="" className="w-[6%]" />
          <img src={nav2} alt="" className="w-[7%]" />
          <img src={nav3} alt="" className="w-[16%]" />
          <img src={nav4} alt="" className="w-[8%]" />
          <img src={nav5} alt="" className="w-[7%]" />
          <img src={nav6} alt="" className="w-[13%]" />
          <img src={nav7} alt="" className="w-[7%]" />

          <button className="text-red-600  font-semibold ">Log Out</button>
        </div>
      </nav>

      <div className="bg-[#8A8F93] w-full">
        <div className="bg-white w-[85%]  mx-auto my-10">
          <div>
            <div className="p-10">
              <h1 className="text-2xl font-semibold">Vendor Cards</h1>
            </div>

            <div className="flex md:flex-row s:flex-col justify-evenly">
              <div className="cards-1 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2 ">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card1} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cards-2 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card2} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly">
              <div className="cards-1 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2 ">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card1} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cards-2 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card2} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="cards-1 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2 ">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card1} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="cards-2 mb-10  p-4 bg-gray-100 border-2 border-[#E87800] rounded-sm shadow w-[40%]">
                <div className=" flex gap-2">
                  <div className="w-[50%] md:break-words">
                    <img className="w-[150px]" src={card2} alt="" />

                    <h3 className="text-[14px] text-[#99A3AD] mt-8">
                      Phone No.
                    </h3>
                    <p className="text-[16px]">999-382-7008</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Email</h3>
                    <p className="text-[16px]">info@autosysindore.com </p>
                  </div>
                  <div className="w-[50%]">
                    <h3 className="text-[18px] font-semibold text-[#000000] flex gap-16">
                      AutoSys Indore{" "}
                      <img
                        src={like}
                        alt=""
                        className="w-5 h-5 md:-ml-10 lg:ml-0"
                      />
                    </h3>

                    <h3 className="text-[14px] text-[#99A3AD] mt-4">
                      Contracter ID
                    </h3>
                    <p className="text-[16px]">RFTPCTR1366</p>

                    <h3 className="text-[14px] text-[#99A3AD] mt-3">Address</h3>

                    <p className="text-[16px]">
                      201, Sapphire Square TowerChouraha, Indore
                    </p>
                    <p>
                      <span className="flex justify-end mt-10 text-[#235688]">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full h-auto p-10 -mb-10">
        <div className="flex justify-between">
          <form className="w-[90%]">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-sm w-[50%]"
                placeholder="Enter your email"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
            </div>
            <div className="relative mt-5">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-sm w-[50%]"
                placeholder="Enter Password"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <div className="absolute inset-y-0 left-0 ml-[43%] flex items-center pointer-events-none">
                <i className="fa-solid fa-eye-slash text-gray-400"></i>
              </div>
            </div>

            <div className="">
              <button className="bg-[#23568845] p-2 text-black font-semibold mt-5 w-[50%]">
                Log In
              </button>
            </div>
          </form>
          <div className="image-section flex space-y-2 mr-20 space-x-20 w-[60%]">
            <div className="text-center">
              <img src={nav7} alt="" className="w-[100px] mx-auto" />
              <p className="mt-4 text-[14px]">
                Last Updated:{" "}
                <span className="text-[#235688] text-[14px]">
                  September 5, 2023
                </span>
              </p>
              <p className="mt-2 text-[14px]">Website Content Managed by</p>
              <p className="text-[#235688] text-[14px]">Smart City Indore</p>
            </div>
            <div className="space-y-10">
              <img src={nav2} alt="" className="w-[100px]" />
              <img src={nav6} alt="" className="w-[100px]" />
              <img src={nav3} alt="" className="w-[130px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
