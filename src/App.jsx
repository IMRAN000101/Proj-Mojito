// import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import { useGSAP } from '@gsap/react'
// import {ScrollTrigger, splitText} from 'gsap/all'

// gsap.registerPlugin(scrollTrigger, splitText)

const App = () => {
  return (
    <main>
      <Navbar/> 
       <Hero/>
    </main>
  )
}

export default App
