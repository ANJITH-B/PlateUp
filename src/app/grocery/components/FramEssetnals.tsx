import React from 'react';
import { motion, useScroll, useTransform, useViewportScroll} from 'framer-motion'
import WordPopping from './WordPopping';
import { Outfit } from 'next/font/google';
import { container } from '../animation';
import Image from 'next/image';
import Brigel from '../assets/brigell.png'
import Chilli from '../assets/chilli.png'
import Brocoli from '../assets/brocoli.png'
import Cabage from '../assets/cabbage.png'
import CapsiumRed from '../assets/capsicumRed.png'
import CapsiumYellow from '../assets/capsicamYellow.png'
import CabageLeaf from '../assets/leaf.png'
import FramEssetnialsText from '../assets/FARM ESSEN TLALS (1).png'

    const outfit = Outfit({
    weight: '400',
    subsets: ['latin'],
    });

const FramEssetnals: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const zoomIn = useTransform(scrollYProgress,[0,1],[1,1.2]);
    const blurOff = useTransform(scrollYProgress, [0, 1], [ 0, 2]); 
    const blurOn = useTransform(scrollYProgress,[0,1],[1,2]);
    const zoomOut = useTransform(scrollYProgress,[0,1],[1,0.8]);
    const MoveDownsBrigel = useTransform(scrollYProgress,[0,1],[-150,80])
    const MoveDownschilli = useTransform(scrollYProgress,[0,1],[100,80])
    const MoveDownsfast = useTransform(scrollYProgress,[0,1],[0,200])
    const MoveUplow = useTransform(scrollYProgress,[0,1],[0,30])
    const MoveDownsCapsicum = useTransform(scrollYProgress,[0,1],[60,150])
    const MoveDownsBrocoli = useTransform(scrollYProgress,[0,1],[-70,100])


React.useEffect(()=>{
    console.warn(blurOff);
    console.warn(MoveDownsfast);
    
},[blurOff])
  return (
    <motion.div variants={container} whileInView='visible' initial='initial' className={`font-outfit flex items-center justify-center relative overflow-hidden w-full h-80 rounded-3xl  to-[#C5D34A] from-[#459D42] bg-gradient-to-tl`}>
        <motion.p style={{scale:zoomOut}} initial={{x:0} } className='absolute z-10 font-outfit font-black text-8xl leading-12'> FARM<br/>ESSEN<br/>TIALS</motion.p>
        {/* <motion.div style={{scale:zoomOut,y:MoveUplow}} className='absolute z-10'><Image src={FramEssetnialsText} alt="..." className='w-80'/></motion.div> */}
        <motion.div style={{scale:zoomIn, y:MoveDownsBrigel}} initial={{x:-60}} className='absolute z-20'><Image src={Brigel} alt="..." className='w-20'/></motion.div>
        <motion.div style={{scale:zoomOut,y:MoveDownschilli}}initial={{x:-100}} className='absolute z-20'><Image src={Chilli} alt="..." className='w-20'/></motion.div>
        <motion.div style={{scale:zoomIn, y:MoveDownsBrocoli}} initial={{x:157}} className='absolute z-20'><Image src={Brocoli} alt="..." className='w-28'/></motion.div>
        <motion.div style={{scale:zoomIn, y:MoveDownsfast ,filter:'blur(2px)'}} initial={{x:-300}} className='absolute z-20'><Image src={Cabage} alt="..." className='w-40'/></motion.div>
        <motion.div style={{scale:zoomIn, y:MoveDownsCapsicum}} initial={{x:50}} className='absolute z-20'><Image src={CapsiumRed} alt="..." className='w-20'/></motion.div>
        <motion.div style={{scale:zoomOut,y:MoveDownsfast,filter:`blur(2px)`}} initial={{x:-150}} className='absolute z-0'><Image src={CapsiumYellow} alt="..." className='w-20'/></motion.div>
        <motion.div style={{scale:zoomIn, y:MoveDownsfast}} initial={{x:200}} className='absolute z-10'><Image src={CabageLeaf} alt="..." className='w-20'/></motion.div>
        <motion.div style={{scale:zoomIn, y:MoveDownsCapsicum}} initial={{x:300}} className='absolute z-20'><Image src={CapsiumRed} alt="..." className='w-80 blur-lg'/></motion.div>
    </motion.div>
  );
};

export default FramEssetnals ;

// `blur(${blurOff}px)`