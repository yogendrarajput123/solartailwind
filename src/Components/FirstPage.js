import orangelogo from "../Components/Logo/Orangelogo.png";
import bluelogo from "../Components/Logo/Bluelogo.png";
import Home from "../Components/Img/Home.png";
import Msme from "../Components/Img/Msme.png";
import Building from "../Components/Img/Building.png";
import Public from "../Components/Img/Public.png";
import Factory from "../Components/Img/Factory.png";
import Positive from "../Components/Img/Positive.png";

export default function FirstPage() {
  return (
    <div className=" outer-container flex  m-2">
      <div className="container xl2:ml-[370px] lg:ml-[300px] md:ml-[280px]  md:mb-24 s:mb-12 s:mt-10 md:mt-[-120px]">
        <div className="content xl2:max-w-[980px]">
          <p className="font-semibold md:text-4xl md:pt-5 md:pl-4 s:text-lg s:pt-3 s:pl-2 ">
            All About Solar Power
          </p>
          <p className="md:pl-4 md:pt-6 s:pl-2 s:pt-4 s:text-xs md:text-lg">
            Solar energy is a type of clean energy that comes from the sun. It
            is renewable and abundant, which means there is plenty of it
            available. Using solar energy has a lot of advantages, such as
            helping the environment, saving money, and giving us independence in
            terms of energy.
          </p>
          <p className="md:pl-4 md:pt-6 s:pl-2 s:pt-4 md:text-xl s:text-lg font-semibold ">
            Why Choose Solar Power?
          </p>

          <div className="flex flex-row justify-center md:pt-16 s:mt-5 s:mr-5  s:pt-1 ">
            <div className=" md:w-[100px]  md:ml-4  md:mt-[10px] s:w-[100%] s:ml-5">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center md:mt-14 md:ml-[-50px]  ">
              <img
                className="md:max-w-[700px] s:max-w-[70%]   items-center"
                src={Home}
                alt=""
              />
            </div>

            <div className=" md:w-[100px] md:mt-[415px] md:ml-[-35px] s:w-[100%] s:mt-[100px] s:ml-[-45px] ">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Clean and Renewable:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar energy is a clean and renewable source, which helps reduce
              our reliance on fossil fuels and decrease greenhouse gas
              emissions. This not only benefits the environment but also
              promotes a cleaner and healthier world.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Cost Savings:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Using solar energy can lead to significant cost savings on
              electricity bills in the long run. This makes it a wise investment
              for both individuals and businesses, as it not only reduces
              expenses but also contributes to a sustainable future.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Independence:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              With solar energy, users can achieve energy independence by
              generating their own electricity. This reduces dependence on the
              grid and allows individuals and businesses to have more control
              over their energy consumption, giving them the freedom to make
              sustainable choices.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Low Maintenance:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar panels are low maintenance and have a long lifespan,
              providing a reliable and hassle-free energy solution. This means
              that once installed, they require minimal upkeep, allowing users
              to enjoy the benefits of solar energy without any additional
              stress or effort.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 ">
            <p className="font-semibold s:text-base md:text-xl">
              Incentives and Rebates{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Moreover, there are incentives, tax credits, and rebates offered
              by governments and utilities to encourage the adoption of solar
              energy. These financial incentives make solar energy even more
              attractive, both economically and environmentally, making it a
              smart financial investment for anyone considering going solar.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <div className=" md:pb-6 s:pb-4 md:text-xl font-semibold s:text-base  ">
              Understanding the Basics of Solar Power
            </div>
            <p className="s:text-xs md:text-lg">
              Photovoltaic (PV) technology enables solar panels to convert
              sunlight into electricity by utilizing special semiconductor
              materials. On the other hand, solar thermal systems utilize the
              heat from the sun to produce hot water or generate steam for a
              wide range of applications.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Who Benefits from Solar Energy?
            </p>
          </div>

          <div className="flex flex-row justify-center md:pt-16 s:mt-5 s:mr-5  s:pt-1 ">
            <div className=" md:w-[100px]  md:ml-4  md:mt-[10px] s:w-[100%] s:ml-5">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center md:mt-14 md:ml-[-50px]  ">
              <img
                className="md:max-w-[700px] s:max-w-[70%]   items-center"
                src={Msme}
                alt=""
              />
            </div>

            <div className=" md:w-[100px] md:mt-[415px] md:ml-[-35px] s:w-[100%] s:mt-[100px] s:ml-[-45px] ">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Cost Savings:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar energy helps MSMEs reduce their operational expenses by
              lowering electricity bills.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Security:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              MSMEs can become self-sufficient in terms of energy supply and
              reduce the impact of power outages.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Enhanced Reputation:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Embracing solar energy showcases a commitment to sustainability
              and can attract environmentally conscious customers.
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-5 justify-center">
            <div className="md:ml-28 s:ml-20 ">
              <img
                src={orangelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[290px] md:mt-12 md:ml-[-40px]  s:max-w-[150px] s:ml-[-50px] ">
              <img src={Building} alt="" />
            </div>

            <div className="md:mt-[310px] md:ml-[-40px] s:mt-[140px] s:ml-[-10px]">
              <img
                src={bluelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold md:text-2xl s:text-lg">Enterprises:</p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Sustainability Goals:
            </p>
            <p className="s:text-xs md:text-lg">
              Solar energy enables enterprises to meet sustainability targets,
              reduce carbon footprints, and align with green initiatives.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Financial Benefits:
            </p>
            <p className="s:text-xs md:text-lg">
              Lower energy costs contribute to increased profitability and a
              positive return on investment.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Resilience:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar power provides a reliable energy source, reducing
              vulnerability to grid disruptions and price fluctuations.
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-5 justify-center">
            <div className="md:ml-28 s:ml-20 ">
              <img
                src={orangelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[290px] md:mt-12 md:ml-[-40px]  s:max-w-[150px] s:ml-[-50px] ">
              <img src={Public} alt="" />
            </div>

            <div className="md:mt-[310px] md:ml-[-40px] s:mt-[140px] s:ml-[-10px]">
              <img
                src={bluelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold md:text-2xl s:text-lg">Citizens:</p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Reduced Electricity Bills:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Installing solar panels helps citizens save money on their monthly
              electricity bills.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 s:text-base md:block">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Independence:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Citizens can become more self-reliant by generating their own
              clean energy and reducing reliance on the grid.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 ">
            <p className="font-semibold s:text-base md:text-xl">
              Environmental Impact:
            </p>
            <p className="s:text-xs md:text-lg">
              Using solar energy helps individuals reduce their carbon footprint
              and contribute to a cleaner environment.
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-5 justify-center">
            <div className="md:ml-28 s:ml-20 ">
              <img
                src={orangelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[290px] md:mt-12 md:ml-[-40px]  s:max-w-[150px] s:ml-[-50px] ">
              <img src={Factory} alt="" />
            </div>

            <div className="md:mt-[310px] md:ml-[-40px] s:mt-[140px] s:ml-[-10px]">
              <img
                src={bluelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold md:text-2xl s:text-lg">Industry:</p>
          </div>

          <div className="md:pl-4 md:pt-24 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Sustainable Manufacturing:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar energy enables industries to power their manufacturing
              processes with clean energy, reducing environmental impact.
            </p>
          </div>

          <div className="md:pl-4 md:pt-24 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Efficiency:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Implementing solar technologies can enhance energy efficiency in
              industrial operations, leading to cost savings.
            </p>
          </div>

          <div className="md:pl-4 md:pt-24 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Regulatory Compliance:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Adopting solar energy helps industries comply with environmental
              regulations and demonstrate corporate social responsibility.
            </p>
          </div>

          <div className="flex flex-row md:mt-8 s:mt-5 justify-center">
            <div className="md:ml-28 s:ml-20 ">
              <img
                src={orangelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>

            <div className="md:max-w-[290px] md:mt-12 md:ml-[-40px]  s:max-w-[150px] s:ml-[-50px] ">
              <img src={Positive} alt="" />
            </div>

            <div className="md:mt-[310px] md:ml-[-40px] s:mt-[140px] s:ml-[-10px]">
              <img
                src={bluelogo}
                className="md:max-w-[100px] s:max-w-[40%]"
                alt=""
              />
            </div>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold md:text-2xl s:text-lg">
              Is Solar Energy a Worthwhile Investment?
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Long-term Cost Savings:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar power offers a steady and foreseeable supply of electricity,
              lessening dependence on fluctuating energy costs.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Environmental Stewardship:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Investing in solar power allows both individuals and businesses to
              play a part in creating a more sustainable and
              environmentally-friendly future.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:text-xl">
              Energy Independence:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Solar installations offer energy self-sufficiency and protection
              against rising energy costs and power outages.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5 ">
            <p className="font-semibold s:text-base md:text-xl">
              Financial Incentives:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Government incentives, tax credits, and net metering programs can
              significantly offset the initial investment in solar.
            </p>
          </div>

          <div className="md:pl-4 md:pt-10 s:pl-2 s:pt-5">
            <p className="font-semibold s:text-base md:block">
              Future-Proofing:{" "}
            </p>
            <p className="s:text-xs md:text-lg">
              Investing in solar energy ensures resilience in the face of
              potential energy supply challenges and evolving energy landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
