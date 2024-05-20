import home from '../assets/home.svg';
import shape from '../assets/shape1.svg';
function Home(props) {
  return (
    <div id='Home.' className="xl:flex lg:flex lg:flex-row flex flex-col justify-center lg:justify-between items-center overflow-visible gap-10  font-work-sans relative">
      <div className="xl:flex lg:flex flex flex-col justify-center lg:justify-between items-center lg:items-start  gap-8 ">
        <div className={` xl:text-7xl lg:text-5xl text-4xl font-extrabold lg:font-semibold ${props.dark?"text-purple-300":"text-custom-blue"} leading-normal lg:leading-normal`}>The Spirit of Digital Agency.</div>
        <div className='text-lg font-normal lg:font-medium text-gray-400 leading-normal font-work-sans text-center lg:text-left w-1/2 lg:w-full'>
          Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
          Nulla porttitor accumsan tincidunt.
        </div>
        <div className="xl:flex lg:flex flex lg:justify-between justify-center gap-5 w-full items-center">
          <button className='p-3 lg:w-10/12 w-4/5 rounded-3xl bg-custom-red text-white  font-bold lg:font-semibold'>More About Us</button>
          <button className={`p-3 lg:w-10/12 w-4/5 rounded-3xl border border-transparent ${props.dark?"text-purple-300":"text-custom-blue"}  font-bold lg:font-semibold hover:border-3 hover:border-custom-blue transition-all duration-300`}>Get in Touch.</button>
        </div>
      </div>
      <div>
        <img src={home} className='w-full  h-5/6 lg:h-full lg:ml-52'/>
      </div>
      
      <img src={shape} className='absolute -z-20  -top-60  -right-60'/>
    </div>
  );
}

export default Home;
