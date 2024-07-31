import React from 'react'
import {motion } from 'framer-motion'
import Image from 'next/image'
import N1 from '../assets/images/01.png'
import WordPopping from './WordPopping'


const OffersCardOne:React.FC = () => {
  return (
    <div className="w-full h-1/2 my-5 p-6 border inner rounded-3xl bg-[#D9D9D9] overflow-hidden">
      <div className="w-full h-full overflow-hidden flex flex-row">
        <div className=" pt-6 ">
          <Image src={N1} alt="" width={200} height={200} />
        </div>
        <div className=" p-8">
          <div className="text-black font-semibold leading-3 flex flex-col items-start justify-between">
            <div className="flex flex-row pb-2">
              <WordPopping phrase="INDULGE" /> <br className=''/>
                <span className="text-[#D9D9D9] bg-red-">.......</span>
            </div>
            <WordPopping phrase="YOUR" /> <br />
            <WordPopping phrase="TASTE BUDS" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="pt-3 text-gray-600 leading-5">
              this week with the rich flavors of Punjabi Grill, savoring
              each bite to the fullest
            </p>
            <svg width="30"  height="30" viewBox="0 0 30 30" fill="none"  xmlns="http://www.w3.org/2000/svg" >
              <path d="M2 28L28 2M28 2V28M28 2H2" stroke="#999999" stroke-width="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersCardOne
