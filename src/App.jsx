// import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
// import { useGSAP } from '@gsap/react'
// import {ScrollTrigger, splitText} from 'gsap/all'

// gsap.registerPlugin(scrollTrigger, splitText)

const App = () => {
  return (
    <main>
      <Navbar/> 
       <Hero/>
       <Cocktails/>
       <About/>
       <Art/>
    </main>
  )
}

export default App
