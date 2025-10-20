import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767});

  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
    
    gsap.from(heroSplit.chars,{
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.05
    });
    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger:0.05,
      delay:1
    })
    gsap.timeline({
      scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    .to('.left-leaf',{y: -200},0)
    .to('.right-leaf',{y: 200},0)
    
    const startValue = isMobile? 'top 50%' : 'center 60%';
    const endValue = isMobile? '120% top' : 'bottom top';
    
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger: 'video',
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true
          }
        }) 
        videoRef.current.onloadedmetadata = () => {
          tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
          })
        }
  },[])
  return (
    <>
    <section id='hero' className='noisy'>
      <h1 className='title'>MOJITO</h1>
      <img src="/images/hero-left-leaf.png" alt="left leaf" 
      className='left-leaf'/>
      <img src="/images/hero-right-leaf.png" alt="right-leaf" 
      className='right-leaf'/>
      <div className='body'>
        <div className="content">
          <div className='space-y-5 hidden md:block'>
            <p>Cool . Crisp . Crazy</p>
            <p className='subtitle'>
              Sip the Spirit <br /> of Summer</p>
          </div>
          <div className='view-cocktails'>
            <p className='subtitle'>
              Every Cocktail in our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
    <div className="video absolute inset-0">
      <video 
      ref={videoRef}
      src="/videos/output.mp4"
      muted
      playsInline
      preload='auto'/>
    </div>
    </>
  )
}

export default Hero