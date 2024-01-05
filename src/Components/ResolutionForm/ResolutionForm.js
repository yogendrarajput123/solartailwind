// import React from 'react'
// import nav1 from '../ResolutionForm/Images/nav1.png'
// import nav2 from "../ResolutionForm/Images/nav2.png";
// import nav3 from "../ResolutionForm/Images/nav3.png";
// import nav4 from "../ResolutionForm/Images/nav4.png";

// const ResolutionForm = () => {
//   return (
//     <main className="bg-[#8A8F93] w-full h-full mb-10">
//       <nav className="bg-white w-full h-[15%]">
//         <div className="flex lg:gap-x-32 md:gap-x-7 justify-center items-center ">
//           <img src={nav1} alt="" className="w-[6%]" />
//           <img src={nav2} alt="" className="w-[8%]" />
//           <img src={nav3} alt="" className="w-[7%]" />
//           <img src={nav4} alt="" className="w-[7%]" />
//         </div>
//       </nav>

//       <div className="bg-[#8A8F93] w-full p-6">
//         <div className="bg-white my-10 p-4">
//           <div><h1>lojdbsd sh sh shf shf sh </h1></div>
//         </div>
//       </div>

//     </main>
//   );
// }

// export default ResolutionForm
import React from "react";
import nav1 from "../ResolutionForm/Images/nav1.png";
import nav2 from "../ResolutionForm/Images/nav2.png";
import nav3 from "../ResolutionForm/Images/nav3.png";
import nav4 from "../ResolutionForm/Images/nav4.png";

const ResolutionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to your server or perform any other actions
  };

  return (
    <main className="bg-[#8A8F93] w-full h-[100vh] mb-10">
      <nav className="bg-white w-full lg:h-[20%] xl2:h-[20%]">
        <div className="flex md:gap-x-24 s:gap-x-4 justify-center items-center">
          <img src={nav1} alt="" className="md:w-[7%] s:w-[18%]" />
          <img src={nav2} alt="" className="md:w-[8%] s:w-[20%]" />
          <img src={nav3} alt="" className="md:w-[6%] s:w-[14%]" />
          <img src={nav4} alt="" className="md:w-[6%] s:w-[14%]" />
        </div>
      </nav>

      <div className="bg-[#8A8F93] w-full p-6">
        <div className="bg-white md:my-10 p-5">
          <h1 className="text-2xl font-bold mb-4 text-center">संकल्प पत्र</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                नाम :-
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="अपना नाम दर्ज करें"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="mobile"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                मोबाइल नंबर :-
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="मोबाइल नंबर दर्ज करें"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                शहर/गाँव का पता :-
              </label>
              <input
                type="add"
                id="address"
                name="address"
                placeholder="आपका पूरा पता यहाँ दर्ज करें"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              ></input>
            </div>
            <div className="mb-5">
              <label
                htmlFor="light bill"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                दर महीने बिजली का बिल :-
              </label>
              <input
                type="number"
                id="lightBill"
                name="lightBill"
                placeholder="बिजली का बिल दर्ज करें"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor="select section"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                कितने महीनों में आप संकल्प लेने का निर्णय करेंगे :-
              </label>

              <select className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>
                  महीने चुनें
                </option>
                <option value="1">4 महीने</option>
                <option value="2">6 महीने</option>
                <option value="3">1 साल</option>
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
              >
                भेजें
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResolutionForm;
