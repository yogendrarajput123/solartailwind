import React from "react";

function Practice()

{
    return(

        // lg:ml-5 lg:text-sm md:text-xs md:ml-2
        // flex gap-x-3 lg:mr-3 md:mr-1
        <div className="flex flex-wrap md:flex-nowrap ">
            <div className="bg-red-400 p-4 w-[550px] h-44 flex self-end">
                   
                <div className="flex s:flex-wrap">                  
                     <div className="bg-green-400 flex s:flex-wrap p-4 w-[150px] h-24 ">

                        <div className="bg-black p-4 w-[75px] h-10 ">

                        </div>

                        <div className="bg-green-500 p-4 w-[75px] h-10">

                        </div>

                    </div>

                    <div className="bg-white p-4 w-[150px] h-24 pl-10">

                    </div>
               </div>
               
            </div>
            <div className="bg-green-400 p-4 w-[506px] h-44">

            </div>
            <div className="bg-blue-400 p-4 w-[506px] h-44">

            </div>

        </div>
    )
}

export default Practice;