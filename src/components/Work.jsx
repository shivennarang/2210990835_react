import box from '../assets/box.svg'
import shape from '../assets/shape4.svg'

function Work(props) {
  const images=[{img:box},{img:box},{img:box},{img:box},{img:box},{img:box},]
  return (
    <div id='Portfolio.' className="flex flex-col gap-10 relative">
      <div className={`lg:text-6xl text-4xl ${props.dark?"text-purple-300":"text-custom-blue"} font-work-sans font-extrabold lg:font-semibold lg:w-1/2 w-full text-center lg:text-left leading-normal lg:mx-0`}>See some of our Creative work.</div>
      <div className='flex flex-wrap justify-center items-center gap-3'>
        {
          images.map((image,index)=>{
            return(
              <img key={index} src={image.img} className=' animate-pulse'/>
            )
          })
        }

      </div>
      <div className='mx-auto text-xl text-custom-red font-extrabold lg:font-semibold font-work-sans'>See More of These.</div>
      <img src={shape} className='absolute -z-20 -left-64'/>
    </div>
  );
}

export default Work;
