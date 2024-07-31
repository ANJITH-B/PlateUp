import React from 'react'
import { motion } from 'framer-motion'
import  Image  from 'next/image'
import Logo from '../assets/images/logo 1.png'
import Redeem from '../assets/images/Redeem.png'
import AnimatedText from './TextPoping'


const Redemption: React.FC = () => {
  return (
    <motion.div className="flex flex-col justify-between w-1/2 rounded-3xl leading-9 mr-3 p-1 pt-10 text-[46px] bg-gradient-radial font-bold">
    <Image src={Redeem} alt="" width={150} height={100} />
    <div className="w-full flex flex-col items-start">
      <Image
        src={Logo}
        alt=""
        width={150}
        height={100}
        className="absolute -10"
      />
      <div className="pt-12">
        <AnimatedText text="REDEMPTION" delay={0} />
      </div>
    </div>
  </motion.div>
  )
}

export default Redemption
