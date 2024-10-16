import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { container } from '../animation'

const StepOne: React.FC = () => {
    
    const linePath = {
        initial:{ strokeDasharray: "0 32", strokeDashoffset: 0 },
        view:{
            strokeDasharray: "32 0",
            strokeDashoffset: 32,
            transition: { duration: 1, ease: [0.65, 0, 0.35, 1] }
        }
    }
    const { scrollYProgress } = useViewportScroll();
    const rotateSvg = useTransform(scrollYProgress,[0,1],[0,190]);
    const color = useTransform(scrollYProgress, [0, 1], ['#ff612c', '#ceff2c']);

  return (
    <motion.div variants={container} whileInView="visible" initial="initial" className="w-1/2 md:w-1/3 h-full flex flex-col items-start md:p-0 p-3">
          <motion.svg style={{ rotate:rotateSvg }} className='w-10 hidden md:block'  width="32" height="32" viewBox="0 0 32 32"  fill="none" xmlns="http://www.w3.org/2000/motion.svg">
              <motion.line x1="15.5" x2="15.5" y2="32" stroke="#FBFEE1" stroke-width="5" variants={linePath} initial='initial' whileInView='view'/>
              <motion.line y1="15.5" x2="32" y2="15.5"  stroke="#FBFEE1" stroke-width="5" variants={linePath} initial='initial' whileInView='view'/>
              <motion.line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#FBFEE1" stroke-width="5" variants={linePath} initial='initial' whileInView='view'/>
              <motion.line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#FBFEE1" stroke-width="5" variants={linePath} initial='initial' whileInView='view'/>
          </motion.svg>
          <motion.p style={{ color }} className="font-black font-outfit  text-6xl md:text-[100px] p-0 text-[#ff612c] text-right"> 1 </motion.p>
          <motion.hr initial={{ width: '5%' }}
            whileInView={{ width: '95%' , transition:{delay:0.3, duration:1 ,ease: [0.65, 0, 0.35, 1]}}} className=" " />
          <motion.p className="text-[14px] md:text-md text-[#FBFEE1] pt-3 md:pt-10">
            Effortless Redemption Streamline your daily essentials shopping with
            Pantry Plus whether it's a quick trip to the store or a few taps on
            the Plateup app. Add your essentials, and effortlessly redeem your
            rewards with the Pantry Plus.
          </motion.p>
        </motion.div>
  )
}

export default StepOne





// [#E46E27] - orginal orange