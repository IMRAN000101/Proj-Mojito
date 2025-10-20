import React from 'react'
import { openingHours, socials } from '../../constants/index'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(SplitText)
const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2', {type:'words'})
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
                ease:'power1.inOut'
            }
        })
        timeline.from(titleSplit.words,{
            opacity:0,
            yPercent:100,
            stagger:0.02
        })
        .from('#contact h3, #contact p',{
            opacity:0,
            yPercent:100,
            stagger:0.02
        })
        .to('#f-right-leaf',{
            y:-50,
            duration:1,
            ease:'power1.inOut'
        })
        .to('#f-left-leaf',{
            y:-50,
            duration:1,
            ease:'power1.inOut'
        },'<')
    })
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'/>
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf'/>
        <div className="content">
            <h2>Where to find Us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>456, Gate Bazar, #404 Odisha, IN 760001</p>
                <h3>Contact Us</h3>
                <p>(91) 1800-6357</p>
                <p>md9020096@gmail.com</p>
            </div>
            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((open)=>(
                    <p key={open.day}>
                        {open.day} : {open.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social)=>(
                        <a key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}
                        >
                            <img src={social.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact