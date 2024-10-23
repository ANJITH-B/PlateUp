import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from 'next/image'
import Card from '../assets/images/Card.png'


const GetCard: React.FC = () => {
  const height = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target : height,
    offset: ['start start', 'end end']
  })

  const rotation = useTransform(scrollYProgress, [0, 1], [100, -260]);
  
  return (
    <motion.div
      className="bg-[#D9D9D9] text-black w-full h-96 md:h-full rounded-3xl flex flex-col items-center justify-center "
      initial={{ scale: 0.1, y: 100, x: -100, opacity: 0 }}
      exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
      whileInView={{ scale: 1, opacity: 1 ,x: 0,y :0  , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2}}}
      viewport={{ amount: 0.2 }}
  
    >
      <div className="w-full h-full flex flex-row items-start justify-between p-5">
        <div className="flex flex-col items-start justify-center">
          <div className="text-sm font-light "> <p>Now Avaiable</p></div>
          <div className="font-bold text-2xl"><p>Get Your Free Card</p></div>
        </div>
        <motion.svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_364_209)">
          <rect x="41" y="4" width="37" height="37" rx="17" transform="rotate(90 41 4)" fill="#E46E27"/>
          <rect x="41" y="4" width="37" height="37" rx="17" transform="rotate(90 41 4)" fill="#DB671C"/>
          <path d="M33.7591 24.4131C34.1219 24.0381 34.3257 23.5297 34.3257 22.9997C34.3257 22.4697 34.1219 21.9614 33.7591 21.5864L26.4534 14.0411C26.0899 13.6659 25.597 13.4551 25.0829 13.4551C24.5689 13.4551 24.0759 13.6659 23.7125 14.0411C23.349 14.4162 23.1448 14.9251 23.1448 15.4557C23.1448 15.9863 23.349 16.4952 23.7125 16.8704L27.7115 20.9997L12.8121 20.9997C12.2982 20.9997 11.8054 21.2104 11.4421 21.5855C11.0787 21.9606 10.8746 22.4693 10.8746 22.9997C10.8746 23.5302 11.0787 24.0389 11.4421 24.4139C11.8054 24.789 12.2982 24.9997 12.8121 24.9997L27.7115 24.9997L23.7125 29.1277C23.5325 29.3135 23.3897 29.534 23.2923 29.7768C23.1949 30.0195 23.1448 30.2797 23.1448 30.5424C23.1448 30.8051 23.1949 31.0653 23.2923 31.308C23.3897 31.5507 23.5325 31.7713 23.7125 31.9571C23.8924 32.1428 24.1061 32.2902 24.3412 32.3907C24.5764 32.4913 24.8284 32.543 25.0829 32.543C25.3374 32.543 25.5895 32.4913 25.8246 32.3907C26.0598 32.2902 26.2734 32.1428 26.4534 31.9571L33.7591 24.4131Z" fill="#FBFEE1"/>
          </g>
          <defs>
          <filter id="filter0_d_364_209" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_364_209"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_364_209" result="shape"/>
          </filter>
          </defs>
        </motion.svg>
      </div>
      <motion.div className="absolute pl-20"
          initial={{ scale: 0, opacity: 0.4, }}
          style={{y:rotation}}
          viewport={{ once: true }}
          exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
          whileInView={{ scale: 1, opacity: 1 ,x: -55 , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.3 ,duration: 0.2}}}>
      <Image src={Card} alt='' width={150} height={150} />
      </motion.div>
      <svg className="absolute mt-40 px-5" width="355" height="11" viewBox="0 0 355 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M355 5.5L5 5.5" stroke="url(#paint0_linear_364_202)" stroke-width="5"/>
        <circle cx="5.5" cy="5.5" r="5.5" fill="black"/>
        <defs>
        <linearGradient id="paint0_linear_364_202" x1="5" y1="2.5" x2="355" y2="2.5" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#666666" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>
      <p className="p-5 pb-4 text-sm z-10">free from worries about payments or stress. With just a tap, indulge in a variety of cuisines at various styles of restaurants</p>
    </motion.div>
  );
};

export default GetCard;
