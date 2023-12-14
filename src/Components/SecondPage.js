import React from "react";
import orangelogo from "../Components/Logo/Orangelogo.png";
import bluelogo from "../Components/Logo/Bluelogo.png";
import Spanel from "../Components/Img/Spanel.png";
import Rangle from "../Components/Img/Rangle.png";
import Rmaterial from "../Components/Img/Rmaterial.png";
import Rage from "../Components/Img/Rage.png";
import Rpitch from "../Components/Img/Rpitch.png";
import Rshade from "../Components/Img/Rshade.png";
import Solpanel from "../Components/Img/Solpanel.png";

function SecondPage() {
  return (
    <div className=" outer-container flex  ">
      <div className="container xl2:ml-[370px] lg:ml-[300px] md:ml-[280px]  md:mb-24 s:mb-12 s:mt-10  md:mt-[-120px]">
        <div className=" content xl2:max-w-[980px] ">
          <p className="font-semibold md:text-4xl md:pt-5 md:pl-4 s:text-lg s:pt-3 s:pl-2 ">
            Solar Panel Installation
          </p>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Roof Types Suitable for Solar Panel Installation
            </p>
            <p className="md:pl-4 md:pt-6 s:pl-2 s:pt-4 s:text-xs md:text-lg">
              Discover the best roofs for installing solar panels, such as
              pitched roofs, flat roofs, and metal roofs. Gain insights into the
              factors to consider when choosing roof materials and their
              compatibility with solar panel mounting.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 ">
            <p className="font-semibold s:text-base md:text-xl">
              How to decide which Roof Type is Suitable for Solar Panel
              Installation?
            </p>
          </div>

          <div className="flex flex-row justify-center md:pt-5 s:mt-3  s:pt-5 m:pt-5  ">
            <div className=" md:w-[100px]  md:ml-4  md:mt-[10px] s:max-w-[90%] s:ml-3 s:mt-[-15px]">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center md:mt-14 md:ml-[-70px] s:mt-1 s:ml-[-15px]">
              <img
                className="md:max-w-[600px] lg:max-w-[700px] s:max-w-[100%]   items-center"
                src={Spanel}
                alt=""
              />
            </div>

            <div className=" md:w-[100px] md:mt-[345px] lg:mt-[415px] md:ml-[-65px] s:max-w-[90%] s:mt-[140px] sm:mt-[180px] m:mt-[160px] s:mr-[10px] s:ml-[-15px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Roof Orientation and Angle:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  South-facing roofs generally receive the most sunlight
                  throughout the day and are considered ideal for solar panel
                  installation.
                </li>
                <li>
                  East and west-facing roofs can also be suitable, although they
                  may produce slightly less energy compared to south-facing
                  roofs.
                </li>
                <li>
                  North-facing roofs are generally less desirable due to limited
                  sunlight exposure.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Rangle} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Roof Material:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  Different roofing materials have varying degrees of
                  suitability for solar panel installation.
                </li>
                <li>
                  Asphalt shingles, metal roofs, and concrete tiles are commonly
                  used and can easily accommodate solar panels.
                </li>
                <li>
                  Clay or slate tiles may require additional precautions during
                  installation to ensure proper sealing and stability.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Rmaterial} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Roof Age and Condition:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  Consider the age and condition of your roof before installing
                  solar panels.
                </li>
                <li>
                  If your roof is nearing the end of its lifespan, it may be
                  advisable to replace it before installing solar panels to
                  avoid future complications.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Rage} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Roof Shape and Pitch:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  The shape and pitch of your roof can impact solar panel
                  installation.
                </li>
                <li>
                  A roof with a simple, unobstructed shape and a moderate pitch
                  is generally easier to work with.
                </li>

                <li>
                  Steeply pitched roofs may require additional mounting
                  equipment and careful installation techniques.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Rpitch} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Shade and Obstructions:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  Assess the amount of shade your roof receives throughout the
                  day.
                </li>
                <li>
                  Trees, neighboring buildings, or other obstructions can
                  significantly reduce solar panel efficiency.
                </li>

                <li>
                  Ideally, the roof should have minimal shading to maximize
                  sunlight exposure.
                </li>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Rshade} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Structural Integrity:
            </p>
            <p>
              <ul className="list-disc md:ml-9 s:ml-6 s:text-xs md:text-lg">
                <li>
                  Ensure that your roof has sufficient structural integrity to
                  support the weight of solar panels.
                </li>
                <li>
                  Consult with a structural engineer or a qualified solar
                  installer to assess the load-bearing capacity of your roof.
                </li>

                <p>
                  Remember, it is essential to consult with a professional solar
                  installer who can evaluate your specific roof type and provide
                  customized recommendations. They will consider factors such as
                  roof orientation, material, condition, and other site-specific
                  variables to determine the most suitable approach for
                  installing solar panels on your roof.
                </p>
              </ul>
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-4 m:mt-4 justify-center md:mr-20 s:mr-3">
            <div className="md:ml-28 s:ml-14 sm:ml-20 m:ml-20">
              <img
                src={orangelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[400px]  s:max-w-[200px]  md:mt-12 s:mt-5 m:mt-5 md:ml-[-40px] s:ml-[-40px] m:ml-[-70px] sm:ml-[-110px]">
              <img src={Solpanel} alt="" />
            </div>

            <div className="md:mt-[250px]  s:mt-[130px] m:mt-[125px] sm:mt-[125px] md:ml-[-37px] s:ml-[-17px] m:ml-[-17px] sm:ml-[-14px] ">
              <img
                src={bluelogo}
                className="md:w-[100px] s:w-[60%] m:w-[40%] sm:w-[30%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
