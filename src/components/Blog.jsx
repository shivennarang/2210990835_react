
import shape from '../assets/shape5.svg'
function Blog(props) {
  const data=[{heading:'New Adventure',date:'17 March 2019',text:'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor ac- cumsan tincidunt.'},{heading:'New Adventure',date:'17 March 2019',text:'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor ac- cumsan tincidunt.'},{heading:'New Adventure',date:'17 March 2019',text:'Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor ac- cumsan tincidunt.'}]
  return (
    <div id='Blog.' className="flex flex-col gap-10 font-work-sans relative">
      <div className="text-xl text-center lg:text-left text-custom-red font-bold p-1">BLOG STORIES</div>
      <div className="flex justify-between items-center">
        <div className={`xl:text-5xl ${props.dark?"text-purple-300":"text-custom-blue"} font-bold p-1`}>Check Our News</div>
        <div className="flex justify-center items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-5 text-gray-400"
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
            className={`w-6 h-6 ${props.dark?"text-purple-300":"text-custom-blue"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-16">
        {
          data.map((data,index)=>{
            return(
              <div key={index} className={`lg:w-1/3 w-full flex flex-col gap-5   p-10 ${index===0?"bg-custom-red text-white":"bg-transparent border-2 border-gray-200 shadow-xl"} ${props.dark?"text-purple-300":"text-custom-blue"}`}>
          <div>
            <div className="lg:text-lg  text-base font-semibold">{data.heading}</div>
            <div className=" font-light">{data.date}</div>
          </div>
          <div className="lg:text-lg text-base font-normal">
            {data.text}
          </div>
          <div className="flex w-full justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${index===0?"text-white":"text-custom-blue"} ${props.dark?"text-purple-300":"text-custom-blue"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
          </div>
        </div>
            )
          })
        }

        

      
      </div>
      <img src={shape} className='absolute top-32 -right-64 -z-20'/>
    </div>
  );
}

export default Blog;
