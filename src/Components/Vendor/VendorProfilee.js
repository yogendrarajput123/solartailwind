import React from "react";
import styles from "./VendorProfile.module.css";
import profile from "./Images/profile.png";
import notificationVendor from "./Images/notificationVendor.png";
import product from "./Images/product.png";
import userEng from "./Images/userEng.png";
import cloud from "./Images/cloud.png";
import help from "./Images/help.png";
import profileImage from "./Images/profileImage.png"

const VendorProfilee = () => {
  return (
    <div className={styles.container}>
      {/* <div className="max-w-[1440px] min-w-[1200px] container flex content-between "> */}
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
       {/* <div className={styles.rightPanel}>  */}
       <div className="flex flex-col justify-center items-center w-[85vw] lg:w-[100vw] md:w-[150vw] sm:w-[235vw] s:w-[320vw] m:w-[270vw] min-h-[100vh]
                        bg-[#E3E4E5]">
        {/* <div className={styles.navbar}> */}
        <div className="flex justify-end items-center w-[85vw] lg:w-[100vw] md:w-[140vw] sm:w-[235vw] m:w-[270vw] s:w-[320vw] h-[70px] bg-white">
          <img src={profile} alt="Profile" className={styles.profile} />
          profile Picturex
          <img src={help} alt="help" className={styles.help} />
        </div>
        {/* <div className={styles.grayBackground}> */}
        <div className="w-[81vw] lg:w-[95vw] md:w-[125vw] sm:w-[225vw] m:w-[260vw] s:w-[300vw] p-0 m-[30px] bg-[#FFFFFF]">
          <form className="flex flex-row pl-16">

            <div className="profile">

                 <div>
                   <p className="font-bold text-2xl mt-5 ml-2">Profile</p>
                 </div>


                 <div class="relative w-40 h-40  mt-5 rounded-full overflow-hidden border border-orange-500 bg-[#D9D9D9]">
                  
                      <img
                           class="object-cover w-full h-full"
                           src={profileImage} 
                           alt="Your Image" />
                </div>

                <div class="relative overflow-hidden w-6 h-6 rounded-full bg-orange-500 mt-[-40px] ml-[125px]">
                    <p class="text-2xl text-white pl-[4px] mt-[-7px]">+</p>
                </div>

            </div>

         

            <div className="leftContent flex-row ml-[40px] mt-[-25px]">
              <div>
                <p className="mt-40">Shop Name</p>
                <input
                  className="p-4 w-[300px] h-[10px] mt-2 bg-[#D9D9D9]"
                  type="text"
                  name="name"
                  placeholder="HPS Hydro Consultants Pvt. Ltd."
                  maxLength={50}
                />
              </div>

              <div>
                <p className="mt-[10px]">Contractor ID</p>
                <input
                  className="p-4 w-[300px] h-[10px] mt-2 bg-[#D9D9D9]"
                  type="numer"
                  name="contractorid"
                  placeholder="RFTPCTR146"
                  maxLength={50}
                />
              </div>

              <div>
                <p className="mt-[10px]">Phone No.</p>
                <input
                  className="p-4 w-[300px] h-[10px] mt-2 bg-[#D9D9D9]"
                  type="text"
                  name="name"
                  placeholder="HPS Hydro Consultants Pvt. Ltd."
                  maxLength={12}
                />
              </div>

              <div>
                <button
                  className="mt-[70px] w-[140px] text-[#00000066] h-7 mb-8 ml-[80px] bg-[#D9D9D9]"
                  placeholder="Clear Details"
                  type="clear"
                  name="cleardetail"
                >
                  Clear Details
                </button>
              </div>
            </div>



            <div className="rightContent flex-row ml-[80px] mt-[-45px] mr-[5px]"> 
              <div>
                <p className="mt-44">Email</p>
                <input
                  className="p-4 w-[300px] h-[10px] mt-2 bg-[#D9D9D9]"
                  type="email"
                  name="email"
                  placeholder="yogendra.coderform@gmail.com"
                  maxLength={50}
                />
              </div>

              <div>
                <p className="mt-[10px]">Address</p>
                <input
                  className="p-4 w-[300px] h-[10px] mt-2 bg-[#D9D9D9]"
                  type=""
                  name="address"
                  placeholder="OR-264, Indus Satellite Greens Kalod Hala A. B. Road"
                  maxLength={100}
                />
              </div>

              <div>
                <p className="mt-[10px]">Shop Timing</p>
                 <div className="flex space-x-24 mt-6">
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
                <button
                  className="mt-[30px] w-[140px] text-white h-7 mb-8 ml-[100px] bg-[#235688]"
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
  );
};
export default VendorProfilee;
