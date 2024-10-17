import React from 'react';
import { motion } from 'framer-motion'
import WordPopping from './WordPopping'
import { Outfit, Questrial } from 'next/font/google';
import { container } from '../animation';

const questrial = Questrial({
  weight: '400',
  subsets: ['latin']
})
const outfit = Outfit({
  weight: ['200', '300'],
  subsets: ['latin'],
});

const Description: React.FC = () => {

  return (
    <motion.div variants={container} whileInView='visible' initial='initial' className='flex'>
      <div className="text-[25px] font-semibold w-1/2 text-[#FBFEE1]">
        <div className="flex flex-col gap-5 md:gap-4 w-full items-start">
          <div className={`${questrial.className} text-xl md:text-4xl mr-5`}><WordPopping leading="md:mb-2 lg:mb-3" phrase="Experience the freedom of Grocery shopping without the hassle of payment" /></div>
          <div className="md:hidden block"><AppLink/></div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 md:gap-4 w-1/2">
        <motion.p variants={container} whileInView='visible' initial='initial' className={`${outfit.className}  pl-4 md:pl-0 text-lg md:text-2xl text-[#fbfee1d8]`}>
          No more waiting for your salary to be credited! With Pantry Plus, you
          can easily redeem and get your essential daily needs right at your
          home. Enjoy convenience and peace of mind, knowing that your pantry is
          always stocked
        </motion.p>
        <div className="hidden md:block"><AppLink/></div>
      </div>
    </motion.div>
  );
};

const AppLink: React.FC = () => {
  return (
    <main className='gap-5 md:gap-4 flex flex-col'>
      <div className={`${outfit.className} text-medium md:text-xl font-light`}>
        <WordPopping leading="mb-0 mr-1" phrase="Get Download the app" />
      </div>
      <div className="flex flex-row">
        <button className="bg-green-50 rounded-md text-black text-sm px-4 py-2">play Store</button>
      </div>
    </main>
  )
}
export default Description;

