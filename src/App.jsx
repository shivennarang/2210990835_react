
import { useState } from "react"
import About from "./components/About"
import Background from "./components/Background"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Work from "./components/Work"



function App() {
  
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark?"bg-black":"bg-transparent"} transition-all duration-300 -z-10 overflow-x-hidden scroll-smooth`}>

    
   <div className="  w-9/12  mx-auto z-10 flex flex-col justify-between h-full lg:h-vh gap-24 lg:gap-0">
    <Background/>
    <Navbar dark={dark} setDark={setDark}/>
    <Home dark={dark}/>
    <Info dark={dark}/>
    <About dark={dark}/>
    <Work dark={dark}/>
    <Blog dark={dark}/>
    <Contact dark={dark}/>
    <Footer dark={dark}/>
   </div>
   </div>
  )
}

export default App
