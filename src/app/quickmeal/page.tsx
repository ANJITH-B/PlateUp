'use client';
import React from 'react';
import WordPopping from './components/WordPopping';
import { motion } from 'framer-motion';
import DrawingSVG from './components/ReadyToRedeemSvg';
import MealCard from './components/MealCard';
import SectionHeading from '../dine/Components/SectionHeading'
import FAndQHow from './components/F&QHow';
import FAndQWhy from './components/F&QWhy';
import FAndQWhat from './components/F&QWhat';
import { container } from './animation'
import CardBox from './components/CardBox';
import SatisfyCard from './components/SatisfyCard';
import RestaurantCard from './components/RestaurantCard';
import RotatingSvg from './components/RotatingSvgElement';
import MirrorCard from './components/MirrorEffectCard';
import RestaurantCount from './components/RestaurantCount';


function Page() {



  return (
    <main className="px-5 md:px-20 lg:px-40 xl:px-40 w-full bg-[#030303] relative overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full lg:h-screen items-center  " >
        <div className="w-full md:w-4/6 h-full flex flex-col items-start justify-between gap-3 md:gap-5 pt-32 pb-10" >
          <p className="font-extrabold text-3xl md:text-5xl text-[#FBFEE1] md:w-[50vw] md:leading-normal">
            <WordPopping phrase="Indulge in a World of Flavors Without Worrying about the Bill" />
          </p>
          <p className="pt-3 my-auto md:text-lg font-light text-[#FBFEE1] md:w-[30vw] leading-relaxed">
            <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
          </p>
          <div className="flex flex-row items-end"> <SatisfyCard/> <DrawingSVG/> </div>
        </div>
        <div className=" w-full md:w-2/6 h-full flex flex-col items-end md:justify-between gap-5 md:pt-32 pb-10">
          <div className="md:block hidden w-full h-full"><RotatingSvg/></div>
          <div className="md:block hidden w-full h-full"><MirrorCard/></div>
           <RestaurantCount/> 
        </div>
      </div>

      {/* // 02 TEXT SECTION */}

      <div className="h-full lg:h-screen w-full" >
        <motion.div variants={container} initial="initial" whileInView="visible" className="h-1/2 w-full flex flex-row justify-between items-center gap-3 md:gap-5">
          <p className="pt-3 text-xl md:text-4xl text-[#FBFEE1] w-full h-[30vh] leading-6 md:leading-10">
            <WordPopping phrase="Introducing Plateup, where workplace dining is revolutionized with a diverse range of cuisines " />
          </p>    
          <p className="md:block hidden pt-3 text-2xl text-[#FBFEE1] w-full h-[30vh] leading-8 ">
            <WordPopping phrase="We eliminate the hassle of searching for meals on expensive delivery apps and the constraints of traditional cafeteria choices." />
          </p>
          <p className="pt-3 text-xs md:text-lg font-light text-[#FBFEE1] w-full h-[30vh] leading-4 md:leading-relaxed">
            <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
          </p>
        </motion.div>
        <CardBox/>
      </div>

      {/* // 04 BUYING */}

      <SectionHeading heading='Plateup Fresh !' mealExpressIcon={true} />
      <div className="h-full w-full pt-[3vh] flex flex-col md:flex-row">
        <motion.div  className="hidden md:block w-2/5">
        <div className="flex flex-col gap-5 w-full">
          <motion.p variants={container} initial='initial' whileInView="visible" className="text-xl font-light flex items-start"> <WordPopping phrase='Near SuperMarkets'/></motion.p>
          <RestaurantCard/>
        </div>
        </motion.div>
        <div className=" w-full md:w-3/5 h-full ">
          <p className="text-xl font-light pb-[3vh] flex items-start"><WordPopping phrase='Popular this week' /></p>
          <MealCard/>
        </div>
      </div>

      {/* // 05 F&Q */}

      <SectionHeading heading="Frequently asked questions !" mealExpressIcon={false}/>
      <div className="h-full w-full py-[4vh] md:pt-[10vh] ">
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

    </main>
  );
}

export default Page;
