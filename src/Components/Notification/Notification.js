import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import person from "./Images/person.png";
import person2 from "./Images/person2.png";

const Notification = () => {
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
        } lg:block s:w-[50%] s:h-[100%] md:w-[25%] z-40  s:bg-blue-200 lg:bg-white h-screen s:break-words lg:w-[20%] xl2:w-[17%]`}
      >
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
          <li className="flex items-center gap-x-2 hover:text-white rounded hover:bg-[#235688] hover:p-2 ">
            <img src={profile} alt="" className="w-7" />
            Profile
          </li>
          <li className="flex items-center gap-x-2 hover:text-white rounded hover:bg-[#235688] hover:p-2 ">
            <img src={notificationVendor} alt="" className="w-7" />
            Notification
          </li>
          <li className="flex items-center gap-x-2 hover:text-white rounded hover:bg-[#235688] hover:p-2 ">
            <img src={product} alt="" className="w-7" />
            Product
          </li>
          <li className="flex items-center gap-x-2 break-words lg:mb hover:bg-[#235688] rounded m:hover:p-2 m:hover:w-36 s:hover:w-32 s:hover:p-1">
            <i className="fa-arrow-left-long fa-solid">&emsp; Log Out</i>
          </li>
        </ul>
      </div>

      <div className="content h-full s:w-[100%] lg:w-[80%] xl2:w-[83%]">
        <div className="navbar md:w-[100%] s:h-14 md:h-20 bg-white flex justify-end items items-center gap-x-5">
          <img
            className="md:w-10 md:h-12 s:w-12 s:h-10 md:block "
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

        <div className="middle-content bg-blue-100 w-full md:p-10 s:p-4 m:p-2 sm:p-1 md:h-[100%] min-h-[100vh]">
          <div className="inner-content flex overflow-hidden mt-6 s:ml-1 m:ml-8 sm:ml-12 md:ml-0 min-h-[100vh]">
            <div className="">
              <div className="StarRating-Section1 md:w-[78.8%] lg:w-[79.1%] xl2:w-[80.5%] border-b-4 bg-white border-solid border-blue-100 md:p-6 s:p-4">
                <p className="text-[#152C5B] text-3xl font-semibold">
                  Notification
                </p>
              </div>
              <div className="flex md:flex-row s:flex-col">
                <div className=" border-b-4 border-solid border-blue-100 md:p-6 s:p-4 w-[100%] bg-white">
                  <div className="flex s:flex-col md:flex-row m:ml-4 md:ml-0 sm:ml-8">
                    <div className="md:w-24 md:h-10 lg:w-20 lg:h-10 xl2:w-14 xl2x:h-16 s:w-16 s:h-16 rounded-full overflow-hidden s:ml-20 md:ml-0">
                      <img
                        className="object-cover w-full h-full"
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="md:ml-4 space-y-2">
                      <p className="flex md:flex-row s:flex-col">
                        <p className="text-[#233965] font-semibold s:mt-2 md:mt-0">
                          Dhanajaysagar145@gmail.com
                        </p>
                        <p className="text-[#8F99B1] md:ml-2">10 days ago</p>
                      </p>
                      <p className="s:w-[250px] md:w-[100%]">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance in submitting three
                        images as part of our ongoing project.{" "}
                      </p>
                      <div className="flex">
                        <div className="flex items-center ">
                          <svg
                            className="md:w-6 md:h-6 s:w-7 s:h-7 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-6 md:h-6 s:w-7 s:h-7 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-6 md:h-6 s:w-7 s:h-7 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-6 md:h-6 s:w-7 s:h-7 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="md:w-6 md:h-6 s:w-7 s:h-7  text-yellow-300"
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
                <div className="md:w-[20%] s:p-2 md:p-0 bg-red md:bg-[#D9D9D94D] s:bg-gray-300 md:ml-10 items-center md:text-center border-b-4 border-solid border-blue-100">
                  <p className="text-gray-700 md:mt-16 s:text-center text-2xl font-semibold">
                    Reply
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row s:flex-col">
                <div className=" border-b-4 border-solid border-blue-100 md:p-6 s:p-4 w-[100%] bg-white">
                  <div className="flex s:flex-col md:flex-row m:ml-4 md:ml-0 sm:ml-8">
                    <div className="md:w-24 md:h-10 lg:w-20 lg:h-10 xl2:w-14 xl2x:h-16 s:w-16 s:h-16 rounded-full overflow-hidden s:ml-20 md:ml-0">
                      <img
                        className="object-cover w-full h-full"
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="md:ml-4 space-y-2">
                      <p className="flex md:flex-row s:flex-col">
                        <p className="text-[#233965] font-semibold s:mt-2 md:mt-0">
                          Dhanajaysagar145@gmail.com
                        </p>
                        <p className="text-[#8F99B1] md:ml-2">10 days ago</p>
                      </p>
                      <p className="s:w-[250px] md:w-[100%]">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance in submitting three
                        images as part of our ongoing project.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[20%] s:p-2 md:p-0 bg-red md:bg-[#D9D9D94D] s:bg-gray-300 md:ml-10 items-center md:text-center border-b-4 border-solid border-blue-100">
                  <p className="text-gray-700 md:mt-16 s:text-center text-2xl font-semibold">
                    Reply
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row s:flex-col">
                <div className=" border-b-4 border-solid border-blue-100 md:p-6 s:p-4 w-[100%] bg-white">
                  <div className="flex s:flex-col md:flex-row m:ml-4 md:ml-0 sm:ml-8">
                    <div className="md:w-24 md:h-10 lg:w-20 lg:h-10 xl2:w-14 xl2x:h-16 s:w-16 s:h-16 rounded-full overflow-hidden s:ml-20 md:ml-0">
                      <img
                        className="object-cover w-full h-full"
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="md:ml-4 space-y-2">
                      <p className="flex md:flex-row s:flex-col">
                        <p className="text-[#233965] font-semibold s:mt-2 md:mt-0">
                          Dhanajaysagar145@gmail.com
                        </p>
                        <p className="text-[#8F99B1] md:ml-2">10 days ago</p>
                      </p>
                      <p className="s:w-[250px] md:w-[100%]">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance in submitting three
                        images as part of our ongoing project.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[20%] s:p-2 md:p-0 bg-red md:bg-[#D9D9D94D] s:bg-gray-300 md:ml-10 items-center md:text-center border-b-4 border-solid border-blue-100">
                  <p className="text-gray-700 md:mt-16 s:text-center text-2xl font-semibold">
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
