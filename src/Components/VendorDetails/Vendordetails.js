import React from "react";
import styles from "./Vendordetails.module.css";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import help from "./Images/help.png";
import mono from "./Images/mono.png";
import star from "./Images/star.png";
import campany from "./Images/campany.png";

const ProductDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.options}>
          <div className={styles.option}>
            <img src={profile} alt="Profile" className={styles.optionIcon} />
            Profile
          </div>
          <div className={styles.option}>
            <img
              src={notificationVendor}
              alt="Notifications"
              className={styles.optionIcon}
            />
            Notifications
          </div>
          <div className={styles.option}>
            <img src={product} alt="Products" className={styles.optionIcon} />
            Products
          </div>
          <div className={styles.option}>
            <img
              src={userEng}
              alt="User Engagement"
              className={styles.optionIcon}
            />
            User Engagement
          </div>
        </div>
        <div className={styles.welcomeText}></div>
        <div className={styles.logoutSection}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.navbar}>
          <img src={profile} alt="Profile" className={styles.profile} />
          profile Picture
          <img src={help} alt="help" className={styles.help} />
        </div>

        <div className={styles.grayBackground}>

          <div className="vendordetails">
    

            <div className="flex justify-start  ">
              <button
                type="button"
                class="text-white bg-bt  hover:bg-bt  focus:outline-none    font-medium  text-sm p-8 text-center inline-flex items-center mr-2 "
              >
                <span className="text-red-400 text-2xl font-bold">&larr;</span>
              </button>
              <div className="p-10 ml-20 text-bluue font-bold">
                Vendor Details
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            {/* <div className=" m-5 grid  grid-cols-3 "> */}
            {/* <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19"> */}
            <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
              <div className="   -mt-5  m-10   md:-mt-5  md:m-10">
                <img
                  src={campany}
                  alt=""
                  className="max-w-[250px]  md:max-w-[150px]  sm:max-w-[100px] m:max-w-[60px] s:max-w-[50px]"
                />
              </div>

              <div className="-mt-5  -ml-16  md:-mt-5 md:-ml-1  sm:-ml-1   m:-ml-3   s:-ml-2   ">
                <div className="text-pd font-bold"> Personal details</div>

                <p className="pt-6  font-bold"> shop Name</p>
                <p className="text-bluue font-semibold">
                  HPS Hydro Consultants Pvt. Ltd.
                </p>

                <h1 className="pt-6 font-bold">Contractor ID</h1>
                <p className="text-bluue font-semibold">RFTPCTR146</p>

                <h1 className="pt-12 font-bold">Email</h1>
                <p className="text-bluue font-semibold">
                  info@hpconsultants.co.in
                </p>

                <h1 className="pt-12 font-bold">Phone</h1>
                <p className="text-bluue font-semibold">999-7163-205</p>
              </div>

              <div className="mt-24 -ml-40 max-w-[300px] md:ml-20  sm:ml-3 m:-ml-3   s:-ml-2 ">
                <h1 className="pb-3 font-bold">Address</h1>
                <p className="pb-3 text-bluue font-semibold">
                  OR-264, Indus Satellite Greens Kalod Hala A. B. Road
                </p>

                <div className="pb-2 pt-6 font-bold">Shop Timing</div>
                <span className="font-semibold">Open</span>
                <span className="ml-12 font-semibold">Close</span>
                <div></div>
                <span className="text-bluue font-semibold">09:30am</span>
                <span className="ml-6 text-bluue font-semibold">05:30pm</span>
              </div>
            </div>

            <hr className="h-px bg-gray-200 border-[1px] dark:bg-gray-900" />

            <div className="m-14">
              <h1 className="font-bold">Likes</h1>

              <div className="Likesss mt-5 flex ">
                <img src={star} className="max-w-[100px] h-5 " alt="" />
                <span className="ml-2 font-bold ">4 out of 5</span>
                <span className="ml-20 font-bold">200021 global likes</span>
              </div>

              <div className=" m-5 mb-20 ">
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    5 star
                  </a>

                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge  max-w-[60%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    60%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    4 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[20%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    20%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    3 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[70%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    70%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    2 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5  bg-ornge max-w-[30%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    30%
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <a
                    href="/"
                    className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    1 star
                  </a>
                  <div className="w-[400px] h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div className="h-5 bg-ornge max-w-[9%]"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    9%
                  </span>
                </div>
              </div>

              <div className="product details mb-28">
                <div className="m-7  flex">
                  <div className="flex-1 text-pd font-bold">ProductDetails</div>
                  <div className="text-bluue font-bold">See All</div>
                </div>

                <div class="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8 m-12 mr-5 ml-5 px-19 ">
                  <div class="text-center shadow-lg rounded">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>

                    <div className="text-left m-3">
                      <p class="py-2 font-bold text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="py-2 text-[13px] ">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="max-w-[100px] mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                      </div>
                      <span className="font-bold ">₹29,900</span>
                      <span className="text-[13px]">(GST inclusive price)</span>
                    </div>
                  </div>

                  <div class="text-center shadow-lg rounded">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>
                    <div className="text-left m-3">
                      <p class="py-2 font-bold text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="py-2 text-[13px] ">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="max-w-[100px] mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                      </div>
                      <span className="font-bold">₹29,900</span>
                      <span className="text-[13px]">(GST inclusive price)</span>
                    </div>
                  </div>

                  <div class="text-center shadow-lg rounded">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>
                    <div className="text-left m-3">
                      <p class="py-2 font-bold text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="py-2 text-[13px] ">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="max-w-[100px] mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                      </div>
                      <span className="font-bold">₹29,900</span>
                      <span className="text-[13px]">(GST inclusive price)</span>
                    </div>
                  </div>

                  <div class="text-center shadow-lg rounded">
                    <div class="overflow-hidden">
                      <img src={mono} alt="" className="" />
                    </div>
                    <div className="text-left m-3">
                      <p class="py-2 font-bold text-[20px] ">
                        Monocrystalline Solar Panels (Mono-SI)
                      </p>
                      <p class="py-2 text-[13px] ">
                        Find the right products that fits your budget and needs.
                      </p>
                      <div className="flex">
                        {" "}
                        <img
                          src={star}
                          alt=""
                          className="max-w-[100px] mb-2 "
                        />{" "}
                        <span className="ml-2 text-bluee font-bold">11018</span>{" "}
                      </div>

                      <span className="font-bold">₹29,900</span>
                      <span className="text-[13px]">(GST inclusive price)</span>
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
};
export default ProductDetails;
