"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import {Card} from "@/components/plateup-card";

export const ContainerScroll = () => {
  
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [0,0.5],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [1.0, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      className="min-h-[90rem] flex items-center justify-center relative p-2 md:p-16"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1800px",
        }}
      ><Tablet
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  );
};

export const Tablet = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  
  const tabRef = useRef<any>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  return (<>
    <motion.div
      ref={tabRef}
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto h-[35rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] p-0 bg-[#181818] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-y-scroll rounded-2xl scrollbar-hide">
      {/* <motion.div className="h-full w-full text-black gap-4 p-4 z-30">
        <iframe src={`./brochure.pdf`} className="rounded-[18px] lg:block" style={{height:"100%",width:"100%"}}></iframe>
      </motion.div> */}
      <motion.div className="flex flex-row flex-wrap justify-evenly h-full w-auto rounded-2xl bg-black text-white gap-4 m-4 z-30">
        <div className="min-h-[50vh] w-full flex justify-center items-center">
          <Card/>
        </div>
        <motion.div 
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{type:'keyframes', duration:1, times:[0, 0.2, 0.5, 0.8, 1], ease: "easeInOut"}}
        className="min-h-[50vh] flex justify-start items-center w-full">
        <p className="text-start text-md font-primary font-medium container mx-auto px-2 w-[90%] text-white">
        Welcome to Plateup, a pioneering platform committed to alleviating the everyday hurdles encountered by employees. Our mission is to provide seamless solutions for corporate meal plans, grocery purchases, dining out, and commuting challenges.
        At Plateup, we understand the difficulties faced by employees in managing their daily expenses. Our comprehensive service is designed to address these needs efficiently, empowering employees to redeem their allowances effortlessly. This grants them the flexibility to purchase meals, commute, or buy groceries without unnecessary complications.
        With Plateup, employees enjoy a hassle-free experience, enabling them to focus on what truly matters. Join us as we revolutionize the way employees manage their daily expenses, one meal at a time.
        </p>
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
    <div className="flex w-full justify-center mt-4">
      <a href="https://drive.google.com/file/d/11zAm_ubXkxG0Z6qPHojHfnlcjOHYIW9G/view?usp=sharing" target="_blank" >
        <Button className="font-black text-sm px-4 w-fit">Download Brochure</Button>
      </a>
    </div>
  </>
  );
};
