import React, { useState } from "react";
import profile from "./Images/profile.png";
import product from "./Images/product.png";
import notificationVendor from "./Images/notificationVendor.png";
import userEng from "./Images/userEng.png";
import mono from "./Images/mono.png";
import star from "./Images/star.png";
import campany from "./Images/campany.png";


export default function VendorDetaillls() {
    const [showSidebar,setShowSidebar]=useState(false)
  return (

    <div className="main flex -p-3">

<div className="block md:hidden absolute z-50 ml-5 mt-3">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {/* Insert your hamburger menu icon here */}
          <i className="fas fa-bars fa-xl"></i>
        </button>
      </div>

      <div className={`sidebar s:absolute md:relative top-0 left-0 ${showSidebar ? 'block' : 'hidden'} md:block md:w-[20%] s:w-[40%] s:h-[70%] md:h-[100vh] m-2 z-40 s:bg-gray-100 md:bg-white`}>
        <ul className="flex flex-col md:gap-y-5 s:gap-y-4  pt-28 pl-6 s:-mr-2  md:mr-4">
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={profile}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Profile
          </li>
          <li className="md:-mb-2 items-center gap-x-2 s:-ml-3 md:flex  md:text-base s:text-sm font-semibold">
            <img
              src={notificationVendor}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100 "
            />
            Notification
          </li>
          <li className=" items-center gap-x-2 s:text-sm s:-ml-3 font-semibold md:-mb-2 md:flex">
            <img
              src={product}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Product
          </li>
          <li className=" items-center gap-x-2 break-words s:text-sm s:-ml-3 font-semibold md:flex">
            <img
              src={userEng}
              alt=""
              className=" s:w-4 s:opacity-50 md:opacity-100"
            />
            Engagement
          </li>
        </ul>
      </div>

      <div className="content w-full md:w-[85%] s:w-[100%]  h-[100vh] relative z-0">
      <div className=" md:p-10 s:p-8 md:-mt-5 s:-mt-5">
        <div className="flex items-center   justify-end gap-x-2  md:-mb-5 s:-mb-10  s:text-sm ">
          <img
            src={profile}
            alt=""
            className="w-7  mt-2 s:w-4 s:opacity-50 md:opacity-100"
          />
          <span className="md:mt-2  s:mt-2 md:ml-0  font-semibold">
            profile
          </span>

          <span className=" md:ml-10 s:ml-10 md:mr-5 md:mt-2 s:mt-2 font-semibold">Logout</span>
        </div>

        </div>

        <div className="bg-gray-400 p-3">
          <div className="bg-white -mb-24">
            <div className="flex justify-start  ">
              <button
                type="button"
                class="text-white bg-bt  hover:bg-bt  focus:outline-none    font-medium  text-sm p-8 text-center inline-flex items-center mr-2 "
              >
                <span className="text-red-400 md:text-2xl  font-bold s:text-sm">
                  &larr;
                </span>
              </button>
              <div className="md:p-10 md:ml-20 s:p-5 s:-ml-2 text-bluue md:font-bold s:font-semibold md:text-[16px] s:text-[14px]">
                Vendor Details
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            {/* <div className=" m-5 grid  grid-cols-3 "> */}
            {/* <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19"> */}

            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 s:gap-7 md:m-12 s:m-16 md:mr-5 s:mr-5 md:ml-5  s:ml-5 md:px-19  s:px-19 ">
              <div className="   s:-mt-8  s:m-5   md:-mt-5  md:m-10">
                <img
                  src={campany}
                  alt=""
                  className="lg:max-w-[200px]  md:max-w-[180px]  sm:max-w-[100px] m:max-w-[60px] s:max-w-[50px]"
                />
              </div>

              <div className="s:-mt-8   md:-mt-5 md:-ml-1 lg:ml-12  sm:-ml-1   m:-ml-3   s:-ml-2   ">
                <div className="text-pd font-bold md:text-[16px] s:text-[14px]">
                  {" "}
                  Personal details
                </div>

                <p className="pt-6  font-bold md:text-[16px] s:text-[14px]">
                  {" "}
                  shop Name
                </p>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  HPS Hydro Consultants Pvt. Ltd.
                </p>

                <h1 className="md:pt-6 s:pt-4 font-bold md:text-[16px] s:text-[14px]">
                  Contractor ID
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  RFTPCTR146
                </p>

                <h1 className="md:pt-12 s:pt-6 font-bold md:text-[16px] s:text-[14px]">
                  Email
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  info@hpconsultants.co.in
                </p>

                <h1 className="md:pt-12 s:pt-6 font-bold md:text-[16px] s:text-[14px]">
                  Phone
                </h1>
                <p className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  999-7163-205
                </p>
              </div>

              <div className="md:mt-24 s:mt-0 -ml-40 max-w-[300px] md:ml-20 lg:ml-20 sm:-ml-1 m:-ml-3   s:-ml-2 ">
                <h1 className="pb-3 font-bold md:text-[16px] s:text-[14px]">
                  Address
                </h1>
                <p className="pb-3 text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  OR-264, Indus Satellite Greens Kalod Hala A. B. Road
                </p>

                <div className="md:pb-2 md:pt-6 s:pb-1 s:pt-4 font-bold md:text-[16px] s:text-[14px]">
                  Shop Timing
                </div>
                <span className="font-semibold md:text-[16px] s:text-[14px]">
                  Open
                </span>
                <span className="ml-12 font-semibold md:text-[16px] s:text-[14px]">
                  Close
                </span>
                <div></div>
                <span className="text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  09:30am
                </span>
                <span className="ml-6 text-bluue font-semibold md:text-[16px] s:text-[14px]">
                  05:30pm
                </span>
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <div className="md:m-14 s:m-4">
              <h1 className="font-bold md:text-[16px] s:text-[14px]">Likes</h1>

              <div className="Likesss md:mt-5 s:mt-2 flex ">
                <img
                  src={star}
                  className="md:max-w-[100px] s:max-w-[80px] h-5 "
                  alt=""
                />
                <span className="md:ml-2 font-bold md:text-[16px] s:text-[10px]">
                  4 out of 5
                </span>
                <span className="md:ml-20 s:ml-8 font-bold md:text-[16px] s:text-[12px]">
                  200021 global likes
                </span>
              </div>

              <div className=" md:m-5 md:mb-20 ">
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    5 star
                  </a>

                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge  max-w-[60%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    60%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    4 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[20%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    20%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    3 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[70%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    70%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[30%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    30%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="md:text-[16px] s:text-[12px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    1 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-ornge max-w-[9%]"></div>
                  </div>
                  <span className="md:text-[16px] s:text-[12px] font-medium text-gray-500 dark:text-gray-400">
                    9%
                  </span>
                </div>
              </div>

              <div className="product details md:mb-28 mb-28">
                <div className="md:m-7 s:m-5 flex">
                  <div className="flex-1 text-pd font-bold md:text-[16px] s:text-[14px]">
                    ProductDetails
                  </div>
                  <div className="text-bluue font-bold md:text-[16px] s:text-[14px]">
                    See All
                  </div>
                </div>

                <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
                  <div class="text-center shadow-lg rounded mb-5">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p class="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                  <div class="text-center shadow-lg rounded mb-5">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p class="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                 <div class="text-center shadow-lg rounded mb-5">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p class="py-2 font-bold md:text-[20px] lg:text-[16px] s:text-[16px] xl2:text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="md:py-2 s:py-1 md:text-[13px] s:text-[11px] lg:text-[12px] xl2:text-[13px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px] lg:text-[13px] xl2:text-[16px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] lg:text-[14px] xl2:text-[16px]">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px] lg:text-[14px] xl2:text-[13px]">
                        (GST inclusive price)
                      </span>
                    </div>
                  </div>

                  <div class="text-center shadow-lg rounded mb-5">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p class="py-2 font-bold md:text-[20px] s:text-[16px]  ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="md:py-2 s:py-1 md:text-[13px] s:text-[11px]">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="md:max-w-[100px] s:max-w-[80px] md:mb-2 s:mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold md:text-[16px] s:text-[12px]">
                          11018
                        </span>{" "}
                      </div>
                      <span className="font-bold md:text-[16px] s:text-[12px] ">
                        ₹29,900
                      </span>
                      <span className="md:text-[13px] s:text-[10px]">
                        (GST inclusive price)
                      </span>
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
