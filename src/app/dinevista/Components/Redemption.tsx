import React from 'react'
import { motion } from 'framer-motion'
import  Image  from 'next/image'
import Logo from '../assets/images/logo 1.png'
import Redeem from '../assets/images/Redeem.png'
import AnimatedText from './TextPoping'


const Redemption: React.FC = () => {
  return (
    <motion.div className="flex flex-col justify-between w-1/2 sm:w-2/3 lg:w-1/2 rounded-3xl leading-9 pt-10 text-[46px] bg-gradient-radial font-bold">
    <Image src={Redeem} alt="redeem" width={150} height={100} />
    <div className="w-full flex flex-col items-start">
      <Image
        src={Logo}
        alt="plateup"
        width={150}
        height={100}
        className="absolute -10"
      />
      <div className="pt-16 md:pt-12">
        <AnimatedText cssClass='font-sans text-2xl' text="REDEMPTION" delay={0} />
      </div>
    </div>
  </motion.div>
  )
}

export default Redemption
