import orangelogo from "../Components/Logo/Orangelogo.png";
import bluelogo from "../Components/Logo/Bluelogo.png";
import Bifapanel from "../Components/Img/Bifapanel.png";
import BuildIntepanel from "../Components/Img/BuildIntepanel.png";
import Inventerpanel from "../Components/Img/Inventerpanel.png";
import Micropanel from "../Components/Img/Micropanel.png";
import Monopanel from "../Components/Img/Monopanel.png";
import Polypanel from "../Components/Img/Polypanel.png";
import Rintegrity from "../Components/Img/Rintegrity.png";
import Shinglespanel from "../Components/Img/Shinglespanel.png";
import Solarinventpanel from "../Components/Img/Solarinventpanel.png";
import Thinpanel from "../Components/Img/Thinpanel.png";

export default function ThirdPage() {
  return (
    <div className=" outer-container flex  ">
      <div className="container xl2:ml-[370px] lg:ml-[300px] md:ml-[280px]  md:mb-24 s:mb-12 s:mt-10  md:mt-[-120px]">
        <div className="content xl2:max-w-[980px]    ">
          <p className="font-semibold md:text-4xl md:pt-5 md:pl-4 s:text-lg s:pt-3 s:pl-2 ">
            Exploring Different Types of Solar Panels
          </p>

          <p className="md:pl-4 md:pt-6 s:pl-2 s:pt-4 s:text-xs md:text-lg ">
            If you're interested in using solar energy, there are several
            different types of solar panels to choose from. Each type has its
            own special features and advantages. Let's explore the most commonly
            used solar panels in the industry today.
          </p>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 ">
            <p className="font-semibold md:text-4xl md:pt-5 md:pl-4 s:text-lg s:pt-3 s:pl-2 ">
              How to decide which Roof Type is Suitable for Solar Panel
              Installation?
            </p>
          </div>

          <div className="flex flex-row justify-center md:pt-5 s:mt-3  s:pt-5 m:pt-5  ">
            <div className=" md:w-[100px]  md:ml-4  md:mt-[10px] s:w-[90%] m:w-[80%] sm:w-[70%] s:ml-3 s:mt-[-15px]">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center md:mt-14 md:ml-[-70px] s:mt-1 s:ml-[-15px]">
              <img
                className="md:max-w-[600px] lg:max-w-[700px] s:max-w-[100%]   items-center"
                src={Rintegrity}
                alt=""
              />
            </div>

            <div className=" md:w-[100px] md:mt-[345px] lg:mt-[415px] md:ml-[-65px] s:w-[90%]  m:w-[80%] sm:w-[70%] s:mt-[140px] sm:mt-[180px] m:mt-[160px] s:mr-[10px] s:ml-[-15px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Monocrystalline Solar Panels{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Monocrystalline solar panels are created using a solitary crystal
              structure, usually made of silicon. These panels are recognized
              for their impressive efficiency and stylish black look.
              Monocrystalline panels work effectively in direct sunlight and are
              a favored option for both homes and businesses.
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
              <img src={Monopanel} alt="" />
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
              Polycrystalline Solar Panels{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Polycrystalline solar panels are created by combining multiple
              pieces of silicon, which gives them a textured, blue-speckled
              look. Although they are not as efficient as monocrystalline
              panels, they provide a cost-effective solution for solar
              installations. Polycrystalline panels are versatile and work
              effectively in different weather conditions.
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
              <img src={Polypanel} alt="" />
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
              Thin-Film Solar Panels{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Thin-film solar panels are light and flexible, making them perfect
              for a variety of uses. They are created by placing a thin layer of
              semiconductor material onto a base. While thin-film panels are not
              as efficient as traditional ones, they can still be used in
              situations where regular panels are not suitable, such as curved
              surfaces or portable solar devices.
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
              <img src={Thinpanel} alt="" />
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
              Bifacial Solar Panels{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Bifacial solar panels are designed to capture sunlight from both
              sides, which helps to maximize their energy generation. These
              panels can harness direct sunlight from above and also utilize the
              reflected light from the ground, making them more efficient
              overall. Typically, bifacial panels are installed on elevated
              structures or in areas where there is a high level of
              reflectivity.
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
              <img src={Bifapanel} alt="" />
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
              Solar Shingles{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar shingles, or solar roof tiles, seamlessly blend in with
              regular roofing materials, offering both protection for the roof
              and the ability to generate electricity. They are a visually
              appealing choice for homeowners who prioritize both functionality
              and design.
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
              <img src={Shinglespanel} alt="" />
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
              Building-Integrated Photovoltaics (BIPV){" "}
            </p>
            <p className="s:text-xs md:text-lg">
              BIPV stands for Building Integrated Photovoltaics, which means
              incorporating solar panels into building materials like windows,
              facades, or walls. Instead of regular building components, these
              panels serve as a renewable energy source. BIPV combines
              functionality and sustainable design, enabling structures to
              produce electricity without compromising their architectural
              integrity.
            </p>

            <p className="s:text-xs md:text-lg">
              Knowing the various kinds of solar panels allows people and
              companies to make well-informed choices when switching to solar
              power. Whether you prefer the excellent efficiency of
              monocrystalline panels, the affordability of polycrystalline
              panels, or the flexibility of thin-film panels, there's a solar
              option for everyone. Discover the potential and embrace the
              benefits of solar energy.
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
              <img src={BuildIntepanel} alt="" />
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
              Solar Inverters: Powering Your Solar PV System{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar inverters are essential for capturing solar energy and
              transforming it into usable electricity. They serve as the core
              component of a solar photovoltaic (PV) system, guaranteeing
              efficient operation and maximum power generation. Now, let's delve
              into the main features of solar inverters and their importance in
              the realm of solar energy.
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
              <img src={Solarinventpanel} alt="" />
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
              Role of Solar Inverters in a Solar PV System:
            </p>
            <p className="s:text-xs md:text-lg">
              Solar inverters play a crucial role in a solar PV system by
              converting the DC electricity generated by solar panels into AC
              electricity that can be used to power appliances and feed into the
              electrical grid. They act as the middleman between the solar
              panels and electrical devices, ensuring smooth compatibility and
              efficient energy transfer.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Types of Solar Inverters:
            </p>
            <p className="s:text-xs md:text-lg">
              There are various kinds of solar inverters to choose from, each
              with their own set of distinct advantages and characteristics. The
              three primary types are string inverters, microinverters, and
              power optimizers.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              String Inverters:
            </p>
            <p className="s:text-xs md:text-lg">
              String inverters are frequently utilized in solar photovoltaic
              (PV) systems. They are linked to a group of solar panels, called a
              string, and transform the collective DC electricity into AC
              electricity. String inverters are affordable and well-suited for
              installations with consistent panel alignment and limited shading.
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
              <img src={Inventerpanel} alt="" />
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
              Microinverters{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Each solar panel is equipped with microinverters, which enable
              independent power conversion. This design boosts system
              performance, particularly in installations with shading or panel
              mismatch. Additionally, microinverters provide advanced monitoring
              features, allowing for tracking of individual panel performance.
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
              <img src={Micropanel} alt="" />
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
              Power Optimizers{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Power optimizers are used alongside string inverters to enhance
              the performance of solar panels. These optimizers are connected to
              each panel and work by maximizing the power output, ensuring that
              the panels generate the most energy possible, even if they are
              shaded or positioned unevenly. By providing monitoring at the
              panel level, power optimizers improve the overall efficiency and
              performance of the solar system.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Monitoring and Troubleshooting Solar Inverters:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Monitoring solar inverters regularly is important to ensure the
              best performance of the system. Many inverters have monitoring
              systems built-in, which give users real-time information on energy
              production. This allows users to keep track of their system's
              performance and quickly address any problems. Troubleshooting
              techniques can be used to identify and fix any faults or
              malfunctions, ensuring that the solar PV system operates smoothly.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Inverter Efficiency and Power Output:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              When selecting a solar inverter, it's important to consider its
              efficiency. Inverters with higher efficiency can convert a larger
              portion of DC electricity into usable AC electricity, which leads
              to improved overall system efficiency. The efficiency of the
              inverter directly affects the power output of the solar PV system
              and has an impact on the energy yield and financial returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
