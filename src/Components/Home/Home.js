import React, { useState } from "react";
import profile from "./images/profile.png";
import notificationVendor from "./images/notificationVendor.png";
import product from "./images/product.png";
import userEng from "./images/userEng.png";
import person from "./images/person.png";
import Polygon from "./images/Polygon.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import aday from "./images/aday.png";
import aweek from "./images/aweek.png";
import amonth from "./images/amonth.png";

function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="main flex">
      <div className="block lg:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {/* Insert your hamburger menu icon here */}
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>
      <div
        className={`sidebar s:absolute lg:relative top-0 left-0 ${
          showSidebar ? "block" : "hidden"
        } lg:block s:w-[50%] s:h-[365px] md:w-[25%] md:h-[%]  z-40 s:bg-blue-100 lg:bg-white h-screen s:break-words lg:w-[32%] xl2:w-[20%]`}
      >
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
          <li className="flex items-center gap-x-2 hover:bg-[#235688] rounded hover:p-1 hover:text-white ">
            <img src={profile} alt="" className="w-7" />
            Profile
          </li>
          <li className="flex items-center gap-x-2 hover:bg-[#235688] rounded hover:p-1 hover:text-white ">
            <img src={notificationVendor} alt="" className="w-7" />
            Notification
          </li>
          <li className="flex items-center gap-x-2 hover:bg-[#235688] rounded hover:p-1 hover:text-white ">
            <img src={product} alt="" className="w-7" />
            Product
          </li>
          <li className="flex items-center gap-x-2 break-words hover:bg-[#235688] rounded hover:p-1 hover:text-white ">
            <img src={userEng} alt="" className="w-7" />
            User Engagement
          </li>
          <button>
            <p className="font-bold md:text-xl hover:bg-[#235688] border-t-4 border-blue-100 rounded hover:p-1 hover:text-white -ml-5">
              Log out
            </p>
          </button>
        </ul>
      </div>

      <div className="content h-screen ">
        <div className="navbar md:w-[100%] h-[15%] s:h-[15%] md:h-[15%] flex justify-end items items-center gap-x-5 ">
          <img
            className="md:w-10 md:h-12 s:w-12 s:h-10  md:block"
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

        <div className="middle-content bg-blue-100">
          <div className="two-containers flex s:flex-wrap md:flex-nowrap s:justify-center">
            <div className="three-container p-5">
              <div className="Your-profile-like bg-white md:w-[100%] s:w-auto s:mt-auto md:mt-auto">
                <div className="flex text-1xl gap-x-10 md:p-2  mt-2 s:p-4 font-semibold">
                  <p className="md:ml-6 s:-ml-2 s:text-1xl xl2:text-2xl md:text-base">
                    Your Profile likes
                  </p>

                  <div>
                    <ReactDatePicker
                      id="datepicker"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="rounded-md p-2 border s:w-[95px] md:w-[115px] xl2:w-[125px] xl2:h-[35px] s:h-[25px] focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="flex s:flex-col s:p-4 md:flex-row md:ml-0 md:-mt-7">
                  <div
                    className="bg-blue-100 inline-block md:mt-7 md:ml-0 lg:ml-4 xl2:ml-10 s:p-6 md:p-5 mb-7 xl2:mb-3 lg:p-6 xl2:p-12
                                          s:h-[170px] md:w-[30%] xl2: md:h-auto s:ml-5 s:mr-5 m:ml-5 m:mr-5 sm:ml-10 sm:mr-10 s:mt-7"
                  >
                    <img
                      src={aday}
                      alt=""
                      className="w-10 h-10 md:ml-4 s:ml-14 m:ml-20"
                    />
                    <p className="font-semibold s:text-[25px] m:text-[30px] md:text-base lg:text-lg xl2:text-2xl m:ml-16 md:ml-3 xl2:ml-0 s:ml-10">
                      A Day
                    </p>
                    <p className="font-semibold md:text-[30px] s:text-[40px] m:text-[45px] xl2:text-[47px] xl2:-ml-7 m:ml-12 md:ml-auto s:ml-7">
                      4,053
                    </p>
                  </div>
                  <div
                    className="bg-blue-100 inline-block md:mt-7 md:ml-0 lg:ml-4 xl2:ml-10 s:p-6 md:p-5 mb-7 xl2:mb-3 lg:p-6 xl2:p-12
                                          s:h-[170px] md:w-[30%] xl2: md:h-auto s:ml-5 s:mr-5 m:ml-5 m:mr-5 sm:ml-10 sm:mr-10 s:mt-7"
                  >
                    <img
                      src={aweek}
                      alt=""
                      className="w-10 h-10 md:ml-6 s:ml-14 m:ml-20"
                    />
                    <p className="font-semibold s:text-[25px] m:text-[30px] md:text-base lg:text-lg xl2:text-2xl xl2:-ml-2 m:ml-9 md:ml-3 s:ml-6">
                      A Weekly
                    </p>
                    <p className="font-semibold md:text-[30px] s:text-[40px] m:text-[45px] xl2:text-[47px] xl2:-ml-7 m:ml-7 md:ml-auto s:ml-4">
                      910553
                    </p>
                  </div>
                  <div
                    className="bg-pink-100 inline-block md:mt-7 md:ml-0 lg:ml-4 xl2:ml-10 s:p-6 md:p-5 mb-7 xl2:mb-3 lg:p-6 xl2:p-12
                                          s:h-[170px] md:w-[30%] xl2: md:h-auto s:ml-5 s:mr-5 m:ml-5 m:mr-5 sm:ml-10 sm:mr-10 md:mr-0 s:mt-7"
                  >
                    <img
                      src={amonth}
                      alt=""
                      className="w-10 h-10 md:ml-6 s:ml-14 m:ml-20"
                    />
                    <p className="font-semibold s:text-[25px] m:text-[30px] md:text-base lg:text-lg xl2:text-2xl xl2:-ml- m:ml-12 md:ml-3 xl2:ml-1 s:ml-7">
                      Monthly
                    </p>
                    <p className="font-semibold md:text-[30px] s:text-[40px] m:text-[45px] xl2:text-[47px] xl2:-ml-7 m:ml-7 md:ml-auto s:ml-4">
                      300053
                    </p>
                  </div>
                </div>
              </div>

              <div className="Notification-Likes flex s:flex-col md:flex-row pt-6">
                <div className="notification bg-white md:w-[100%] s:w-[100%] s:mt-5 md:mt-0  h-[450px]">
                  <div className="flex md:p-3 s:p-4 sticky">
                    <p className="font-semibold md:text-lg xl2:text-2xl s:text-xl">
                      Notification
                    </p>
                    <button
                      className="border-2 rounded border-[#8F99B1] text-[#8F99B1] md:px-2 md:ml-[260px] lg:ml-[370px]
                                           s:ml-12 m:ml-24 sm:ml-32 xl2:ml-[500px] s:px-2  s:text-0 md:text-sm xl2:text-lg"
                    >
                      All vendor
                    </button>
                  </div>

                  <div className="overflow-x-auto h-[380px]">
                    <div className="grid grid-cols-2 md:mt-8 s:mt-8 s:w-[90%] s:ml-3.5 bg-gray-100">
                      <div className="md:w-10 md:h-10 s:w-10 s:h-10 xl2:w-12 xl2:h-12 rounded-full overflow-hidden s:ml-2 s:mt-6 xl2:ml-4 xl2:mt-3 md:mt-2 md:ml-2">
                        <img
                          className="object-cover w-full h-full"
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className=" s:-ml-16 m:-ml-20 xl2:-ml-[300px] md:-ml-48 lg:-ml-56 sm:-ml-24 md:space-y-2 s:space-y-3 -mt-1 s:p-3">
                        <p className="flex s:flex-col md:flex-row md:space-x-2 s:-space-x-5">
                          <p className="text-[#233965] font-semibold md:ml-2 lg:ml-4 xl2:-ml-3 s:text-sm s:mt-4 s:-ml-5 md:mt-0 md:text-sm xl2:text-lg md:break-words">
                            Dhanajaysagar145@gmail.com
                          </p>
                          <p className="text-[#8F99B1]">10 days ago</p>
                        </p>
                        <p className="md:text-xs s:text-sm lg:text-sm xl2:text-base s:-ml-5 md:ml-2 xl2:-ml-3 lg:ml-4">
                          I hope this message finds you well. I am writing to
                          kindly request your assistance in submitting three
                          images as part of our ongoing project.
                        </p>
                        <div className="flex items-center space-x-1 s:-ml-5 lg:ml-4 md:ml-2 xl2:-ml-3 ">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:mt-8 s:mt-8 s:w-[90%] s:ml-3.5 bg-gray-100">
                      <div className="md:w-10 md:h-10 s:w-10 s:h-10 xl2:w-12 xl2:h-12 rounded-full overflow-hidden s:ml-2 s:mt-6 xl2:ml-4 xl2:mt-3 md:mt-2 md:ml-2">
                        <img
                          className="object-cover w-full h-full"
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className=" s:-ml-16 m:-ml-20 xl2:-ml-[300px] md:-ml-48 lg:-ml-56 sm:-ml-24 md:space-y-2 s:space-y-3 -mt-1 s:p-3">
                        <p className="flex s:flex-col md:flex-row md:space-x-2 s:-space-x-5">
                          <p className="text-[#233965] font-semibold md:ml-2 lg:ml-4 xl2:-ml-3 s:text-sm s:mt-4 s:-ml-5 md:mt-0 md:text-sm xl2:text-lg md:break-words">
                            Dhanajaysagar145@gmail.com
                          </p>
                          <p className="text-[#8F99B1]">10 days ago</p>
                        </p>
                        <p className="md:text-xs s:text-sm lg:text-sm xl2:text-base s:-ml-5 md:ml-2 xl2:-ml-3 lg:ml-4">
                          I hope this message finds you well. I am writing to
                          kindly request your assistance in submitting three
                          images as part of our ongoing project.
                        </p>
                        <div className="flex items-center space-x-1 s:-ml-5 lg:ml-4 md:ml-2 xl2:-ml-3">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:mt-8 s:mt-8 s:w-[90%] s:ml-3.5 bg-gray-100">
                      <div className="md:w-10 md:h-10 s:w-10 s:h-10 xl2:w-12 xl2:h-12 rounded-full overflow-hidden s:ml-2 s:mt-6 xl2:ml-4 xl2:mt-3 md:mt-2 md:ml-2">
                        <img
                          className="object-cover w-full h-full"
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className=" s:-ml-16 m:-ml-20 xl2:-ml-[300px] md:-ml-48 lg:-ml-56 sm:-ml-24 md:space-y-2 s:space-y-3 -mt-1 s:p-3">
                        <p className="flex s:flex-col md:flex-row md:space-x-2 s:-space-x-5">
                          <p className="text-[#233965] font-semibold md:ml-2 lg:ml-4 xl2:-ml-3 s:text-sm s:mt-4 s:-ml-5 md:mt-0 md:text-sm xl2:text-lg md:break-words">
                            Dhanajaysagar145@gmail.com
                          </p>
                          <p className="text-[#8F99B1]">10 days ago</p>
                        </p>
                        <p className="md:text-xs s:text-sm lg:text-sm xl2:text-base s:-ml-5 md:ml-2 xl2:-ml-3 lg:ml-4">
                          I hope this message finds you well. I am writing to
                          kindly request your assistance in submitting three
                          images as part of our ongoing project.
                        </p>
                        <div className="flex items-center space-x-1 s:-ml-5 lg:ml-4 md:ml-2 xl2:-ml-3">
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-4 md:h-4 lg:w-5 lg:h-5 xl2:w-7 xl2:h-7  s:w-5 s:h-5 text-yellow-300 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Vendors bg-white  md:w-[100%] s:w-[100%] md:-ml-2 xl2:ml-6 s:m-5 md:mt-7 s:mt-8 xl2:h-[800px] md:h-[723px] lg:h-[735px] s:h-[700px]">
              <div className="content">
                <div className="flex p-2 xl2:p-3">
                  <p className="font-semibold md:text-lg s:text-2xl xl2:text-2xl s:mt-2 md:mt-auto">
                    Vendors
                  </p>
                  <button
                    className="border-2 rounded border-[#8F99B1] text-[#8F99B1] md:px-2 s:ml-16 m:ml-32 sm:ml-44 md:ml-5 lg:ml-14 xl2:ml-40
                               s:px-1 s:py-0 md:py-0 s:text-1xl md:text-base xl2:text-lg s:mt-2 md:mt-auto"
                  >
                    See vendor
                  </button>
                </div>

                <div className=" overflow-x-auto xl2:h-[700px] md:h-[660px] s:h-[620px]">
                  <div className="Images-active md:space-y-3 s:space-y-5 xl2:space-y-6 s:mb-14 md:mb-auto">
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8 m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full  overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>

                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full  overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>

                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                    <div className="flex md:mt-5 s:mt-8 bg-blue-50 w-[92%] ml-2 md:p-2 s:p-2 xl2:p-4">
                      <div className="md:w-13 md:h-7 lg:w-13 lg:h-7 xl2:w-24 xl2:h-12 s:w-16 s:h-8  m:w-14 m:h-8 sm:w-14 sm:h-10 rounded-full overflow-hidden ml-2">
                        <img
                          className="object-cover w-full h-full "
                          src={person}
                          alt=""
                        />
                      </div>

                      <div className="ml-4 space-y-1 -mt-1 ">
                        <p className="text-[#395775] font-semibold s:text-1xl md:text-sm xl2:text-lg">
                          Dhanajay Raj
                        </p>
                        <p className="md:text-xs s:text-1xl lg:text-[14px] xl2:text-[16px]">
                          615, Pukhraj Corporate, Navlakha Main Road
                        </p>
                      </div>

                      <div>
                        <p className="text-[#00CC76] -mt-1 s:text-base md:text-sm xl2:text-lg">
                          Active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
