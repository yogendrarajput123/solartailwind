import React from "react";
import Close from "../GreenCertificateRequest/Images/close.png";
import Certificate from "../GreenCertificateRequest/Images/certificate.png";
import cloud from "../GreenCertificateRequest/Images/cloud.png";


const GreenCertiRequest = () => {
  return (
    <div className="bg-[#8A8F93] w-full h-[100%] md:px-16 s:px-7">
      <div className="Close-Icon">
        {" "}
        <img
          src={Close}
          alt=""
          className="md:w-[4%] s:w-[8%] ml-[100%] cursor-pointer"
        />
      </div>
      <div className="bg-white w-full p-3 md:p-10 flex md:flex-row s:flex-col -mt-12">
        <div className="Image-section md:w-[50%]  md:ml-8">
          <p className="text-[#152C5B] font-semibold mb-4 mt-10 md:mt-0">
            Green Certificate Request Form
          </p>
          <img
            src={Certificate}
            alt=""
            className="md:w-[60%] s:w-[100%] mb-4"
          />
          <div className="mb-5 relative">
            <label className="block text-sm font-semibold mb-2">
              Pan Card Number
            </label>
            <input
              type="text"
              id="pan"
              name="pancard"
              placeholder="Enter Pan Card Number"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <div className="md:mb-10 mb-5">
            <label className="block text-sm font-semibold mb-2">
              Aadhar Card Number
            </label>
            <input
              type="text"
              id="aadgar"
              name="aadhar"
              placeholder="Enter Aadhar Card Number"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <p className="text-[#152C5B] font-bold hidden md:block md:mb-10 mb-5">
            Documents Uploding{" "}
          </p>
        </div>
        <div className="Input-Section md:w-[50%] ">
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              House Owner Name
            </label>
            <input
              type="text"
              id="house"
              name="house"
              placeholder="Enter House Owner Name"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Registered Phon No.
            </label>
            <input
              type="text"
              id="regis"
              name="regis"
              placeholder="Enter Phone No."
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              solar panel unique REF number
            </label>
            <input
              type="text"
              id="solar"
              name="solar"
              placeholder="Enter solar panel unique ref number"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">
              Registered E-Mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Registered E-Mail"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <div className="md:mb-28 s:mb-12">
            <label className="block text-sm font-semibold mb-2">
              Registration Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Registration Address"
              className="border rounded p-2 w-full md:w-[80%] bg-[#C3D1DC40]"
              required
            />
          </div>
          <p className="text-[#152C5B] font-bold md:hidden text-center">
            Documents Uploding{" "}
          </p>

        </div>
      </div>
      <div className="bg-white w-full p-3 md:p-10 flex md:flex-row s:flex-col lg:-mt-24 md:-mt-36">
        <div className="First md:w-[60%] md:ml-8">
          <div className="Electricity-Bill flex flex-col space-y-1 md:mb-10 mb-5">
            <label className="block text-sm font-semibold">
              Attach Electricity Bill
            </label>
            <div className=" bg-blue-50 flex flex-col items-center justify-center md:w-[80%] p-[7%] border-2 border-dashed border-gray-400 rounded">
              <img src={cloud} alt="" className="w-[8%]" />
              <p className="text-gray-500">Drag and Drop here</p>
            </div>
            <p className="text-gray-500 text-sm">
              Accept File Types : doc,pdf,png,jpg
            </p>
          </div>
          <div className="Photo-solar flex flex-col space-y-1 s:mb-5 md:mb-0">
            <label className="block text-sm font-semibold">
              Photo With Solar Panel
            </label>
            <div className=" bg-blue-50 flex flex-col items-center justify-center md:w-[80%] p-[7%] border-2 border-dashed border-gray-400 rounded">
              <img src={cloud} alt="" className="w-[8%]" />
              <p className="text-gray-500">Drag and Drop here</p>
            </div>
            <p className="text-gray-500 text-sm">
              Accept File Types : doc,pdf,png,jpg
            </p>
          </div>
        </div>
        <div className="second md:w-[60%]">
          <div className="flex flex-col space-y-1 md:mb-16 mb-5">
            <label className="block text-sm font-semibold">
              Bill Issued By Vendor
            </label>
            <div className=" bg-blue-50 flex flex-col items-center justify-center md:w-[80%] p-[7%] border-2 border-dashed border-gray-400 rounded">
              <img src={cloud} alt="" className="w-[8%]" />
              <p className="text-gray-500">Drag and Drop here</p>
            </div>
            <p className="text-gray-500 text-sm">
              Accept File Types : doc,pdf,png,jpg
            </p>
          </div>
          <div className="flex flex-col space-y-1 md:mb-10 mb-5 cursor-pointer">
            <div className=" bg-blue-900 flex flex-col items-center justify-center md:w-[80%] s:p-[6%] md:p-[5%] lg:p-[8%] rounded lg:mt-3 md:mt-0.5">
              <p className="text-white font-semibold">
                Apply For Green Verification
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCertiRequest;
