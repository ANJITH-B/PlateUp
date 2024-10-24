import React from 'react'
import WordPopping from './WordPopping'
import {motion} from 'framer-motion'


const ShortBrief:React.FC = () => {
  return (
    <motion.div
            className="w-full xl:w-1/2 rounded-3xl leading-9 mr-3 p-6 text-[26px] bg-gradient-radial from-[#6B7D7F] to-[#3B464A]"
            initial={{ scale: 0.1, y: 100, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
          >
            <div className="md:pr-32">
              <WordPopping className='mr-1' phrase="Dine Vista ensures to satisfy your hunger wherever you may find yourself." />
            </div>
            <p className="text-lg pt-10">
              With an extensive selection of cuisines from all corners of India,
              spanning from North to South and East to West, there's something
              to tantalize every taste bud. Simply tap to locate your preferred
              restaurant at your convenience and treat yourself to a delightful
              meal. For payments, easily redeem your coins using the Plateup
              card or app.
            </p>
          </motion.div>
  )
}

export default ShortBrief
