
import { SpeedInsights } from "@vercel/speed-insights/react"
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'


const App = () => {
  return (
    <main>
      <Navbar/> 
       <Hero/>
       <Cocktails/>
       <About/>
       <Art/>
       <Menu/>
       <Contact/>
    </main>
  )
}

export default App
