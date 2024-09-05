import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import WordPopping from './WordPopping'
import MealExpress from '../assets/images/MealExpress.png'

const container = {
  initial: { opacity: 0, scale:0.9 },
  
  visible: {
    scale: 1 ,
    opacity: 1 ,
    x: 0 , 
    y :0 ,
    transition: { ease: [0.65, 0, 0.35, 1] ,
      delay: 0.1 ,
      duration: 1.2 ,
    },
  }
};

interface SectionHeadingProps {
    heading: string ;  
    mealExpressIcon: boolean ;     
}

const SectionHeading:React.FC<SectionHeadingProps> = ({heading , mealExpressIcon}) => {
  return (
    <motion.div variants={container} initial="initial" whileInView="visible" className="flex flex-col pt-[10vh]">
        <div className="flex flex-row justify-between">
          <div className="text-4xl">
            <WordPopping phrase={heading} />
          </div>
          {mealExpressIcon && (
          <motion.div
            initial={{ scale: 0, opacity: 0.4 }}
            viewport={{ once: false }}
            exit={{ scale: 0, opacity: 0, transition: { delay: 0 } }}
            whileInView={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
          >
            <Image src={MealExpress} width={80} height={70} alt="food one" />
          </motion.div>
        )}
        </div>
        <div className="w-full pt-5">
          <motion.hr
            initial={{ width: 5 }}
            whileInView={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-200"
          />
        </div>
    </motion.div>
  )
}

export default SectionHeading
