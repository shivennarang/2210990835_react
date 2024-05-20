import graphic from "../assets/graphic.svg";
import android from "../assets/android.svg";
import shape from "../assets/shape2.svg";

function Info(props) {
  const data = [
    {
      img: graphic,
      heading: "Web & Graphic Design",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui- Nulla porttitor ac- cumsan tincidunt.",
    },
    {
      img: android,
      heading: "Web & App Development",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui- Nulla porttitor ac- cumsan tincidunt.",
    },
  ];
  return (
    <div className="lg:flex flex-col xl:flex-row justify-center  xl:justify-between font-work-sans relative ">
      <div className="lg:flex flex flex-col xl:justify-around xl:items-start items-center justify-center xl:w-1/2  w-full gap-10">
        <div className={`xl:text-6xl text-2xl lg:text-4xl xl:leading-normal text-center xl:text-left font-work-sans font-extrabold xl:font-semibold ${props.dark?"text-purple-300":"text-custom-blue"} lg:w-1/2 w-full xl:w-full`}>
          Anything you need,we've got you covered
        </div>
        <button className="p-3 xl:w-1/2 lg:w-1/5 rounded-3xl bg-custom-red text-white font-bold xl:font-semibold  xl:mx-0">
          Get in Touch
        </button>
      </div>
      <div className="flex justify-between flex-col lg:flex-row mx-auto xl:mx-0 items-center p-5 gap-5 lg:gap-10  w-2/3 ">
        {data.map((data,index) => {
          return (
            <div key={index} className=" flex flex-col  justify-start  items-start w-full lg:w-2/3 xl:w-1/2 gap-5 mt-24 border-2 border-gray-100 rounded-md p-10 lg:h-[300px] shadow-xl">
              <img src={data.img} className="w-1/4 h-1/4" />
              <div className={` xl:text-xl text-sm leading-normal font-semibold ${props.dark?"text-purple-300":"text-custom-blue"} w-full `}>
                {data.heading}
              </div>
              <div className={` xl:text-md text-xs font-semibold leading-normal ${props.dark?"text-purple-300":"text-custom-blue"}`}>
                {data.text}
              </div>
            </div>
          );
        })}
      </div>
      <img src={shape} className="absolute -top-5 -z-20  -left-52" />
    </div>
  );
}

export default Info;
