import React from "react";
import firstImage from "./Images/firstImage.png";
import secondImage from "./Images/secondImage.png";
import firstLogo from "./Images/firstLogo.png";
import secondLogo from "./Images/secondLogo.png";

function FifthPage() {
  return (
    <div className="container flex">
      <div className="space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer md:block hidden">
        <div className="sidebar  bg-[#235688] justify-center space-y-3 pl-2 xl2:pl-8 top-0 pt-14 h-[100%] md:w-[260px] xl2:w-[340px] bg-fixed fixed">
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

      <div className="container md:ml-[260px] xl2:ml-[340px] s:ml-0">
        <div className=" content xl2:text-xl">
          <p className="font-semibold md:text-2xl lg:text-4xl s:text-2xl pt-5 pl-4 ">
            A Guide to Finding the Right Solar Installer
          </p>

          <div className="flex flex-row pt-16">
            <div className="flex justify-center mt-[-25px] md:ml-8 lg:ml-20 s:ml-5 m:ml-10 xl2:ml-28">
              <img
                className="items xl2:max-w-[840px] lg:max-w-[600px] md:max-w-[450px] 
                            m:max-w-[300px] sm:max-w-[340px] s:max-w-[280px]"
                src={firstImage}
                alt=""
              ></img>
            </div>
          </div>

          <div className="pl-4 md:pt-16 s:pt-12 ">
            <p className="font-semibold text-2xl">
              Qualities to Look for in a Solar Installer
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Experience:</p>
            <p>
              Look for installers with a proven track record and extensive
              experience in the solar industry.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Reputation:</p>
            <p>
              Check customer reviews and testimonials to gauge the installer's
              reputation for quality work and customer satisfaction.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Expertise:</p>
            <p>
              Ensure the installer has the necessary technical expertise to
              handle your specific solar project.
            </p>
          </div>

          <div className="flex flex-row mt-8">
            <div className="md:ml-14 s:ml-4 m:ml-12 sm:ml-16 lg:ml-32 xl2:ml-52">
              <img src={firstLogo} className="md:w-[100px] s:w-[70px]" alt="" />
            </div>

            <div
              className="md:max-w-[300px] s:max-w-[230px] md:mt-12 s:mt-7 md:ml-[-40px] s:ml-[-45px]
                            lg:max-w-[350px] xl2:max-w-[450px] "
            >
              <img src={secondImage} alt="" />
            </div>

            <div className="md:mt-[220px] s:mt-[150px] lg:mt-[240px] xl2:mt-[320px] ml-[-37px]">
              <img
                src={secondLogo}
                className="md:w-[100px] s:w-[70px]"
                alt=""
              />
            </div>
          </div>

          <div className="pl-4 md:pt-5 s:mt-14">
            <p className="font-semibold text-2xl">
              Evaluating Solar Installer Quotes and Proposals:
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="font-semibold">Compare multiple quotes:</p>
            <p>
              Obtain quotes from multiple installers to compare prices, system
              components, and installation services.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Consider the whole package:</p>
            <p>
              Look beyond the initial cost and assess the value provided,
              including equipment quality and installation expertise.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">
              Pay attention to system performance estimates:
            </p>
            <p>
              Evaluate the estimated energy production and payback period
              mentioned in the proposals.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-2xl">
              Checking Credentials and Certifications of Solar Installers:
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="font-semibold">NABCEP Certification:</p>
            <p>
              The North American Board of Certified Energy Practitioners
              (NABCEP) certification demonstrates the installer's competence in
              solar installation.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">State licenses and certifications:</p>
            <p>
              Ensure that the installer holds the necessary licenses and
              certifications required by your state or local authorities.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Industry affiliations:</p>
            <p>
              Look for affiliations with reputable industry organizations, such
              as the Solar Energy Industries Association (SEIA) or regional
              solar associations.
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="pb-10">
              Picking the correct solar vendor is essential for a prosperous
              solar installation. By taking into account these aspects, posing
              the appropriate inquiries, and verifying credentials, you can
              arrive at an educated conclusion and trust in the proficiency and
              dependability of your selected solar installer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
