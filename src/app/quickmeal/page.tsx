'use client';

import React, { useRef } from 'react';
import WordPopping from './components/WordPopping';
import Papper from './assets/images/paper.jpg';
import F1 from './assets/images/F1.png';
import F2 from './assets/images/F2.png';
import Tea from './assets/images/tea.png';
import Logo from './assets/images/Plateup-logo 4.png';
import Card from './assets/images/Card.png';
import MirrorOne from './assets/images/mirror (2).png';
import MirrorTwo from './assets/images/mirror.png';
import MirrorThree from './assets/images/Component 10.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import DrawingSVG from './components/ReadyToRedeemSvg';
import MealCard from './components/MealCard';
import SectionHeading from '../dine/Components/SectionHeading'
import FAndQHow from './components/F&QHow';
import FAndQWhy from './components/F&QWhy';
import FAndQWhat from './components/F&QWhat';


const container = {
  initial: { opacity: 0, scale:0.9 },
  
  visible: {
    scale: 1 ,
    opacity: 1 ,
    x: 0 , 
    y :0 ,
    transition: { ease: [0.65, 0, 0.35, 1] ,
      delay: 0.1 ,
      duration: 0.9 ,
    },
  }
};

function Page() {
  const height = useRef<HTMLDivElement>(null);
  const heightFor = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef(null)
  const { scrollYProgress } = useScroll();
  
  const top = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const moveY = useTransform(scrollYProgress, [0, 1], [10, 70]);
  const moveX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const nagativeMoveY = useTransform(scrollYProgress, [0, 1], [10, -50]);


  return (
    <main className="px-5 md:px-20 lg:px-40 xl:px-40 w-screen bg-[#030303]">
      <div className="flex flex-row w-full h-screen items-center  " ref={height}>
        <div className="w-4/6 h-full flex flex-col items-start justify-between gap-5 pt-32 pb-10" >
          <p className="font-extrabold text-5xl text-[#FBFEE1] w-[50vw] leading-normal">
            <WordPopping phrase="Indulge in a World of Flavors Without Worrying about the Bill" />
          </p>
          <p className="pt-3 my-auto text-lg font-light text-[#FBFEE1] w-[30vw] leading-relaxed">
            <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
          </p>

          <div className="flex flex-row items-end">
          <motion.div variants={container} initial="initial" whileInView="visible" className="mt-10 bg-gray-500 rounded-3xl w-80 h-80 overflow-hidden relative ">
            <Image
              src={Papper}
              alt="..."
              width={400}
              height={400}
              className="w-full h-full absolute z-10 opacity-50"
            />
            <div className="absolute z-20">
              <p className="pt-5 text-orange-600 text-center leading-6 font-serif font-semibold text-2xl">
                Satisfying <br />
                <span className="text-gray-800 text-medium font-normal">
                  all your taste buds
                </span>{" "}
              </p>
              <div className="flex flex-row gap-0 ">
                <motion.div initial={{ x: 30 }} style={{ y: nagativeMoveY }}>
                  <Image
                    src={F1}
                    alt="..."
                    width={400}
                    height={400}
                    className="w-38 rotate-180 z-10"
                  />
                </motion.div>
                <motion.div initial={{ x: -30 }} style={{ y: moveY }}>
                  <Image
                    src={F2}
                    alt="..."
                    width={400}
                    height={400}
                    className="w-38 rotate-180 z-20"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          <DrawingSVG/>
          </div>
        </div>
        <div className="w-2/6  h-full flex flex-col items-end justify-between gap-5 pt-32 pb-10">
          <div className="flex flex-row gap-5">
            <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15.5" x2="15.5" y2="32" stroke="#FBFEE1" stroke-width="5"/>
              <line y1="15.5" x2="32" y2="15.5" stroke="#FBFEE1" stroke-width="5"/>
              <line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#FBFEE1" stroke-width="5"/>
              <line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#FBFEE1" stroke-width="5"/>
            </motion.svg>
            <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15.5" x2="15.5" y2="32" stroke="#F79E1C" stroke-width="5"/>
              <line y1="15.5" x2="32" y2="15.5" stroke="#F79E1C" stroke-width="5"/>
              <line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#F79E1C" stroke-width="5"/>
              <line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#F79E1C" stroke-width="5"/>
            </motion.svg>
          </div>
          <div className="flex flex-row w-full gap-4">
            <motion.div  variants={container} initial="initial" whileInView="visible" className="w-full h-80 rounded-2xl bg-[#323232] relative overflow-hidden">
            <motion.div style={{ scale: scale }}  className="w-full h-full flex items-center justify-end absolute">
              <Image src={MirrorTwo} alt='...'  className='w-[100px] '/>
            </motion.div>
            </motion.div>
            <motion.div variants={container} initial="initial" whileInView="visible" className="w-full h-80 rounded-2xl bg-white relative overflow-hidden">
              <motion.div style={{ scale: scale, x:moveX }}  className="w-full h-full flex items-center justify-start absolute">
                <Image src={MirrorOne} alt='...'  className='w-[100px] '/>
              </motion.div>

            </motion.div>
          </div>
          <motion.div variants={container} initial="initial" whileInView="visible" className="bg-[#F1CF88] w-80 h-40  rounded-3xl relative">
              <motion.div style={{ scale: top ,}} initial={{x:-40}} className="w-full h-full flex items-center justify-start absolute">
                <Image src={MirrorThree} alt='...'  className='w-[100px] '/>
              </motion.div> 
              <p className="pt-3 my-auto text-lg font-light text-[#FBFEE1] p-5 leading-7">
                <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
              </p>
          </motion.div>
        </div>
      </div>

      <div className="h-screen w-full">
        <motion.div variants={container} initial="initial" whileInView="visible" className="h-1/2 w-full flex flex-row justify-between items-center gap-5">
          <p className="pt-3 text-4xl text-[#FBFEE1] h-[30vh] leading-10">
            <WordPopping phrase="Introducing Plateup, where workplace dining is revolutionized with a diverse range of cuisines " />
          </p>
          <p className="pt-3 text-2xl text-[#FBFEE1] h-[30vh] leading-8">
            <WordPopping phrase="We eliminate the hassle of searching for meals on expensive delivery apps and the constraints of traditional cafeteria choices." />
          </p>
          <p className="pt-3 text-lg font-light text-[#FBFEE1] h-[30vh] leading-relaxed">
            <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
          </p>
        </motion.div>


        <motion.div 
            variants={container} initial="initial" whileInView="visible"
            className="flex h-[45vh] rounded-3xl w-full bg-[#1E1F1F] overflow-hidden relative">
          <motion.div style={{ y: nagativeMoveY }} className="w-full h-full flex items-center justify-center absolute">
          <Image src={Logo} alt='...'  className='w-[700px] opacity-25'/>
          </motion.div>
          <div className="w-full h-full flex items-center justify-center absolute">
          <Image src={Card} alt='...'  className='w-[400px]'/>
          </div>
          <div className="flex absolute w-full h-full p-5 justify-end items-end">
            <div
              className="rounded-full flex flex-row items-end bg-[#D3D2D0] w-56 h-16"
              ref={constraintsRef}
            >
              <motion.div
                className="absolute "
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
                whileHover={{ scale: 1.1 }}
                // whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                dragConstraints={{ top: 0, left: 0, right: 150, bottom: 0, }}>
                <Image
                  src={Tea}
                  alt="tea"
                  width={70}
                  height={70}
                  draggable="false"
                  onMouseDown={(e) => e.preventDefault()}
                />
              </motion.div>
              <p className="w-full text-center pl-10 h-2/3 items-center justify-center">
                slide to take a breake
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* // 04 */}

      <SectionHeading heading='Plateup Fresh !' mealExpressIcon={true} />
      {/* <div className="pt-[3vh]"> <ModalTimeFrame /> </div> */}
      <div className="h-full w-full pt-[3vh] flex flex-col md:flex-row">
        <motion.div  className="hidden md:block w-2/5">
        <div className="flex flex-col gap-5 w-full">
          <motion.p variants={container} initial='initial' whileInView="visible" className="text-xl font-light flex items-start"> <WordPopping phrase='Near SuperMarkets'/></motion.p>
          {/* <FrameCalendar />
          <TimeFrame /> */}
          <motion.div  variants={container} initial='initial' whileInView="visible" className="bg-white rounded-lg w-80 h-24">hello</motion.div>
        </div>
        </motion.div>
        <div className="w-full md:w-3/5 h-full ">
          <p className="text-xl font-light pb-[3vh] flex items-start"><WordPopping phrase='Popular this week' /></p>
          <MealCard/>
        </div>
      </div>

      {/* F&Q */}

      <SectionHeading heading="Frequently asked questions !" mealExpressIcon={false}/>
      <div className="h-full md:h-screen w-full py-[4vh] md:pt-[10vh]">
        <div className="flex flex-row gap-3">
          <div className="hidden md:block w-2/6">
          <div className="flex flex-col w-full gap-3">            
            <div className="w-full h-[300px] flex items-start justify-end"><FAndQWhy/></div> 
            <div className="w-full h-[300px]"><FAndQHow/></div>    
          </div> 
          </div>
          <div className="md:w-4/6 flex flex-row items-end justify-start"><FAndQWhat/></div>
        </div>
      </div>
      <div className="h-screen w-screen">.</div>
    </main>
  );
}

export default Page;
