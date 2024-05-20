import React, { useState } from "react";

function Navbar(props) {
  const data = ["Home.", "About us.", "Portfolio.", "Contact us."];
  


  return (
    <div>
    <div className={`lg:flex justify-between :items-center mt-8 font-work-sans ${props.dark?"text-purple-300":"text-custom-blue"} relative z-10  hidden`}>
      <div className="flex justify-start items-center gap-10 font-semibold text-lg">
        {data.map((item, index) => (
          <a href={`#${item}`}><div
            key={index}
            className="group cursor-pointer relative transition-all duration-500"
          >
            {item}
            <div className="absolute bottom-0 left-0 w-full bg-custom-red h-1 rounded-3xl hidden group-hover:block hover:transition-all hover:duration-500"></div>
          </div></a>
        ))}
      </div>
      <div className="flex justify-start items-center gap-10 text-lg font-semibold">
        <div className="flex justify-around items-center cursor-pointer group">
          <p>EN</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-y-1 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <button className="flex justify-around items-center drop-shadow-xl shadow-xl border-2 border-gray-100 p-4 rounded-md text-custom-red hover:border-3 hover:border-custom-blue transition-all duration-300">
          <p>Contact Us</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        <button onClick={()=>props.setDark(()=>!props.dark)}>{
          props.dark?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>)
:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>)
      
          }</button>
      </div>
      <div className="absolute top-0 xl:-left-28 lg:-left-24 mx-auto">
        <div className={`text-xl  font-bold ${props.dark?"text-purple-300":"text-custom-blue"}`}>DOOB</div>
        <div className="bg-custom-red w-1/2 mx-auto h-2"></div>
      </div>
    </div>

    <div className={`flex justify-between items-center mt-8 relative z-10 lg:hidden ${props.dark?"text-purple-300":"text-custom-blue"} p-1`}>
    <div className="flex flex-col justify-center items-center">
        <div className={`text-xl  font-bold ${props.dark?"text-purple-300":"text-custom-blue"}`}>DOOB</div>
        <div className="bg-custom-red w-1/2 mx-auto h-2"></div>
    </div>
    
    <button onClick={() => props.setDark(!props.dark)}>
  {props.dark ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )}
</button>
<div className="group">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>


  <div className={`flex flex-col justify-start items-center gap-10 font-semibold text-lg absolute top-0 right-0 translate-x-[500%] group-hover:translate-x-0 ${props.dark?"bg-indigo-950 text-purple-300":"bg-black"} w-2/5 p-5 transition-all duration-700 rounded-lg text-white  shadow-2xl`}>
  {data.map((item, index) => (
          <a href={`#${item}`}><div
            key={index}
            className="group cursor-pointer relative transition-all duration-500"
          >
            {item}
            <div className="absolute bottom-0 left-0 w-full bg-custom-red h-1 rounded-3xl hidden group-hover:block hover:transition-all hover:duration-500"></div>
          </div></a>
        ))}
      </div>
</div>
    </div>
    </div>
  );
}

export default Navbar;
