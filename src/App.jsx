
import { useEffect, useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import Videoplayer from "./Components/Videoplayer/Videoplayer"

function App() {

 
  const [playState,setPlaystate] = useState(false);


   useEffect(()=>{   //avoids scrolling when page is on

    document.body.style.overflow= playState ? 'hidden' : 'auto';
  },[playState])
  
 

  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Title subtitle='Our Program' title='What We Offer'/>
       <Programs/>
      <About setPlaystate={setPlaystate}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' title='What Student says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
     </div>
     
     <Videoplayer playState={playState} setPlaystate={setPlaystate} />
        
    </>
  )
}

export default App
