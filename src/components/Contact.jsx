function Contact(props) {
    return ( 
        <div id="Contact us." className="flex flex-col gap-10 font-work-sans relative">
            <div className="flex flex-col gap-5">
                <div className="lg:text-lg  text-lg font-bold text-custom-red p-1">CONTACT US</div>
                <div className={` lg:text-6xl text-4xl font-bold ${props.dark?"text-purple-300":"text-custom-blue"} p-1`}>Get in Touch</div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex lg:flex-row flex-col  justify-between items-center gap-12">
                    <div className="flex items-center justify-between lg:w-1/2 w-full  p-3 gap-2 relative">
                        <label htmlFor="email" className={` xl:text-lg ${props.dark?"text-purple-300":"text-custom-blue"} font-bold`}>Your email</label>
                        <input id="email" type="email" className={`w-4/5 p-2 bg-transparent outline-none ${props.dark?"text-purple-300":"text-custom-blue"} xl:text-lg font-medium`}/>
                        <div className="absolute w-full h-full bg-custom-purple -z-30 top-0 left-0"></div>
                    </div>
                    <div className="xl:flex justify-between items-center lg:w-1/2 w-full  p-3 gap-2 relative">
                        <label htmlFor="subject" className={` xl:text-lg ${props.dark?"text-purple-300":"text-custom-blue"} font-bold`}>Subject</label>
                        <input id="subject" type="text" className={`w-4/5 p-2 bg-transparent outline-none ${props.dark?"text-purple-300":"text-custom-blue"} text-lg font-medium`}/>
                        <div className="absolute w-full h-full bg-custom-purple -z-30 top-0 left-0"></div>
                    </div>
                </div>
                <div className="flex  p-3 relative">
                    <label htmlFor="message" className={` text-lg ${props.dark?"text-purple-300":"text-custom-blue"} font-bold`}>Message here...</label>
                    <input type="text" id="message" className={`p-12 w-10/12 mx-auto bg-transparent outline-none ${props.dark?"text-purple-300":"text-custom-blue"} text-lg font-medium`}/>
                    <div className="absolute w-full h-full bg-custom-purple -z-30 top-0 left-0"></div>
                </div>
            </div>
            <button className='p-3 lg:w-1/6 w-1/2 rounded-3xl bg-custom-red text-white font-semibold mx-auto'>Send Message</button>
        </div>
     );
}

export default Contact;