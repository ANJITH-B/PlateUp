import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import WordPopping from './WordPopping'
import MealExpress from '../assets/images/MealExpress.png'

interface SectionHeadingProps {
    heading: string ;  
    mealExpressIcon: boolean ;     
}

const SectionHeading:React.FC<SectionHeadingProps> = ({heading , mealExpressIcon}) => {
  return (
    <div className="flex flex-col pt-[10vh]">
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
    </div>
  )
}

export default SectionHeading
