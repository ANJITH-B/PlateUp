"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import AnimatedText from "./TextPoping";
import Image from 'next/image'
import F1 from '../assets/images/f1.png'
import C1 from '../assets/images/curry1.png'
import C2 from '../assets/images/curry2.png'
import B1 from '../assets/images/breakfast1.png'
import B2 from '../assets/images/breakfast2.png'
import S1 from '../assets/images/snacks1.png'
import S2 from '../assets/images/snacks2.png'
import D1 from '../assets/images/dinne.png'


const MovingTextPathSM = () => {
  const paths = useRef([]);
  const container = useRef();
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
  })

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const nativerotation = useTransform(scrollYProgress, [0, 1], [0, -360]);

  useEffect( () => {
    scrollYProgress.on("change", e => {
      paths.current.forEach( (path, i) => {
        path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
      })
    })
  }, [])

  return (
    <div className="md:h-full w-full flex flex-col items-center "> 
      <AnimatedText text="Introducing" delay={0} />
      <AnimatedText text="Dine VISTA" delay={0} />
      <AnimatedText text="Discover the Joy" delay={1.5} />  
      <AnimatedText text="of Dining Out" delay={1.5} />  
      <motion.div className="bg-[#507BA6] h-60 md:h-96 w-full rounded-3xl mt-[20vh] md:mt-[15vh] pt-8"
          initial={{ scale: 0.1, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease:[0.65, 0, 0.35, 1] }} >
          <div className="hidden md:block">
           <svg className="w-full" viewBox="0 0 1548 463" xmlns="http://www.w3.org/2000/svg">
            <path fill='none' id='curve' d="M-266 274.49L-27.5 146.49C95 85.4897 184.5 163.5 233.5 222.5C282.5 281.5 402.58 262 446.5 196.99C497.5 121.5 478.377 132.693 515.5 87.5C561.5 31.5008 643 -10.1261 716 3.99047C776 15.5931 815.77 50.9204 862.5 123.49C905 189.49 1011.5 235.333 1098.5 208.49C1233 166.99 1261.5 182.489 1343 196.99C1398.79 206.916 1487.67 304.656 1532.5 345.49L1764 553.99"/>
            <motion.text initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="text-100px] md:text-[65px] space-x-5 font-bold" style={{fill: "white"}}>   
              <textPath ref={ref => paths.current[1] = ref} startOffset="0%" href="#curve">
              <tspan dx="350">Breakfast </tspan><tspan dx='50'>*</tspan><tspan dx='50'>Lunch</tspan><tspan dx='30'>*</tspan>
              </textPath>
              <textPath ref={ref => paths.current[2] = ref} startOffset="40%" href="#curve">
              <tspan dx="550">snacks</tspan> *<tspan dx="100"> dinner</tspan>
              </textPath>
              <textPath ref={ref => paths.current[3] = ref} startOffset="80%" href="#curve"><tspan dx='200'>.</tspan> 4 Break fast lunch snacks dinner </textPath>
            </motion.text>
            </svg>
          </div>
          <div className="flex flex-row absolute">
            <motion.div className=" " initial={{y: '-28vh'}}><MotionImageWrapper image={{ src: B2, alt: 'food one' }} rotation={rotation} /> </motion.div>
            <motion.div className="w-10 " initial={{x:'-3vw', y:'-9vh' }}><MotionImageWrapper image={{ src: C1, alt: 'food one' }} rotation={rotation} /> </motion.div>
            <motion.div className="w-40 " initial={{x:'-7vw', y:'-20vh' }}><MotionImageWrapper image={{ src: C2, alt: 'food one' }} rotation={rotation} /> </motion.div>
            <motion.div className=" " initial={{x:'-14vw', y:'-46vh' }}><MotionImageWrapper image={{ src: B1, alt: 'food one' }} rotation={nativerotation} /> </motion.div>
            <motion.div className=" " initial={{x:'-14vw', y:'-38vh' }}><MotionImageWrapper image={{ src: F1, alt: 'food one' }} rotation={rotation} /> </motion.div>
            <motion.div className=" " initial={{x:'-4vw', y:'-48vh' }}><MotionImageWrapper image={{ src: S1, alt: 'food one' }} rotation={nativerotation} /> </motion.div>
            <motion.div className=" " initial={{x:'-4vw', y:'-28vh' }}><MotionImageWrapper image={{ src: D1, alt: 'food one' }} rotation={rotation} /> </motion.div>
            <motion.div className=" " initial={{x:'-10vw', y:'-44vh' }}><MotionImageWrapper image={{ src: S2, alt: 'food one' }} rotation={nativerotation} /> </motion.div>
          </div>
      </motion.div>   
    </div>
  );
};


export default MovingTextPathSM;



const MotionImageWrapper = ({ image, rotation }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0.4 }}
      viewport={{ once: false }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ delay: 2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      style={{ rotate: rotation }}
    >
      <Image  src={image.src} width={230} height={230} alt={image.alt} />
    </motion.div>
  );
};




 {/* <path id="curve" fill="none" d="M-243 273.5L-4.5 145.5C118 84.4999 207 185 256 244C305 303 403.349 311.465 443 226.5C481.5 144 486 135 530 95C576.175 53.0225 666 -11.116 739 3.00059C799 14.6033 838.77 49.9305 885.5 122.5C928 188.5 1034.5 234.344 1121.5 207.5C1256 166 1284.5 181.5 1366 196C1421.79 205.926 1510.67 303.666 1555.5 344.5L1787 553" /> */}
//  <svg width="433" height="88" viewBox="0 0 433 88" fill="none" xmlns="http://www.w3.org/2000/svg">
// </svg>
{/* <div className="block md:hidden">
           <svg className="w-full" viewBox="0 0 433 88" xmlns="http://www.w3.org/2000/svg">
            <path stroke="black" fill="none" id="curve" d="M0.5 57.0173C9.5 42.684 32 23.3929 66 20.5176C100 17.6422 114.746 52.524 156 44.5C192 37.4978 195.5 0.502342 239.5 1.50232C273.5 2.27503 269 28.9824 314 43.5C355.941 57.0308 349.863 82.5346 387.5 87C404 88.9576 422.833 72.5 432 65"/>
            <motion.text initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="text-100px] md:text-[65px] space-x-5 font-bold" style={{fill: "white"}}>   
              <textPath ref={ref => paths.current[1] = ref} startOffset="0%" href="#curve">
              <tspan dx="350">Breakfast </tspan><tspan dx='50'>*</tspan><tspan dx='50'>Lunch</tspan><tspan dx='30'>*</tspan>
              </textPath>
              <textPath ref={ref => paths.current[2] = ref} startOffset="40%" href="#curve">
              <tspan dx="550">snacks</tspan> *<tspan dx="100"> dinner</tspan>
              </textPath>
              <textPath ref={ref => paths.current[3] = ref} startOffset="80%" href="#curve"><tspan dx='200'>.</tspan> 4 Break fast lunch snacks dinner </textPath>
            </motion.text>
           </svg>
          </div> */}