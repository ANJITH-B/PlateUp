"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AnimatedText from "./TextPoping";
import Image from "next/image";
import MealExpress from '../assets/images/MealExpress.png'
import F1 from "../assets/images/f1.png";
import C1 from "../assets/images/curry1.png";
import C2 from "../assets/images/curry2.png";
import B1 from "../assets/images/breakfast1.png";
import B2 from "../assets/images/breakfast2.png";
import S1 from "../assets/images/snacks1.png";
import S2 from "../assets/images/snacks2.png";
import D1 from "../assets/images/dinne.png";
import { useMediaQuery } from "react-responsive"; 
import { opacity } from "./WordPopping/animation";
import WordPopping from './WordPopping'
import { Alegreya , Redressed } from "next/font/google";

const redressed = Redressed({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const aegreya = Alegreya({
  weight: '800',
  style: ['italic','normal'],
  subsets: ['cyrillic-ext'],
})

const MovingText = () => {
  const paths = useRef([]);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const nativerotation = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const sm = useMediaQuery({ maxWidth: 767 });
  const md = useMediaQuery({ minWidth: 768 , maxWidth: 1024})
  
  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <div className="md:h-full w-full flex flex-col items-center overflow-hidden">
      
        <div className="flex items-center flex-col "> 
          <div className={` ${aegreya.className} font-extrabold flex flex-row md:gap-2 lg:gap-3`}>
            <AnimatedText cssClass="font-aegreya_SC text-[#FBFEE1] text-4xl" text="DINE" delay={0} />
            <AnimatedText cssClass="font-aegreya_SC italic text-orange-400 text-4xl" text="VISTA" delay={0.3} />
          </div>
          <div className="hidden md:block">
            <p className='text-[#FBFEE1] pt-5'><WordPopping className={`${redressed.className} hidden md:block md:text-5xl lg:text-7xl mr-2 `} phrase="Discover the Joy of Dining Out" delay={1.5} /></p>
          </div>
          <div className="md:hidden">
            <p className='text-[#FBFEE1]'><WordPopping className={`${redressed.className} text-4xl md:text-5xl lg:text-7xl mr-2  `} phrase="Discover the Joy " delay={1.5} /></p>
            <p className='text-[#FBFEE1]'><WordPopping className={`${redressed.className} text-4xl md:text-5xl lg:text-7xl mr-2 `} phrase="of Dining Out" delay={1.5} /></p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-end justify-end gap-3 lg:gap-5">
          <svg width="231" height="215" viewBox="0 0 251 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d='M1 14.4725C41.1667 4.30583 127 -9.9275 149 14.4725C176.5 44.9725 121.5 166.473 91.5 147.473C61.5 128.473 137.5 -8.02734 214 51.9727C275.2 99.9727 222.833 179.639 189 213.473M189 213.473H204.5M189 213.473V196.473' fillOpacity="0.7"
              stroke="white"
              strokeWidth="2" initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut", delay: 3
              }}/>
            <motion.path
              // d="M198 192.809C198.019 193.637 198.705 194.294 199.533 194.275L213.03 193.978C213.858 193.959 214.515 193.273 214.496 192.445C214.478 191.617 213.792 190.96 212.964 190.978L200.967 191.243L200.702 179.246C200.684 178.418 199.997 177.761 199.169 177.78C198.341 177.798 197.684 178.484 197.703 179.312L198 192.809ZM243.591 66.2903C253.852 94.385 242.775 125.616 228.822 150.096C221.871 162.291 214.262 172.711 208.389 180.083C205.454 183.768 202.955 186.688 201.192 188.684C200.311 189.682 199.614 190.449 199.139 190.965C198.901 191.223 198.719 191.418 198.597 191.548C198.536 191.613 198.49 191.661 198.46 191.693C198.444 191.709 198.433 191.721 198.426 191.729C198.422 191.732 198.42 191.735 198.418 191.737C198.417 191.738 198.417 191.738 198.416 191.739C198.416 191.739 198.416 191.739 199.5 192.776C200.584 193.813 200.584 193.812 200.585 193.811C200.586 193.811 200.587 193.81 200.588 193.808C200.59 193.806 200.594 193.802 200.598 193.798C200.607 193.788 200.62 193.775 200.637 193.757C200.67 193.722 200.719 193.67 200.783 193.602C200.912 193.465 201.101 193.263 201.345 192.998C201.834 192.467 202.545 191.685 203.441 190.67C205.233 188.641 207.765 185.682 210.736 181.953C216.675 174.497 224.379 163.948 231.428 151.581C245.475 126.936 257.148 94.6666 246.409 65.2612L243.591 66.2903ZM1 17.2758C1.52667 18.6803 1.52652 18.6804 1.52657 18.6804C1.52686 18.6803 1.52712 18.6802 1.5277 18.6799C1.52886 18.6795 1.53084 18.6788 1.53364 18.6777C1.53923 18.6756 1.5481 18.6723 1.56022 18.6679C1.58447 18.6589 1.62172 18.6451 1.67184 18.6268C1.77208 18.5902 1.92379 18.5352 2.1258 18.4633C2.52983 18.3196 3.13508 18.1082 3.93232 17.8405C5.52682 17.3051 7.88909 16.5446 10.9453 15.6498C17.058 13.8602 25.9446 11.5338 37.0145 9.39637C59.1585 5.12071 90.0151 1.60575 124.87 4.64107L125.13 1.65238C89.9319 -1.41285 58.7885 2.13674 36.4457 6.45077C25.2723 8.60819 16.2938 10.958 10.1023 12.7707C7.0064 13.6771 4.60676 14.4494 2.9774 14.9965C2.1627 15.2701 1.54052 15.4873 1.12011 15.6369C0.909898 15.7117 0.750126 15.7696 0.641945 15.8091C0.587855 15.8289 0.546662 15.8441 0.51851 15.8545C0.504435 15.8597 0.49362 15.8638 0.486083 15.8666C0.482314 15.868 0.479365 15.8691 0.477238 15.8699C0.476175 15.8703 0.475197 15.8706 0.474665 15.8708C0.473892 15.8711 0.473325 15.8713 1 17.2758ZM124.87 4.64107C142.101 6.14166 152.319 11.9834 157.949 19.8923C163.607 27.8414 164.854 38.1863 163.469 49.135C162.086 60.0693 158.098 71.415 153.532 81.1486C148.964 90.887 143.867 98.9074 140.342 103.194L142.658 105.099C146.383 100.571 151.605 92.3213 156.248 82.4227C160.894 72.5193 165.01 60.8609 166.446 49.5115C167.88 38.1765 166.661 26.9583 160.393 18.1526C154.096 9.30672 142.925 3.20208 125.13 1.65238L124.87 4.64107ZM140.342 103.194C133.27 111.791 121.073 119.83 111.142 122.118C106.159 123.266 102.109 122.888 99.5002 120.882C96.955 118.925 95.2936 115.026 95.9928 107.923L93.0072 107.629C92.2618 115.202 93.9407 120.392 97.6715 123.26C101.338 126.08 106.501 126.266 111.816 125.041C122.483 122.584 135.23 114.131 142.658 105.099L140.342 103.194ZM95.9928 107.923C97.4014 93.611 105.243 76.6697 116.11 61.699C126.974 46.7319 140.697 33.962 153.64 27.8566L152.36 25.1434C138.803 31.538 124.721 44.7293 113.682 59.9368C102.646 75.1407 94.4877 92.5873 93.0072 107.629L95.9928 107.923ZM153.64 27.8566C166.722 21.6858 184.103 17.264 200.704 21.3445C217.193 25.3973 233.228 37.9166 243.591 66.2903L246.409 65.2612C235.772 36.1349 219.057 22.7664 201.421 18.4312C183.897 14.1239 165.778 18.8142 152.36 25.1434L153.64 27.8566Z"
              d="M1 14.4725C41.1667 4.30583 127 -9.9275 149 14.4725C176.5 44.9725 121.5 166.473 91.5 147.473C61.5 128.473 137.5 -8.02734 214 51.9727C275.2 99.9727 222.833 179.639 189 213.473M189 "
              fill="url(#paint0_linear_345_192)"
              fillOpacity="0.7"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </svg>
          <motion.div
            initial={{ scale: 0, opacity: 0.4 }}
            viewport={{ once: false }}
            exit={{ scale: 0, opacity: 0, transition: { delay: 0 } }}
            whileInView={{ scale: 1, opacity: 1, transition: { delay: 3 } }}
          >
            <Image src={MealExpress} width={80} height={70} alt="meal express" className='w-14 md:w-28' />
          </motion.div>
        </div>
      
      <motion.div
        className="bg-[#507BA6] relative overflow-hidde h-60 md:h-96 w-full rounded-3xl mt-10 md:mt-[15px] pt-8"
        initial={{ scale: 0.5, y: 500, opacity: 0 }}
        whileInView={{scale: 1 , opacity:1 ,transition: {delay:0.2, duration:0.5, ease: [0.65, 0, 0.35, 1]} }}
        exit={{scale: 0.9, opacity:0 }}
        animate={{  y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="pt-20 md:pt-28 lg:pt-10 xl:pt-0  absolute w-full">
          <svg className="w-full" viewBox={sm ? "0 0 433 88" : "0 0 1548 463"} xmlns="http://www.w3.org/2000/svg" >
            <path fill="none" id="curve" stroke="none"
              d={
                sm
                  ? "M0.5 57.0173C9.5 42.684 32 23.3929 66 20.5176C100 17.6422 114.746 52.524 156 44.5C192 37.4978 195.5 0.502342 239.5 1.50232C273.5 2.27503 269 28.9824 314 43.5C355.941 57.0308 349.863 82.5346 387.5 87C404 88.9576 422.833 72.5 432 65"
                  : "M-266 274.49L-27.5 146.49C95 85.4897 184.5 163.5 233.5 222.5C282.5 281.5 402.58 262 446.5 196.99C497.5 121.5 478.377 132.693 515.5 87.5C561.5 31.5008 643 -10.1261 716 3.99047C776 15.5931 815.77 50.9204 862.5 123.49C905 189.49 1011.5 235.333 1098.5 208.49C1233 166.99 1261.5 182.489 1343 196.99C1398.79 206.916 1487.67 304.656 1532.5 345.49L1764 553.99"
              }
            />
            <motion.text
              initial={{ scale: 0.5, y: 500, opacity: 0 }}
              whileInView={{scale: 1,transition:{delay:0.2,duration:0.5, ease: [0.65, 0, 0.35, 1]} }}
              animate={{  y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
              className="text-2xl md:text-8xl lg:text-7xl space-x-5 font-bold"
              style={{ fill: "white" }}
            >
              <textPath
                ref={(ref) => (paths.current[1] = ref)}
                startOffset="0%"
                href="#curve"
              >
                <tspan dx={sm ? "10" : md ? "300" : "350"}>Breakfast </tspan>
                <tspan dx={sm ? "15" : "50"}>*</tspan>
                <tspan dx={sm ? "15" : "50"}>Lunch</tspan>
                <tspan dx={sm ? "15" : "30"}>*</tspan>
              </textPath>
              <textPath ref={(ref) => (paths.current[2] = ref)} startOffset="40%" href="#curve" >
                <tspan dx={sm ? "100" : md? '400' : "550"}>snacks</tspan> *
                <tspan dx={sm ? "15" : "100"}> dinner</tspan>
              </textPath>
              <textPath ref={(ref) => (paths.current[3] = ref)} startOffset="80%" href="#curve" >
                <tspan dx={sm ? "100" : "200"}>.</tspan> 4 Break fast lunch snacks dine{" "}
              </textPath>
            </motion.text>
          </svg>
        </div>

        <motion.div className="flex flex-row w-full justify-between relative" animate={{ y: 0 }}>
          <motion.div className="lg:w-48 md:w-96 sm:w-96 w-96"  animate={{  y: sm ? 130 : md ? 190 : 100 , x : sm ? 40 : md ? -26 : 0 , scale: sm ? 2 : md ? 1.6 : 1.05  }}>
            <MotionImageWrapper image={{ src: B2, alt: "food one" }}  rotation={rotation}/>
          </motion.div>
          <motion.div className="w-8 md:w-10" animate={{ x: sm ? 60 : md ? -20 : -60, y: sm ? 260 : md ? 350 : 250 , scale: sm ? 5 : md ? 3 : 1 }}>
            <MotionImageWrapper image={{ src: C1, alt: "food one" }} rotation={rotation}/>{" "}
          </motion.div>
          <motion.div className="w-14 md:w-40" animate={{ x: sm ? 50 : md ? -60 : -110 , y: sm ? 280 : md ? 300 : 180 , scale: sm ? 5 : md ? 3 : 1}}>
            <MotionImageWrapper image={{ src: C2, alt: "food one" }} rotation={rotation} />{" "}
          </motion.div>
          <motion.div className="lg:w-52 md:w-96 sm:w-96 w-96 " animate={{ x: sm ? 0 : md ? -80 : -180, y: sm ? 30 : md ? 60 : 0 , scale: sm ? 2 : md ? 2 : 1}} >
            <MotionImageWrapper image={{ src: B1, alt: "food one" }} rotation={nativerotation} />{" "}
          </motion.div>
          <motion.div className="lg:w-64 md:w-96 sm:w-96 w-96" animate={{ x: sm ? 30 : md ? -30 : -140, y: sm ? 120 : md ? 180 : 40 , scale: sm ? 2 : md ? 2 : 1}} >
            <MotionImageWrapper image={{ src: F1, alt: "food one" }} rotation={rotation} />{" "}
          </motion.div>
          <motion.div className="lg:w-48 md:w-96 sm:w-96 w-96" animate={{ x: sm ? 40 : md ? 50 : 30, y: sm ? 25 : md ? 60 : -20 , scale: 1.15 , scale: sm ? 2 : md ? 2 : 1}} >
            <MotionImageWrapper image={{ src: D1, alt: "food one" }} rotation={nativerotation} />{" "}
          </motion.div>
          <motion.div className="lg:w-48 md:w-96 sm:w-96 w-96" animate={{ x: sm ? -15 : md ? 20 : 30 , y: sm ? 150 : md ? 240 : 160 , scale: 1.25 , scale: sm ? 2 : md ? 2 : 1}} >
            <MotionImageWrapper image={{ src: S1, alt: "food one" }} rotation={rotation} />{" "}
          </motion.div>
          <motion.div className="lg:w-48 md:w-96 sm:w-96 w-96" animate={{ x: sm ? -5 : md ? 10 : -30, y: sm ? 70 : md ? 80 : 0 , scale: sm ? 2 : md ? 2 : 1.15}} >
            <MotionImageWrapper image={{ src: S2, alt: "food one" }} rotation={nativerotation} />{" "}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MovingText;

const MotionImageWrapper = ({ image, rotation }) => {
  return (
    <motion.div className="w-full"
      initial={{ scale: 0, opacity: 0.4 }}
      viewport={{ once: false }}
      exit={{ scale: 0, opacity: 0 }}
      // initial={{ scale: 0.5, y: 500, opacity: 0 }}
        whileInView={{scale: 1,transition:{delay:0.2,duration:0.5, ease: [0.65, 0, 0.35, 1]} }}
        animate={{  y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
      // whileInView={{ scale: 1, opacity: 1 }}
      style={{ rotate: rotation }}
    >
      <Image className="w-full" src={image.src} width={230} height={230} alt={image.alt} />
    </motion.div>
  );
};
