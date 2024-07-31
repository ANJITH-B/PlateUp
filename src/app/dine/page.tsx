"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MovingText from "./Components/MovingText";
import AnimatedText from "./Components/TextPoping";
import WordPopping from "./Components/WordPopping";
import Image from "next/image";
import N1 from "./assets/images/01.png";
import N2 from "./assets/images/02.png";
import N0 from "./assets/images/0.png";
import N3 from "./assets/images/3.png";
import N4 from "./assets/images/04.png";
import hotel1 from "./assets/images/hotel1.png";
import hotel2 from "./assets/images/hotel2.png";
import MealExpress from "./assets/images/MealExpress.png";
import TextOpacityOnScroll from "./Components/TextOpacityOnScroll";
import { Outfit } from "@next/font/google";
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

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Page: React.FC = () => {
  const contain = useRef<HTMLDivElement>(null);

  return (
    <main className="px-5 md:px-20 lg:px-40 xl:px-40">
      <div className="h-full w-full flex flex-col items-center pt-[16vh] ">
        <MovingText />
      </div>
      <div className="h-full w-full ">
        <SubContent/>
        <div ref={contain} className="flex flex-col md:flex-row w-full pt-[10vh] rounded-3xl gap-2 md:gap-3" >
          <ShortBrief/>
          <div className="flex flex-row w-1/2 gap-2 md:gap-3">
            <RestaurantThemesCardOne/>
            <GetCard/>
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
      {/* <div className="h-full w-full pt-[3vh] flex flex-row">
        <div className="flex flex-col gap-5 w-2/5">
          <p className="text-xl font-light"> Select your time frame</p>
          <FrameCalendar />
          <TimeFrame />
        </div>
        <div className="w-3/5 h-full ">
          <p className="text-xl font-light pb-[3vh]"> 
            Select your time frame Available at this time frame
          </p>
          <RestaurantCard/>
        </div>
      </div> */}

      {/* F&Q */}
      {/* <div className="flex flex-col pt-[10vh]">
        <div className="flex flex-row justify-between">
          <div className="text-4xl">
            <WordPopping phrase="Frequency asked questions !" />
          </div>
        </div>
        <div className="w-full pt-5">
          <motion.hr
            initial={{ width: 5 }}
            whileInView={{ width: 1150 }}
            exit={{ width: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-200"
          />
        </div>
      </div>
      <div className="h-screen w-full pt-[10vh]">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-2/6 gap-3">            
            <FAndQWhy/>
            <FAndQHow/>
          </div>   
        </div>
      </div> */}
    </main>
  );
};

export default Page;











// <p className=" text-4xl">
//             Dine
//             <span className="text-[#E46E27] from-cyan-500 to-blue-500 bg-clip-text">
//               Vista !
//             </span>
//             <br /> We're committed to making
//             <br /> Dining out a Delightful,
//             <br /> Experience for you
//</p>
