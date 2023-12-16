import React, { useState } from "react";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import person from "./Images/person.png";
import person2 from "./Images/person2.png";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";

const ReviewAndRating = () => {
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
          <li className="flex items-center gap-x-2  hover:bg-[#235688] hover:p-2 ">
            <img src={profile} alt="" className="w-7" />
            Profile
          </li>
          <li className="flex items-center gap-x-2 hover:bg-[#235688] hover:p-2 ">
            <img src={notificationVendor} alt="" className="w-7" />
            Notification
          </li>
          <li className="flex items-center gap-x-2 hover:bg-[#235688] hover:p-2 ">
            <img src={product} alt="" className="w-7" />
            Product
          </li>
          <li className="flex items-center gap-x-2 break-words hover:bg-[#235688] hover:p-2 ">
            <img src={userEng} alt="" className="w-7" />
            User Engagement
          </li>

          <li className="flex items-center gap-x-2 break-words mt-[570px] hover:bg-[#235688] hover:p-2 hover:w-36">
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

        <div className="middle-content bg-blue-100 w-full  xl2:p-[30px] lg:p-[20px] md:p-[20px] s:p-[20px] m:p-[30px] sm:p-[40px] md:h-[50%]">
          <div className="inner-content bg-white flex overflow-hidden">
            <div className="left-content p-1  border-r-4 border-solid border-blue-100 hidden lg:block">
              <p className="mt-20 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                Previous Product
              </p>
              <p className="mt-5 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                Add New Product
              </p>
              <p className="mt-5 lg:text-sm xl2:text-xl hover:bg-[#235688] hover:text-white p-2 text-[#232121CC]">
                Review And Rating
              </p>
            </div>
            <div className="right-content">
              <div className="Review-Rating border-b-4 border-solid border-blue-100  md:p-6 s:p-2 ">
                <p className="text-[#152C5B] font-semibold text-2xl md:ml-2 xl2:ml-6 s:ml-8 m:ml-14 sm:ml-16">
                  Review & Ratings
                </p>
                <div className="flex xl2:space-x-8 xl2:ml-96 md:ml-72 mt-3 m:ml-4 sm:ml-8 ">
                  <p className="md:text-2xl text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Reviews
                  </p>
                  <p className="md:text-2xl text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Ratings
                  </p>
                  <p className="md:text-2xl text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Likes
                  </p>
                  <p className="md:text-2xl text-[#233965] font-semibold hover:bg-[#235688] hover:text-white p-2">
                    Queries
                  </p>
                </div>
              </div>
              <div className="Images-Section  border-b-4 border-solid border-blue-100 flex s:flex-col md:flex-row md:p-6 s:p-4">
                <div className="flex m:ml-5 md:ml-0 sm:ml-9">
                  <div className="column-1 ">
                    <img
                      src={image1}
                      alt=""
                      className="md:w-[88px] s:w-[60px] md:h-[85px] s:h-[60px]"
                    />
                    <img
                      src={image2}
                      alt=""
                      className="md:w-[88px] s:w-[60px] md:h-[85px] s:h-[60px] md:mt-8 mt-3"
                    />
                  </div>
                  <div className="column-2 md:ml-8 s:ml-4">
                    <img
                      src={image3}
                      alt=""
                      className="md:w-[285px] md:h-[202px] s:w-[170px] s:h-[130px]"
                    />
                    <p className="text-[#00CC76] bg-[#00CC761F] w-[80px] p-1 mt-3">
                      In Stock
                    </p>
                  </div>
                </div>
                <div className="column-3 md:w-[35%]  md:ml-16 s:mt-8 md:mt-0 m:ml-4 sm:ml-8">
                  <p className="text-[#263C67] font-semibold text-lg">
                    Solar Name
                  </p>
                  <p className="text-xl">Photovoltaic Solar Energy</p>
                  <p className="text-[#263C67] font-semibold text-lg mt-5">
                    Description
                  </p>
                  <p className="text-[#000000CC] text-lg text-[#00000099]">
                    I hope this message finds you well. I am writing to kindly
                    request your assistance{" "}
                  </p>
                  <p className="text-[#263C67] font-semibold text-lg mt-5">
                    Date
                  </p>
                  <p className="text-[#8F99B1]">10/09/2022</p>
                </div>
              </div>
              <div className="StarRating-Section1 border-b-4 border-solid border-blue-100 md:p-6 s:p-4">
                <div className="flex s:flex-col md:flex-row w-[70%] m:ml-4 md:ml-0 sm:ml-8">
                  <div className="md:w-14 md:h-10 s:w-16 s:h-16 rounded-full overflow-hidden s:ml-20 md:ml-0">
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
                      I hope this message finds you well. I am writing to kindly
                      request your assistance in submitting three images as part
                      of our ongoing project.{" "}
                    </p>
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
                    <p className="text-[#00000080]">Reply</p>
                  </div>
                </div>
              </div>

              <div className="StarRating-Section2 border-b-4 border-solid border-blue-100 md:p-6 s:p-4">
                <div className="flex s:flex-col md:flex-row w-[70%] m:ml-4 md:ml-0 sm:ml-8">
                  <div className="md:w-14 md:h-10 s:w-16 s:h-16 rounded-full overflow-hidden s:ml-20 md:ml-0">
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
                      I hope this message finds you well. I am writing to kindly
                      request your assistance in submitting three images as part
                      of our ongoing project.{" "}
                    </p>

                    <p className="text-[#00000080]">Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
