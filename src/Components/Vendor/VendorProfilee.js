import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import cloud from "./Images/cloud.png";
import help from "./Images/help.png";
import person from "./Images/person.png";

const VendorProfilee = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="main flex">
      <div className="block md:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>
      <div
        className={`sidebar s:absolute md:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } md:block s:w-[50%] md:w-[600px] s:h-[80%] md:h-auto z-40 s:bg-white h-screen s:break-words lg:w-[32%] xl2:w-[15%]`}
      >
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
          <li className="flex items-center gap-x-2">
            <img src={profile} alt="" className="w-7" />
            Profile
          </li>
          <li className="flex items-center gap-x-2">
            <img src={notificationVendor} alt="" className="w-7" />
            Notification
          </li>
          <li className="flex items-center gap-x-2">
            <img src={product} alt="" className="w-7" />
            Product
          </li>
          <li className="flex items-center gap-x-2 break-words ">
            <img src={userEng} alt="" className="w-7" />
            User Engagement
          </li>
        </ul>
      </div>

      <div className="content h-screen ">
        <div className="navbar s:h-[15%] md:h-[15%] flex md:justify-end s:ml-20 items items-center md:gap-x-5 ">
          <img
            className="md:w-10 md:h-12 s:w-8 s:h-8 md:block md:ml-0 s:ml-14 m:ml-28 sm:ml-40"
            src={person}
            alt=""
          />
          <span className="md:block s:text-base md:text-sm s:ml-2 md:ml-0">
            Dhanajay Raj
          </span>
          <div className="bg-gray-400 md:w-8 md:h-8 s:w-6 s:h-6 rounded-full md:mr-14 md:block s:ml-2 md:ml-0">
            <span className="ml-3 font-bold s:text-1 xl md:text-sm s:ml-2 md:ml-3">
              ?
            </span>
          </div>
        </div>

        <div className="middle-content flex flex-col justify-center items-center bg-blue-100 s:w-screen md:w-[100%]">
          <div className="md:m-10 s:m-7 s:ml-7 s:p-2 m:p-8 sm:p-10 md:p-0 bg-[#FFFFFF]">
            <div className="md:flex ml-72 mt-20 hidden">
              <i className="fa-solid fa-user"></i>
              <p className="ml-4 -mt-[5px]">Profile</p>
              <i className="fa-regular fa-pen-to-square fa-xl flex ml-[600px]"></i>
            </div>
            <div className="md:hidden s:mt-6 m:-mt-4 ml-56 mr-2">
              <i className="fa-regular fa-pen-to-square fa-xl flex"></i>
            </div>
            <form className="flex md:flex-row s:flex-col md:pl-16 s:pl-6">
              <div className="profile">
                <div>
                  <p className="font-bold text-2xl md:-mt-16 s:-mt-7 m:-mt-7 md:ml-2 s:-ml-4">
                    Profile
                  </p>
                </div>

                <div class="relative w-40 h-40  mt-5 rounded-full overflow-hidden border border-orange-500 bg-[#D9D9D9] s:ml-5 md:ml-0">
                  <img class="object-cover w-full h-full" src={person} alt="" />
                </div>

                <div class="relative overflow-hidden w-6 h-6 rounded-full bg-orange-500 mt-[-40px] md:ml-[125px] s:ml-[150px]">
                  <p class="text-2xl text-white pl-[4px] mt-[-7px]">+</p>
                </div>
              </div>

              <div className="leftContent flex-row mt-[-90px] md:ml-16 s:ml-1">
                <div>
                  <p className="mt-40">Shop Name</p>
                  <input
                    className="p-4 md:w-[300px] s:w-[200px] h-[10px] mt-2 bg-[#D9D9D9]"
                    type="text"
                    name="name"
                    placeholder="HPS Hydro Consultants Pvt. Ltd."
                    maxLength={50}
                  />
                </div>

                <div>
                  <p className="mt-[10px]">Contractor ID</p>
                  <input
                    className="p-4 md:w-[300px] s:w-[200px] h-[10px] mt-2 bg-[#D9D9D9]"
                    type="numer"
                    name="contractorid"
                    placeholder="RFTPCTR146"
                    maxLength={50}
                  />
                </div>

                <div>
                  <p className="mt-[10px]">Phone No.</p>
                  <input
                    className="p-4 md:w-[300px] s:w-[200px] h-[10px] mt-2 bg-[#D9D9D9]"
                    type="text"
                    name="name"
                    placeholder="HPS Hydro Consultants Pvt. Ltd."
                    maxLength={12}
                  />
                </div>

                <div>
                  <button
                    className="md:mt-[70px] s:mt-8 md:w-[140px] s:w-[110px] text-[#00000066] h-7 mb-8 md:ml-[80px] s:ml-11 bg-[#D9D9D9]"
                    placeholder="Clear Details"
                    type="clear"
                    name="cleardetail"
                  >
                    Clear Details
                  </button>
                </div>
              </div>

              <div className="rightContent flex-row md:ml-[80px] s:ml-1 md:mt-[-110px] s:mt-[-170px] mr-[5px]">
                <div>
                  <p className="mt-44">Shop Timing</p>
                  <div className="flex md:space-x-24 s:space-x-16 mt-2">
                    <div>
                      <p className="">Open</p>
                      <p className=" mt-3 text-[#00000066]">9:15 AM</p>
                    </div>
                    <div>
                      <p className="">Closing</p>
                      <p className=" mt-3 text-[#00000066]">5:45 PM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mt-5">Email</p>
                  <input
                    className="p-4 md:w-[300px] s:w-[200px] h-[10px] mt-2 bg-[#D9D9D9]"
                    type="email"
                    name="email"
                    placeholder="yogendra.coderform@gmail.com"
                    maxLength={50}
                  />
                </div>

                <div>
                  <p className="mt-[10px]">Address</p>
                  <input
                    className="p-4 md:w-[300px] s:w-[200px] h-[10px] mt-2 bg-[#D9D9D9]"
                    type=""
                    name="address"
                    placeholder="OR-264, Indus Satellite Greens Kalod Hala A. B. Road"
                    maxLength={100}
                  />
                </div>

                <div>
                  <button
                    className="mt-[35px] md:w-[140px] s:w-[110px]  text-white h-7 mb-8 md:ml-[100px] s:ml-10 bg-[#235688]"
                    placeholder="Clear Details"
                    type="clear"
                    name="cleardetail"
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="w-10 text-white">adsdws</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfilee;
