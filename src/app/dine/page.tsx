"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MovingText from "./Components/MovingText";
import WordPopping from "./Components/WordPopping";
import TextOpacityOnScroll from "./Components/TextOpacityOnScroll";
// import { Outfit } from "@next/font/google";
import FrameCalendar from "./Components/Calendar";
import SubContent from "./Components/SubContent";
import ShortBrief from "./Components/ShortBrief";
import RestaurantThemesCardOne from "./Components/RestaurantThemesCardOne";
import GetCard from "./Components/GetCard";
import Redemption from "./Components/Redemption";
import RestaurantThemesCardTwo from "./Components/RestaurantThemesCardTwo";
import SectionHeading from "./Components/SectionHeading";
import OffersCardOne from "./Components/OffersCardOne";
import OffersCardTwo from "./Components/OffersCardTwo";
import OffersCardThree from "./Components/OffersCardThree";
import OffersCardFour from "./Components/OffersCardFour";
import TimeFrame from "./Components/TimeFrame";
import RestaurantCard from "./Components/RestaurantCard";
import FAndQWhy from "./Components/F&QWhy";
import FAndQHow from "./Components/F&QHow";
import ModalTimeFrame from "./Components/ModalTimeFrame";
import FAndQWhat from "./Components/F&QWhat";
import TiltCard from "./Components/3dEffectPhone";
import Image from 'next/image'
import PhoneSM from './assets/images/phoneSM.png'


// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

const Page: React.FC = () => {
  const contain = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full flex flex-col items-center bg-[#030303]">
      <div  className="px-5 md:px-16 lg:px-20 xl:px-[20px] w-full max-w-screen-xl relative overflow-hidden" > 
      <motion.div 
        initial={{ rotate:0 ,opacity:0, scale:0 }} viewport={{once:true}} whileInView={{ rotate: -30, opacity:1, scale:1}} transition={{delay:2}} 
        className="md:block hidden items-center justify-center absolute w-full md:w-900px h-full ml-[30vh] z-10 overflow-hidden">
        <TiltCard/>
      </motion.div> 
      <motion.div 
        initial={{opacity:0, scale:0 }} viewport={{once:true}} whileInView={{ opacity:1, scale:1}} transition={{delay:2}} 
        className="block md:hidden items-center justify-center absolute z-10 w-full h-full pt-[30vh]">
        <Image alt="error @ Image phone sm screen" src={PhoneSM} width={400} height={400}/>
      </motion.div> 
      <div className="">
        <div className="h-full w-full flex flex-col items-center pt-[16vh] ">
          <MovingText />
        </div>
      </div>
      
      <div className="h-full w-full ">
        <SubContent/>
        
        <div ref={contain} className="flex flex-col md:flex-row w-full pt-[10vh] rounded-3xl gap-2 md:gap-0" >
          <ShortBrief/>
          <div className="md:hidden block"><GetCard/></div>
          <div className="flex flex-row md:w-1/2 gap-2 md:gap-3">
            <div className="w-[75vw] h-full block md:hidden"></div>
            <RestaurantThemesCardOne />
            <div className="h-full w-full hidden md:block"><GetCard/></div>
          </div>
        </div>
        <div className="flex flex-row w-full pt-[1vh] rounded-3xl">
          <Redemption/>
          <div className="flex flex-row w-1/2 gap-2 md:gap-3">
            <RestaurantThemesCardTwo/>
            <motion.div className="hidden md:block w-full rounded-3xl"></motion.div>
          </div>
        </div>
      </div>
      <div className="text-md md:text-[28px] leading-6 md:leading-9 w-full md:pr-80 pt-[10vh]">
        <TextOpacityOnScroll
          contain={contain}
          phrase="Plateup redemption is versatile, and applicable in both corporate settings and various restaurants, alleviating any concerns about payments. Redeemable at all non-alcoholic restaurants, whether for orders at your workplace or dining out, it ensures seamless transactions and hassle-free experiences"
        />
      </div>

      {/* 01 DINE OFFERS */}

      <SectionHeading heading='DineOffers!' mealExpressIcon={true} />
      <div className="h-full w-full pt-[8vh]">
        <div className="flex flex-row h-[60vh]">
          <div className="hidden md:block h-full w-[40vw] pr-16 ">
          <div className="h-full flex flex-row items-center w-full text-2xl  text-[#FBFEE1]">
            <WordPopping phrase="We eliminate the hassle of searching for meals on expensive delivery apps and the constraints of traditional cafeteria choices." />
          </div>
          </div>
          <div className="flex flex-col w-full">
            <OffersCardOne/>
            <OffersCardTwo/>
          </div>
        </div>
        <OffersCardThree/>
        <OffersCardFour/>
      </div>

      {/* 02 BOOK YOUR SLOTS */}

      <SectionHeading heading='Book Your Slots!' mealExpressIcon={false} />
      <div className="pt-[3vh]"> <ModalTimeFrame /> </div>
      <div className="h-full w-full pt-[3vh] flex flex-col md:flex-row">
        <div className="hidden lg:block w-2/5">
        <div className="flex flex-col gap-5 w-full">
          <p className="text-xl font-light"> Select your time frame</p>
          <FrameCalendar />
          <TimeFrame />
        </div>
        </div>
        <div className="w-full lg:w-3/5 h-full ">
          <p className="text-xl font-light pb-[3vh]"> 
            Available at this time frame
          </p>
          <RestaurantCard/>
        </div>
      </div>

      {/* F&Q */}

      <SectionHeading heading="Frequently asked questions !" mealExpressIcon={false}/>
      <div className="h-full md:h-screen w-full py-[4vh] md:pt-[10vh]">
        <div className="flex flex-row gap-3">
          <div className="hidden md:block w-2/6">
          <div className="flex flex-col w-full gap-3">            
            <div className="w-full h-[300px] flex items-start justify-end"><FAndQWhy/></div> 
            <div className="w-full h-[300px]"><FAndQHow/></div>    
          </div> 
          </div>
          <div className="md:w-4/6 flex flex-row items-end justify-start"><FAndQWhat/></div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Page;










//             <span className="text-[#E46E27] from-cyan-500 to-blue-500 bg-clip-text">
