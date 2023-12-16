import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import person from "./Images/person.png";

const VendorProfile = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="main flex">
      <div className="block lg:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>
      <div
        className={`sidebar s:absolute lg:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } lg:block s:w-[50%] s:h-[90%] md:w-[25%] md:h-[100vh]  z-40  s:bg-white lg:bg-white h-screen s:break-words lg:w-[20%] xl2:w-[17%]`}
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

      <div className="content h-full s:w-[100%] lg:w-[80%] xl2:w-[83%]">
        <div className="navbar md:w-[100%] h-[15%] s:h-14 md:h-[15%] bg-white flex justify-end items items-center gap-x-5">
          <img
            className="md:w-10 md:h-12 s:w-12 s:h-10 md:block"
            src={person}
            alt=""
          />
          <span className=" md:block s:text-1xl md:text-sm">Dhanajay Raj</span>
          <div className="bg-gray-400 md:w-8 md:h-8 s:w-6 s:h-6 rounded-full mr-14 md:block">
            <span className="ml-3 font-bold s:text-1 xl md:text-sm s:ml-2 md:ml-3">
              ?
            </span>
          </div>
        </div>

        <div className="middle-content bg-blue-100 w-full h-[100%] md:p-[30px] s:p-[20px]">
          <div className="form bg-white p-6 flex s:flex-col md:flex-row md:ml-0 md:mr-0 m:ml-8 m:mr-8">
            <div className="first-column sm:ml-6 md:-ml-8 xl2:ml-8">
              <div className="">
                <p className="font-bold text-2xl md:mt-10 md:ml-10 text-blue-900">
                  Profile
                </p>
              </div>
              <div className="md:hidden">
                <i className="fa-regular fa-pen-to-square fa-xl s:ml-48 sm:ml-60"></i>
              </div>

              <div
                className="relative s:w-40 s:h-40  rounded-full overflow-hidden border border-orange-500 bg-[#D9D9D9]
                              md:ml-10 s:ml-8 md:mt-8 s:mt-6 "
              >
                <img
                  className="object-cover w-full h-full"
                  src={person}
                  alt=""
                />
              </div>

              <div className="relative overflow-hidden w-6 h-6 s:ml-40 lg:ml-[165px] rounded-full bg-orange-500 mt-[-40px]">
                <p className="text-2xl text-white pl-[4px]  mt-[-7px]">+</p>
              </div>
            </div>

            <div className="second-column md:mt-16 md:ml-7 sm:ml-8 xl2:ml-14">
              <p className="hidden md:block">
                <i className="fa-solid fa-user"></i>&emsp; Profile
                
              </p>
              <div className="mt-20">
                <p className="text-xl font-semibold">Shop Name</p>
                <input
                  className="md:w-[200px] s:w-[220px] xl2:w-[300px] text-[#00000066] bg-[#D9D9D9] p-2 rounded mt-2"
                  type="text"
                  name="name"
                  placeholder="HPS Hydro Consultants Pvt. Ltd."
                  maxLength={50}
                />
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold">Contractor ID</p>
                <input
                  className="md:w-[200px] s:w-[220px] xl2:w-[300px] text-[#00000066] bg-[#D9D9D9] p-2 rounded mt-2"
                  type="numer"
                  name="contractorid"
                  placeholder="RFTPCTR146"
                  maxLength={50}
                />
              </div>
              <div className="mt-6">
                <p className="text-xl font-semibold">Phone No.</p>
                <input
                  className="md:w-[200px] s:w-[220px] xl2:w-[300px] text-[#00000066] bg-[#D9D9D9] p-2 rounded mt-2"
                  type="text"
                  name="name"
                  placeholder="HPS Hydro Consultants Pvt. Ltd."
                  maxLength={12}
                />
              </div>
              <div className="md:ml-8 s:ml-10 xl2:ml-20">
                <button
                  className="w-[140px] text-[#00000066] bg-[#D9D9D9] md:mt-14 s:mt-8 h-10"
                  placeholder="Clear Details"
                  type="clear"
                  name="cleardetail"
                >
                  Clear Details
                </button>
              </div>
            </div>

            <div className="third-column md:mt-[166px] s:mt-10 md:ml-14 lg:ml-16 xl2:ml-24">
              <div>
                <p className="text-xl font-semibold">Shop Timing</p>
                <div className="flex mt-2">
                  <div className="">
                    <p className="text-lg font-medium">Open</p>
                    <p className="mt-2 md:w-[90px] s:w-[90px] xl2:w-[120px] p-1 text-[#00000066] bg-[#D9D9D9]">
                      9:15 AM
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium s:ml-12 md:ml-6">
                      Closing
                    </p>
                    <p className="s:ml-12 md:ml-6 mt-2 md:w-[90px] xl2:w-[120px] s:w-[90px] p-1 text-[#00000066] bg-[#D9D9D9]">
                      5:45 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xl font-semibold">Email</p>
                <input
                  className="bg-[#D9D9D9] md:w-[200px] xl2:w-[300px] s:w-[220px] text-[#00000066] p-2 mt-2"
                  type="email"
                  name="email"
                  placeholder="yogendra.coderform@gmail.com"
                  maxLength={50}
                />
              </div>

              <div className="mt-6">
                <p className="text-xl font-semibold">Address</p>
                <input
                  className="bg-[#D9D9D9] md:w-[200px] xl2:w-[300px] s:w-[220px] text-[#00000066] p-2 mt-2"
                  type=""
                  name="address"
                  placeholder="OR-264, Indus Satellite Greens Kalod Hala A. B. Road"
                  maxLength={100}
                />
              </div>

              <div className="mt-7 md:ml-10 s:ml-10 xl2:ml-20">
                <button
                  className="w-[140px] text-white bg-[#235688] h-10"
                  placeholder="Clear Details"
                  type="clear"
                  name="cleardetail"
                >
                  Update
                </button>
              </div>
            </div>

            <div className="fourth-column mt-14 md:ml-0 lg:ml-3 xl2:ml-8 hidden md:block">
              <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
