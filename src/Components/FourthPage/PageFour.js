import React from "react";
import firstLogo from "./images/firstLogo.png";
import secondLogo from "./images/secondLogo.png";
import thirdLogo from "./images/thirdLogo.png";
import fourthLogo from "./images/fourthLogo.png";
import fifthLogo from "./images/fifthLogo.png";
import sixthLogo from "./images/sixthLogo.png";
import seventhLogo from "./images/seventhLogo.png";
import eigthLogo from "./images/eigthLogo.png";
import ninthLogo from "./images/ninthLogo.png";
import tenthLogo from "./images/tenthLogo.png";
import firstImage from "./images/firstImage.png";
import secondImage from "./images/secondImage.png";
import thirdImage from "./images/thirdImage.png";
import fourthImage from "./images/fourthImage.png";
import fifthImage from "./images/fifthImage.png";

export default function FourthPage() {
  return (
    <div className="container flex">
      <div className="space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer hidden md:block">
        <div className="sidebar xl2:w-[400px] bg-[#235688] justify-center space-y-3 pl-9 top-0 pt-14 h-[100%] w-[350px] bg-fixed fixed">
          <p className="hover:text-slate-300">All About Solar Power</p>
          <p className="hover:text-slate-300">Solar Panel Installation</p>
          <p className="hover:text-slate-300">
            Exploring Different Types of Solar Panels{" "}
          </p>
          <p className="hover:text-slate-300">
            Calculating the Budget for Solar Installation
          </p>
          <p className="hover:text-slate-300">
            A Guide to Finding the Right Solar Installer{" "}
          </p>
          <p className="hover:text-slate-300">
            Steps to Get Started with Solar Energy
          </p>
          <p className="hover:text-slate-300">
            In Which Category Dom You Belong to?
          </p>
        </div>
      </div>

      <div className="container xl2:ml-[420px] md:ml-[360px]">
        <div className="content">
          <p className="font-semibold md:text-3xl s:text-xl pt-5 pl-4">
            Calculating the Budget for Solar Installation: A Comprehensive Guide
          </p>
          <p className="pl-4 pt-6">
            When planning for a solar installation, it's crucial to have a clear
            understanding of the budget involved. Here are the key factors to
            consider and steps to follow when calculating the budget for a solar
            installation.
          </p>
          <p className="pl-4 pt-6 font-semibold">
            Determine your energy needs:
          </p>
          <p className="pl-4">
            To begin, evaluate how much electricity you currently use to figure
            out the appropriate size of the solar system you'll need. Look at
            your typical monthly energy consumption, highest energy usage
            periods, and any expected rises in electricity needs.
          </p>
          <div className="flex flex-row pt-16">
            <div className=" md:w-[100px] s:w-[60px] ml-16 s:ml-5 md:mt-[10px] s:-mt-10">
              <img src={firstLogo} alt="" />
            </div>

            <div className="md:mt-14 s:-mt-5 md:ml-[-50px] s:-ml-10 lg:left-0 ">
              <img
                className=" md:max-w-[600px] xl2:max-w-[800px] s:max-w-[250px] m:max-w-[300px] sm:max-w-[320px] items-center"
                src={firstImage}
                alt=""
              />
            </div>

            <div className=" md:w-[100px] s:w-[70px] mt-[380px] ml-[-49px] md:mt-[300px] s:mt-14 m:mt-20 sm:mt-[90px] xl2:mt-[380px]">
              <img src={secondLogo} className="" alt="" />
            </div>
          </div>
          <div className="pl-4 md:pt-20 s:pt-12">
            <p className="font-semibold">Evaluate the available space:</p>
            <p>
              Evaluate the amount of space you have on your property to install
              solar panels. Take into account factors like the size of your
              roof, its direction, any obstructions that may block sunlight, and
              the strength of the structure. If you have limited space, you
              might want to consider other options like ground-mounted systems.
            </p>
          </div>
          <div className="flex flex-row mt-8 md:-ml-14 xl2:ml-20">
            <div className="md:ml-[150px] s:ml-5">
              <img src={thirdLogo} className="md:w-[100px] s:w-[80px]" alt="" />
            </div>

            <div className="md:w-[450px] s:w-[300px] md:mt-12 s:mt-7 md:ml-[-50px] s:-ml-10">
              <img src={secondImage} alt="" />
            </div>

            <div className="md:mt-[310px] s:mt-[150px] m:mt-[170px] sm:mt-[190px] md:ml-[-40px] s:ml-[-30px] s:mr-4 md:mr-0">
              <img
                src={fourthLogo}
                alt=""
                className="md:w-[100px] s:w-[80px]"
              />
            </div>
          </div>
          <div className="pl-4 md:pt-24 s:pt-14">
            <p className="font-semibold">Obtain multiple quotes:</p>
            <p>
              To get a clear idea of the prices in the market and have options
              to compare, it would be beneficial to contact several solar
              installation companies and ask for quotes based on the size and
              specifications of the system you are considering.
            </p>
          </div>
          <div className="flex flex-row mt-8 sm:ml-6 md:-ml-20 xl2:ml-20">
            <div className="ml-44 md:ml-28 s:ml-5">
              <img src={fifthLogo} className="md:w-[100px] s:w-[80px]" alt="" />
            </div>

            <div className="md:max-w-[550px] s:max-w-[250px] md:mt-12 s:mt-6 m:mt-8 ml-[-40px]">
              <img src={thirdImage} alt="" />
            </div>

            <div className="md:mt-[350px] s:mt-[145px] m:mt-[] ml-[-40px] s:mr-2 md:mr-0">
              <img
                alt=" "
                src={sixthLogo}
                className="md:w-[100px] s:w-[80px]"
              />
            </div>
          </div>
          <div className="pl-4 md:pt-24 s:pt-12">
            <p className="font-semibold">Assess system components:</p>
            <p>
              When thinking about solar panels, inverters, mounting structures,
              and other parts of a solar system, it's important to consider
              their quality and efficiency. While higher-quality components may
              be more expensive at the beginning, they can provide better
              performance and durability, resulting in long-term savings.
            </p>
          </div>
          <div className="flex flex-row mt-8 sm:ml-8 md:-ml-20 xl2:ml-20">
            <div className="ml-56 md:ml-[150px] s:ml-5">
              <img
                src={seventhLogo}
                className="md:w-[100px] s:w-[80px]"
                alt=""
              />
            </div>

            <div className="md:max-w-[450px] s:max-w-[250px] md:mt-12 s:mt-6 m:mt-8 ml-[-40px]">
              <img src={fourthImage} alt="" />
            </div>

            <div className="md:mt-[280px] s:mt-[140px] ml-[-40px] s:mr-2 md:mr-0">
              <img
                alt=" "
                src={eigthLogo}
                className="md:w-[100px] s:w-[80px]"
              />
            </div>
          </div>
          <div className="pl-4 md:pt-24 s:pt-12">
            <p className="font-semibold">Factor in installation costs:</p>
            <p>
              The expenses for installing something include the cost of labor,
              permits, electrical tasks, and any required improvements to the
              electrical system. The total amount can differ based on how
              complicated the installation is, where it's being done, and the
              regulations in that area.
            </p>
          </div>
          <div className="pl-4 pt-12">
            <p className="font-semibold">
              Consider maintenance and warranties:
            </p>
            <p>
              Consider the ongoing expenses related to maintaining and
              guaranteeing the system. Make sure the installation company offers
              extensive warranties and talk about the anticipated maintenance
              needs to plan for potential costs down the line.
            </p>
          </div>
          <div className="pl-4 pt-12">
            <p className="font-semibold">
              Explore available incentives and rebates:
            </p>
            <p>
              Explore the various incentives and rebates provided by government
              organizations, local municipalities, and utility companies. These
              can greatly lower the initial expenses of installing solar panels
              and enhance the financial viability of the project.
            </p>
          </div>
          <div className="pl-4 pt-12">
            <p className="font-semibold">Financing options:</p>
            <p>
              Take a look at the different ways you can finance your solar
              project, such as loans, leases, power purchase agreements (PPAs),
              or solar incentives like net metering. Make sure to consider the
              details of each option, like the terms, interest rates, repayment
              periods, and overall financial impact.
            </p>
          </div>
          <div className="pl-4 pt-12">
            <p className="font-semibold">
              Assess long-term financial benefits:
            </p>
            <p>
              You can figure out how much money you could save and earn by
              installing solar panels in the long run. This includes the money
              you'll save on electricity and the potential income you could make
              from selling excess energy back to the grid. To see if it's worth
              it, consider how long it will take to recoup your initial
              investment and what kind of return you can expect.
            </p>
          </div>

          <div className="pl-4 pt-12">
            <p className="font-semibold">Account for ongoing expenses:</p>
            <p>
              Solar systems don't require much money to maintain, but it's still
              necessary to set aside some funds for regular upkeep, cleaning,
              and occasional repairs. These costs are usually quite small
              compared to the amount of money you can save on energy, but it's
              still important to keep them in mind.
            </p>
          </div>
          <div className="flex flex-row mt-8 sm:ml-8 md:-ml-20 xl2:ml-20">
            <div className="ml-56 md:ml-[150px] s:ml-5">
              <img src={ninthLogo} className="md:w-[100px] s:w-[80px]" alt="" />
            </div>

            <div className="md:max-w-[450px] s:max-w-[250px] md:mt-12 s:mt-6 m:mt-8 ml-[-40px]">
              <img src={fifthImage} alt="" />
            </div>

            <div className="md:mt-[280px] s:mt-[140px] ml-[-40px] s:mr-2 md:mr-0">
              <img
                alt=" "
                src={tenthLogo}
                className="md:w-[100px] s:w-[80px]"
              />
            </div>
          </div>
          <div className="pl-4 md:pt-24 s:pt-12">
            <p className="font-semibold">Consult with solar experts:</p>
            <p>
              If you require assistance, consider consulting solar energy
              experts or financial advisors who have expertise in renewable
              energy ventures. They can offer useful guidance and support to
              assist you in making well-informed choices.
            </p>
          </div>
          <div className="pl-4 pt-12">
            <p className="mb-10">
              To determine a practical budget for your solar installation
              project, it is important to take into account these factors and
              adopt a step-by-step approach. Keep in mind the importance of
              prioritizing quality and long-term advantages, and ensure that
              your budget aligns with your energy requirements and financial
              goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
