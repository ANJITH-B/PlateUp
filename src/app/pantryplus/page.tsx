"use client";
import Image from "next/image";
import Phone from "./assets/Mask group (20).png";
import React from "react";
import Cauliflower from "./assets/cauliflower.png";
import leaf from "./assets/leaf.png";
import WordPopping from "./components/WordPopping";
import SectionHeading from "../dinevista/Components/SectionHeading";
import GroceryCard from "./components/GroceryCard";
import GrocerySection from "./components/GrocerySection";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Description from "./components/Description";
import FramEssetnals from "./components/FramEssetnals";
import { container } from "./animation";
import FAndQWhy from "./components/F&QWhy";
import FAndQHow from "./components/F&QHow";
import FAndQWhat from "./components/F&QWhat";
import ShopCard from "./components/RestaurantCard";
import StepOne from "./components/StepOne";
import { Outfit } from "next/font/google";
import { useMediaQuery } from "react-responsive";

const outfit = Outfit({
  weight: ['200', '300','400','600','900'],
  subsets: ['latin'],
});

function page() {
  const sm = useMediaQuery({ maxWidth: 768 });
  const md = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { scrollYProgress } = useViewportScroll();
  const moveDown = useTransform(scrollYProgress, [0, 1], [40, 500]);
  const moveDown1 = useTransform(scrollYProgress, [0, 1], [-200, 120]);
  const moveDown3 = useTransform(scrollYProgress, [0, 1], [-200, 30]);
  const moveDown2 = useTransform(scrollYProgress, [0, 1], [sm ? -250 : 0 , sm ? -90 : 380]);

  return (
    <main className="w-full flex flex-col items-center bg-[#030303]">
      <div className="px-5 md:px-10 lg:px-20 xl:px-[20px] w-full max-w-screen-xl relative overflow-hidden" >
        <div className=" w-full mt-[100px] sm:mt-32 min-h-[300px] h-[42vh] ">
          <GrocerySection />
        </div>
        <div className="flex w-full pt-16 sm:pt-16 md:pt-28 gap-5">
          <Description />
        </div>
        <div className="w-full h-full flex flex-col md:flex-row pt-16 sm:pt-28 ">
          <div className="flex w-full  lg:w-2/3 flex-col items-start pb-10 md:pb-0 pr-0 md:pr-10 lg:pr-16 gap-5 text-[26px] sm:text-3xl text-[#FBFEE1]">
            <WordPopping leading="mr-1 mb-0" phrase="Fresh Finds, Big Savings" />
            <motion.p variants={container} className="text-medium sm:text-lg md:text-2xl text-[#fbfee1d8] font-oufit "  >
              Get the freshest farm produce delivered straight to your door! Enjoy
              30% off on crisp vegetables, quality staples, bread, milk, veggies,
              and pulses. Your farm-fresh pickup is just a click away
            </motion.p>
          </div>
          <FramEssetnals />
        </div>
        <div className="flex flex-row lg:flex-row pt-10 md:pt-24 lg:pt-28">
          <div className="w-full md:w-2/3 h-full flex flex-row items-start">   
            <p className={`${outfit.className} font-semibold lg:font-bold text-[45px] md:text-[65px] lg:text-[100px] text-[#FBFEE1] z-10 text-right leading-tight`}>
              HOW <span className="text-black">..</span> THIS<br></br> WORKS
            </p>
          </div>
          <div className="md:block hidden w-1/3 h-[330px] md:h-[360px] lg:h-[380px]"><StepOne /></div>
        </div>
          <div className="block md:hidden ">
            <div className="flex">
              <div className="w-1/2 md:w-2/3 h-1/2">  </div>
              <div className="w-1/2 md:w-1/3 md:h-[330px] lg:h-[380px]"><StepOne /></div>
            </div>
          </div>
         
        <div className="flex flex-row py-2 md:py-3 lg:py-5 gap-2 md:gap-3 lg:gap-4">
          <div className="hidden md:block w-1/3 p-5"> </div>
          <div className="w-1/2 md:w-1/3 rounded-3xl bg-[#77A964]  p-2 pb-4 sm:pb-2 md:px-3 md:pb-3 lg:p-5">
            <p className="font-black leading-none font-outfit text-[80px] lg:text-[100px] p-0 text-black text-left">3</p>
            <p className="text-medium sm:text-xl md:text-xl text-black md:pt-2 font-bold">
              Weekend Savings
            </p>
            <p className="text-sm md:text-medium lg:text-lg leading-5 md:leading-5 text-black pt-1 md:pt-2">
              Unlock exclusive discounts of 15% to 30% on all purchases every
              Friday through Sunday. Also, take part in monthly contests for a
              chance to win exciting prizes. Experience the benefits of smart
              shopping with Pantry Plus.
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 min-h-[345px] md:h-[330px] lg:h-[380px]  z-10 rounded-3xl bg-[rgba(118,151,105,0.5)] backdrop-blur-sm backdrop-opacity-1 p-2 pb-2 md:px-3 md:pb-4 lg:p-5">
            <p className="font-black leading-none font-outfit text-[80px] lg:text-[100px] p-0 text-white text-left">2</p>
            <p className=" text-lg sm:text-xlfont-bold text-white md:pt-2">Variety Hub</p>
            <p className="text-sm md:text-medium lg:text-lg leading-5 md:leading-5 text-[#FBFEE1] pt-1 md:pt-2 ">
              Discover a diverse assortment of fresh vegetables, dairy products,
              and more to fulfill your requirements. Explore our extensive range
              of selections and conveniently locate all your essentials in one
              place.
            </p>
          </div>
          <div className="absolute  w-full z-0 items-end pr-6 flex flex-col justify-end">
            <motion.div style={{ y: moveDown, }}  className=" lg:pr-6" >
              <Image src={Cauliflower} alt="cauliflower" width={200} height={200} />
            </motion.div>
            <motion.div style={{ y: moveDown3, rotateX: 180 }} className=" blur-sm lg:pr-0" >
              <Image src={leaf} alt="cauliflower" width={100} height={100} />
            </motion.div>
            <motion.div style={{ y: moveDown1 }} className=" lg:pr-0" >
              <Image src={leaf} alt="cauliflower" width={150} height={150} />
            </motion.div>
            <motion.div style={{ y: moveDown2, rotate: 90 }} className="hidden md:block lg:pr-60">
              <Image src={leaf} alt="cauliflower" width={200} height={200} />
            </motion.div>
          </div>
          

        </div>

        <div className="flex flex-row pt- gap-2 md:gap-3 lg:gap-4 ">
          <div className="w-1/2 md:w-1/3 min-h-[300px] md:h-[330px] lg:h-[380px] rounded-2xl bg-[#CDE0B5] p-2 pb-4 sm:pb-2 md:px-3 md:pb-4 lg:p-5">
            <p className="font-black leading-none font-outfit text-[80px] lg:text-[100px] p-0 text-black text-left">4</p>
            <p className="text-lg sm:text-xl text-black pt-0 lg:pt-2 font-bold">
              Coverage Areas
            </p>
            <p className="text-sm md:text-medium lg:text-lg leading-5 md:leading-6 text-black pt-1 md:pt-2">
              Experience the convenience of real-time availability both online and
              in-store, serving Mumbai, Pune, Bangalore, Gurgaon, and beyond
              essentials in one place.
            </p>
          </div>
          <div className="hidden md:block w-1/2 md:w-1/3 h-[345px] md:h-[330px] lg:h-[380px]">
            <div className=" w-full h-full flex items-start justify-end rounded-3xl bg-gradient-to-tr to-[#77A964] from-[#CDE0B5] ">
              <Image src={Phone} alt="..." className="w-60 " />
            </div>
          </div>
          <div className="hidden md:block w-1/3 p-5"> </div>
        </div>

        {/* 02 PlateUp Fresh! */}

        <SectionHeading heading="Plateup Fresh !" mealExpressIcon={false} />
        <div className="h-full md:h- w-full pt-[3vh] flex flex-col md:flex-row">
          <motion.div className="hidden lg:block w-2/5">
            <div className="flex flex-col gap-5 w-full h-full">
              <motion.p variants={container} initial="initial" whileInView="visible" className="text-xl font-light flex items-start">
                {" "}
                <WordPopping leading="mr-1 mb-0" phrase="Near SuperMarkets" />
              </motion.p>
              <ShopCard />
            </div>
          </motion.div>
          <div className=" w-full lg:w-3/5 h-[910px] md:h-[700px] pb-10 md:pb-20 ">
            <p className="text-xl font-light pb-[3vh] flex items-start">
              <WordPopping leading="mr-1 mb-0" phrase="Popular this week" />
            </p>
            <GroceryCard />
          </div>
        </div>

        {/* 03 FAQ  */}

        <SectionHeading
          heading="Frequently asked questions !"
          mealExpressIcon={false}
        />
        <div className="h-full w-full py-[4vh] md:pt-[8vh] ">
          <div className="flex flex-row gap-3">
            <div className="hidden md:block w-2/6">
              <div className="flex flex-col w-full gap-3">
                <div className="w-full h-[300px] flex items-start justify-end">
                  <FAndQWhy />
                </div>
                <div className="w-full h-[300px]">
                  <FAndQHow />
                </div>
              </div>
            </div>
            <div className="md:w-4/6 flex flex-row items-end justify-start">
              <FAndQWhat />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
