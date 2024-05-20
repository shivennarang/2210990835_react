import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg';
import dribble from '../assets/Dribble.svg';

function Footer(props) {
  const data = ["Home.", "About us.", "Portfolio.", "Blog.","Contact us."];
  return (
    <div className={`flex flex-col gap-5 justify-center items-center p-10 font-work-sans relative ${props.dark ? ' bg-indigo-950' : 'bg-transpaernt'} relative`}>
      <div className='text-xl font-bold text-white'>DOOB</div>
      <div className='text-3xl font-bold text-custom-red'>CREATIVITY ABOVE</div>
      <div className='flex flex-wrap gap-5 text-lg font-semibold text-white'>
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
      <div className='text-sm font-medium text-white'>&copy; 2019 - Doob, All Rights Reserved</div>
      <div className='flex gap-5'>
        <img src={facebook} alt="Facebook"/>
        <img src={twitter} alt="Twitter"/>
        <img src={dribble} alt="Dribble"/>
      </div>
      <div className={`w-full h-full absolute top-0 left-0 -z-10 ${props.dark ? 'bg-purple-300' : 'bg-custom-blue'}`}></div>
    </div>
  );
}

export default Footer;
