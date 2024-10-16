import React from 'react';
import { motion} from 'framer-motion'
import WordPopping from './WordPopping'
import { Outfit } from 'next/font/google';
import { container } from '../animation';

const outfit = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const Description: React.FC = () => {
    
  return (
    <motion.div variants={container} whileInView='visible' initial='initial' className='flex'>
        <div className="text-[25px] font-semibold w-1/2 text-[#FBFEE1]">
          <div className="flex flex-col gap-4 w-full items-start">
            <WordPopping phrase="Experience the freedom of GROCERY shopping without the hassle of payment" />
            <div className="text-xl font-medium">
              <WordPopping phrase="Get Download the app" />
            </div>
            <div className="flex flex-row">
              <button className="bg-green-50 rounded-md text-black text-sm px-4 py-2">play Store</button>
            </div>
          </div>
        </div>
        <motion.p variants={container} whileInView='visible' initial='initial' className={`${outfit.className} w-1/2 text-xl text-[#FBFEE1]`}>
          No more waiting for your salary to be credited! With Pantry Plus, you
          can easily redeem and get your essential daily needs right at your
          home. Enjoy convenience and peace of mind, knowing that your pantry is
          always stocked
        </motion.p>
    </motion.div>
  );
};                          

export default Description;

