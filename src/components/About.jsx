import { useEffect, useState } from "react";
import desk from "../assets/desk.svg";
import shape from "../assets/shape3.svg";

function About(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "OUR COMPANY",
      headline: "Some Fine Words About Us",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet. Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      title: "OUR COMPANY",
      headline: "Some Fine Words About Us",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet. Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      title: "OUR COMPANY",
      headline: "Some Fine Words About Us",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet. Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
  ];

  const prevSlide = () => {
    const index = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  useEffect(()=>{
    const intervel=setInterval(()=>{
      nextSlide();
    },2000)
    return ()=>clearInterval(intervel)
  },[currentIndex])
  return (
    <div id="About us." className="flex flex-col lg:flex-row justify-between lg:items-center items-end font-work-sans overflow-visible relative gap-16 ">
      <div>
        <img src={desk} className="w-full h-full lg:-ml-24" alt="Desk" />
      </div>
      <div className="relative overflow-hidden w-3/5 max-w-4xl mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full box-border p-5">
              <div className="flex flex-col justify-between items-start w-full gap-5">
                <div className="xl:text-xl lg:text-lg text-base font-bold text-custom-red">
                  {item.title}
                </div>
                <div className={`xl:text-6xl lg:text-4xl text-2xl font-semibold ${props.dark?"text-purple-300":"text-custom-blue"} leading-normal`}>
                  {item.headline}
                </div>
                <div className={`xl:text-lg lg:text-base ${props.dark?"text-purple-300":"text-custom-blue"} font-semibold leading-relaxed`}>
                  {item.text}
                </div>
                <div className="flex justify-between items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-5 text-gray-400 hover:scale-150 cursor-pointer transition-all duration-500"
                    onClick={prevSlide}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${props.dark?"text-purple-300":"text-custom-blue"} hover:scale-150 cursor-pointer transition-all duration-500`}
                    onClick={nextSlide}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src={shape} className="absolute -z-20 -top-16 -right-64" alt="Shape" />
      </div>
    </div>
  );
}

export default About;
