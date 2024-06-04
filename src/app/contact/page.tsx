// import { useLocomotiveScroll } from 'react-locomotive-scroll';
// const { scroll } = useLocomotiveScroll();
'use client';

import React from 'react';
import Image from 'next/image'
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from 'framer-motion';
import {EmployeeForm, CorporateForm , MerchantForm} from '@/components/contactForm'
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/moving-border";
import '../fonts.css';
import bg1 from './contact-img.png';
import logo from './Plateup Logo-11.png'

function ContactUs() {

  const words = [
    {
      text: "Click to Instantly Get in Touch with",
      className: "text-xl lg:text-4xl font-primary text-white dark:text-white",
    },
  ];
  const tabs = [
    {
      title: "Corporate",
      value: "Corporate",
      content: (
        <div className="max-w-5xl h-auto mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border-[0.89px] border-[#9F9F9F] text-white  flex flex-row justify-evenly flex-wrap backdrop-blur-3xl" style={{background: "linear-gradient(139.61deg, rgba(0, 0, 0, 0.75) 2.04%, rgba(0, 0, 0, 0.75) 2.04%)",backgroundSize:"cover"}}>
          <div className='lg:w-1/2 w-full min-h-96 my-auto'>
            <CorporateForm/>
          </div>
          <div className='hidden lg:block w-1/2 h-full min-h-96'>
            <Image src={bg1} alt="Plateup" className="h-auto w-full p-4 rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Employee",
      value: "Employee",
      content: (
        <div className="max-w-5xl h-auto mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border-[0.89px] border-[#9F9F9F] text-white  flex flex-row justify-evenly flex-wrap backdrop-blur-3xl" style={{background: "linear-gradient(139.61deg, rgba(0, 0, 0, 0.75) 2.04%, rgba(0, 0, 0, 0.75) 2.04%)",backgroundSize:"cover"}}>
          <div className='lg:w-1/2 w-full min-h-96 my-auto'>
            <EmployeeForm/>
          </div>
          <div className='hidden lg:block w-1/2 h-full min-h-96'>
            <Image src={bg1} alt="Plateup" className="h-auto w-full p-4 rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Merchant",
      value: "Merchant",
      content: (
        <div className="max-w-5xl h-auto mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border-[0.89px] border-[#9F9F9F] text-white  flex flex-row justify-evenly flex-wrap backdrop-blur-3xl" style={{background: "linear-gradient(139.61deg, rgba(0, 0, 0, 0.75) 3.04%, rgba(0, 0, 0, 0.75) 3.04%)",backgroundSize:"cover"}}>
          <div className='lg:w-1/2 w-full min-h-96 my-auto'>
            <MerchantForm/>
          </div>
          <div className='hidden lg:block w-1/2 h-full min-h-96'>
            <Image src={bg1} alt="Plateup" className="h-auto w-full p-4 rounded-2xl" />
          </div>
        </div>
      ),
    },
  ];
 
  return (
    <AuroraBackground>
    <div className='h-screen max-w-screen'>
      <div className="flex flex-col items-center justify-center h-screen" >
        {/* <div> */}
          <TypewriterEffectSmooth words={words} />
        {/* </div> */}
        <motion.span  className="text-orange-500 text-5xl -pt-5 pb-5 font-secondary font-black text-center" 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:3, duration:2,ease: "easeInOut",}}
        >
          <Image src={logo} alt="plateup" className='h-36 -my-5 w-auto' />
        </motion.span>

        <motion.div  className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 hover:scale-110 transition-transform"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:3, duration:2,ease: "easeInOut",}}
        >
          <a href="#form"  >
            <Button className="font-black text-lg">Lets Connect</Button>
          </a>
        </motion.div>
      </div>
      <div id='form' className="backdrop-blur-xl bg-opacity-80 max-w-screen h-max px-4 pb-[100px] flex flex-col mx-auto items-start justify-start pt-16">
        <Tabs tabs={tabs} />
      </div>
      <div className="z-30 h-screen w-[99vw]" style={{background:`url("./universal.png")`,backgroundRepeat:"repeat-y",backgroundSize:"100%"}}>
      </div>
    </div>
    </AuroraBackground>
  );
}


export default ContactUs;