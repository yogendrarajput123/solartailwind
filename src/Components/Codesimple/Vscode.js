import React from "react";
import Vector from './images/Vector.png'
import linker from './images/linker.png'
import right from './images/right.png'
import github from './images/github.png'
import person from './images/person.png'
import notification from './images/notification.png'
import drop from './images/drop.png'
import Group from './images/Group.png'
import link from './images/link.png'
import  share from './images/share.png'

function Vscode() {

    <style>

    </style>

     return(
         
        <div className="main flex  bg-[#2A2F46]">
            <div className="sidebar bg-[#2A2F46] h-screen">
            <ul className="flex flex-col p-3 gap-y-8 mt-24 ">
                <li>
                <img src={Vector} alt="" className="w-[20px] h-[24px]" />
                </li>
                <li>
                <img src={linker} alt="" className="w-[20px] h-[20px]" />
                </li>
                <li>
                <img src={right} alt="" className="w-[20px] h-[20px]" />
                </li>
                <li>
                <img src={github} alt="" className="w-[20px] h-[20px]" />
                </li>
            </ul>
            </div>
                 
            <div className="Left-Content w-full flex flex-col h-screen">


                <div className="navbar bg-[#2A2F46] flex justify-between h-[60px] flex-grow">
                    <div className="flex gap-x-8 items-center">
                      <img className="w-[21px] h-[14px]" src={Group} alt="" />
                      <p className="text-[#7D88AC]">Project Name</p>
                    </div>
                    <div className="flex gap-x-4 items-center justify-end mr-8">
                      <img className="w-[24px] h-[31px]" src={notification} alt="" />
                      <img className="w-[36px] h-[36px]" src={person} alt="" />
                      <img className="w-[10.5] h-[5.38px]" src={drop} alt="" />
                    </div>
                </div>



                <div className="Middle-Content flex h-screen">

                   <div className="First-Column bg-gradient-to-b from-[#0E0B1B] to-[#181C2B] w-[20%] rounded-tl-xl">

                   </div>

                   <div className="Second-Column flex flex-col bg-gradient-to-t from-[#24283F] to-[#131725] w-[55%]">

                        <div className=" bg-gradient-to-t from-[#24283F] to-[#131725] h-[112px]
                                         shadow-red shadow-lg">
                   

                        </div>

                        <div className="">
                        
                        </div>

                   </div>

                   <div className="Third-Column flex flex-col  w-[25%]">

                       <div className="bg-gradient-to-t from-[#131726] to-[#454E6B] h-[100%]">
                           
                       </div>

                       <div className="bg-gradient-to-b from-[#131726] to-[#363E56] h-[55px]
                                        text-[#8B93B1] flex items-center justify-between">

                           <p className="xl2:text-lg xl2:ml-6 lg:ml-2 md:ml-1 md:text-xs lg:text-sm">| Give design feedback</p>

                           <div className="flex gap-x-3 lg:mr-3 md:mr-1">

                              <img src={link} alt="" className="w-[15.45px] h-[16px]"></img>
                              <img src={share} alt="" className="w-[16px] h-[16px]"></img>

                           </div>    
                            
                           
                       </div>

                   </div>


                       
                </div>



                <div className="Footer bg-gradient-to-r from-[#BB9CFF] to-[#8F6CDD] w-full h-[29px]">

                </div>               

                

            </div>
        </div>
    )

}

export default Vscode;