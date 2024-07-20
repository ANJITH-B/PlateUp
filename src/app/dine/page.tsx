"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import MovingText from "./Components/MovingText";
import AnimatedText from "./Components/TextPoping";
import ShortBrief from "./Components/ShortBrief";
import Image from "next/image";
import F1 from "./assets/images/f1.png";
import F2 from "./assets/images/f2.png";
import Redeem from "./assets/images/Redeem.png";
import Logo from "./assets/images/logo 1.png";
import MealExpress from "./assets/images/MealExpress.png";
import TextOpacityOnScroll from './Components/TextOpacityOnScroll'

const pharses = [
  "Dine Vista!",
  "We're committed to making",
  "Dining out a Delightful",
  "Experience for you",
];

const Page: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const contain = useRef<HTMLDivElement>(null);

  return (
    <main className="px-40">
      <div
        ref={container}
        className="h-full w-full flex flex-col items-center  pt-[16vh] "
      >
        <AnimatedText text="Introducing Dine VISTA" delay={0} />
        <AnimatedText text="Discover the Joy of Dining Out" delay={1.5} />
        <MovingText container={container} />
      </div>

      <div className="h-full w-full ">
        <div className="flex flex-row justify-between pt-[10vh]">
          <div className="h-full text-[42px] leading-tight flex flex-col items-start">
            {pharses.map((pharse, index) => (
              <ShortBrief key={index} phrase={pharse} />
            ))}
          </div>
          <p className=" text-[22px] ">
            free from worries about payments or stress.
            <br /> With just a tap, indulge in a variety of cuisines <br /> at
            various styles of restaurants, all without <br />
            fretting about the payments
          </p>
        </div>


        <div ref={contain} className="flex flex-row w-full pt-[10vh] rounded-3xl">
          <motion.div
            className=" w-1/2 rounded-3xl leading-9 mr-3 p-6 text-[26px] bg-gradient-radial from-[#6B7D7F] to-[#3B464A]"
            initial={{ scale: 0.1, y: 100, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration:0.5}} 
          >
            <div className="pr-32">
              <ShortBrief phrase="Dine Vista ensures to satisfy your hunger wherever you may find yourself." />
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
          <div className="flex flex-row w-1/2">
            <motion.div className="bg-gradient-radial to-[#EAB33E]  from-[#FFCC5F] p-10 w-full rounded-3xl mr-3"
            initial={{ scale: 0.1, y: 150, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ ease: [0.65, 0, 0.35, 1] ,duration: 1}} >
              <div data-scroll data-scroll-speed={0.1}>
              <motion.div className="div" initial={{scale:0,opacity:0.4}} viewport={{once:false}} exit={{scale:0, opacity:0}} transition={{delay:1}} whileInView={{scale:1, opacity:1}}>
              <Image src={F1} width={200} height={200} alt="food one" />
              </motion.div>       
                {/* <Image src={F2} width={200} height={200} alt="food one"/> */}
              </div>
            </motion.div>
            <motion.div className="bg-[#D9D9D9] w-full rounded-3xl"
            initial={{ scale: 0.1, y: 100,x:-100,  opacity: 0 }}
            whileInView={{ scale: 1, y: 0,x:0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ ease: [0.65, 0, 0.35, 1] ,duration:1.5}} >
              .
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row w-full pt-[1vh] rounded-3xl">
          <motion.div
            className="flex flex-col justify-between w-1/2 rounded-3xl leading-9 mr-3 p-1 pt-10 text-[46px] bg-gradient-radial font-bold"      >
            <Image src={Redeem} alt="" width={150} height={100} />
            <div className="w-full flex flex-col items-start">
            <Image src={Logo} alt="" width={150} height={100} className="absolute -10" />
             <div className="pt-12">
               <AnimatedText text="REDEMPTION" delay={0} />
              </div>
            </div>
          </motion.div>
          <div className="flex flex-row w-1/2">
            <motion.div className="bg-gradient-radial to-[#EAB33E]  from-[#FFCC5F] p-10 w-full rounded-3xl mr-3"
             initial={{ scaleY: 0, height:-100 , y: -50, opacity: 0.5 }}
             whileInView={{ scaleY: 1,height:300, y: 0, opacity: 1 }}
             viewport={{once:false, }}
             transition={{ ease: [0.65, 0, 0.35, 1] ,duration:1.5}}>
              <motion.div className="div" initial={{scale:0,opacity:0.4}} viewport={{once:false}} exit={{scale:0, opacity:0 ,transition: { delay: 0 }}}  whileInView={{scale:1, opacity:1, transition: { delay: 1 }}}>

              <Image src={F1} width={200} height={200} alt="food one" />
              </motion.div>
              {/* <Image src={F2} width={200} height={200} alt="food one"/> */}
            </motion.div>
            <motion.div className=" w-full rounded-3xl"></motion.div>
          </div>
        </div>
      </div>
      <div className="text-[28px] leading-9 w-full pr-80 pt-[10vh]">
        <TextOpacityOnScroll contain={contain} 
        phrase = "Plateup redemption is versatile, and applicable in both corporate settings and various restaurants, alleviating any concerns about payments. Redeemable at all non-alcoholic restaurants, whether for orders at your workplace or dining out, it ensures seamless transactions and hassle-free experiences"/>
      </div>







      <div className="flex flex-col pt-[10vh]">
        <div className="flex flex-row justify-between">
          <div className="text-4xl"><ShortBrief phrase="Offercs Dine !"/></div>
          <motion.div className="div" initial={{scale:0,opacity:0.4 }} viewport={{once:false}} exit={{scale:0, opacity:0, transition:{delay:0}}} whileInView={{scale:1, opacity:1,transition:{delay:1}}}>
              <Image src={MealExpress} width={80} height={70} alt="food one" />
              </motion.div>
        </div>
        <div className="w-full pt-5">
          
        <motion.hr initial={{width:5}} whileInView={{width:1150}} exit={{width:0}} transition={{duration:1}} className="bg-gray-200"/>
        </div>
      </div>


      <div className="h-full w-full pt-[8vh]">
        <div className="flex flex-row h-[60vh]">
          <div className="flex flex-row items-center w-[40vw] bg-red- text-2xl pr-16">
            <ShortBrief phrase='We eliminate the hassle of searching for meals on expensive delivery apps and the constraints of traditional cafeteria choices.'/></div>
          <div className="flex flex-col w-full">
            <div className="w-full h-full my-5 p-6 border inner rounded-3xl bg-[#D9D9D9]">
              <div className="w-full bg-black h-full">.</div>
            </div>
            <div className="w-full h-full my-5 bg-blue-400">h</div> 
          </div>
        </div>
        <div className="flex flex-row h-[30vh]">
          <div className="w-[40vw] bg-blue-400">h</div>
          <div className="flex flex-col bg-green-400 w-full">
            <div className="w-full h-full bg-[#D9D9D9]">h</div>
          </div>
        </div>
        <div className="flex flex-row h-[30vh]">
          <div className="w-[40vw] bg-red-400">h</div>
          <div className="flex flex-col bg-green-400 w-full">
            <div className="w-full h-full bg-green-400">h</div>
          </div>
        </div>
      </div>


      <div className="flex flex-col pt-[10vh]">
        <div className="flex flex-row justify-between">
          <div className="text-4xl"><ShortBrief phrase="Offercs Dine !"/></div>
          <motion.div className="div" initial={{scale:0,opacity:0.4 }} viewport={{once:false}} exit={{scale:0, opacity:0, transition:{delay:0}}} whileInView={{scale:1, opacity:1,transition:{delay:1}}}>
              <Image src={MealExpress} width={80} height={70} alt="food one" />
              </motion.div>
        </div>
        <div className="w-full pt-5">
          
        <motion.hr initial={{width:5}} whileInView={{width:1150}} exit={{width:0}} transition={{duration:1}} className="bg-gray-200"/>
        </div>
      </div>
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
