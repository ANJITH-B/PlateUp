"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AnimatedText from "./TextPoping";
import Image from "next/image";
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


const MovingText = () => {
  const paths = useRef([]);
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const nativerotation = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const sm = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <div className="md:h-full w-full flex flex-col items-center overflow-hidden">
      <div className="hidden md:block">
        <div className="flex items-center flex-col font-ruthie">
          <AnimatedText text="Dine VISTA" delay={0} />
          <p className="text-6xl font-bold text-[#FBFEE1] pt-5 font-ruthie"><WordPopping phrase="Discover the Joy of Dining Out" delay={1.5} /></p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className=" md:hidden text-[38px] leading-tight text-[#FBFEE1] font-semibold flex justify-center"
      >
        <p className="text-center font-serif font-bold">
          Introducing
          <br /> Dine VISTA
          <br /> Discover the Joy
          <br /> of Dining Out
        </p>
      </motion.div>
      <motion.div
        className="bg-[#507BA6] relative overflow-hidden h-60 md:h-96 w-full rounded-3xl mt-[20vh] md:mt-[15vh] pt-8"
        initial={{ scale: 0.5, y: 500, opacity: 0 }}
        whileInView={{scale: 1 , opacity:1 ,transition: {delay:0.2, duration:0.5, ease: [0.65, 0, 0.35, 1]} }}
        exit={{scale: 0.9, opacity:0 }}
        animate={{  y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="pt-20 md:pt-0">
          <svg
            className="w-full"
            viewBox={sm ? "0 0 433 88" : "0 0 1548 463"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              id="curve"
              stroke="none"
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
              className="text-[24px] md:text-[65px] space-x-5 font-bold"
              style={{ fill: "white" }}
            >
              <textPath
                ref={(ref) => (paths.current[1] = ref)}
                startOffset="0%"
                href="#curve"
              >
                <tspan dx={sm ? "10" : "350"}>Breakfast </tspan>
                <tspan dx={sm ? "15" : "50"}>*</tspan>
                <tspan dx={sm ? "15" : "50"}>Lunch</tspan>
                <tspan dx={sm ? "15" : "30"}>*</tspan>
              </textPath>
              <textPath
                ref={(ref) => (paths.current[2] = ref)}
                startOffset="40%"
                href="#curve"
              >
                <tspan dx={sm ? "100" : "550"}>snacks</tspan> *
                <tspan dx={sm ? "15" : "100"}> dinner</tspan>
              </textPath>
              <textPath
                ref={(ref) => (paths.current[3] = ref)}
                startOffset="80%"
                href="#curve"
              >
                <tspan dx={sm ? "100" : "200"}>.</tspan> 4 Break fast lunch
                snacks dine{" "}
              </textPath>
            </motion.text>
          </svg>
        </div>

        <div className="flex flex-row absolute ">
          <motion.div
            className="w-28 md:w-40 "
            initial={{ y: sm ? "-20vh" : "-28vh" }}
          >
            <MotionImageWrapper
              image={{ src: B2, alt: "food one" }}
              rotation={rotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-8 md:w-10"
            initial={{ x: sm ? "-10vh" : "-3vw", y: sm ? "-20vh" : "-9vh" }}
          >
            <MotionImageWrapper
              image={{ src: C1, alt: "food one" }}
              rotation={rotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-14 md:w-40"
            initial={{ x: sm ? "-30vw" : "7vw", y: sm ? "-20vh" : "-20vh" }}
          >
            <MotionImageWrapper
              image={{ src: C2, alt: "food one" }}
              rotation={rotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-28 md:w-40 "
            initial={{ x: sm ? "-46vw" : "-14vw", y: sm ? "-5vh" : "-46vh" }}
          >
            <MotionImageWrapper
              image={{ src: B1, alt: "food one" }}
              rotation={nativerotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-36"
            initial={{ x: sm ? "-30vh" : "-14vw", y: sm ? "-8vh" : "-38vh" }}
          >
            <MotionImageWrapper
              image={{ src: F1, alt: "food one" }}
              rotation={rotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-28 md:w-40"
            initial={{ x: sm ? "-70vw" : "-4vw", y: sm ? "-28vh" : "-48vh" }}
          >
            <MotionImageWrapper
              image={{ src: S1, alt: "food one" }}
              rotation={nativerotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-24 md:w-40"
            initial={{ x: sm ? "-100vw" : "-4vw", y: sm ? "-28vh" : "-28vh" }}
          >
            <MotionImageWrapper
              image={{ src: D1, alt: "food one" }}
              rotation={rotation}
            />{" "}
          </motion.div>
          <motion.div
            className="w-20 md:w-40"
            initial={{ x: sm ? "-120vw" : "-10vw", y: sm ? "-10vh" : "-44vh" }}
          >
            <MotionImageWrapper
              image={{ src: S2, alt: "food one" }}
              rotation={nativerotation}
            />{" "}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MovingText;

const MotionImageWrapper = ({ image, rotation }) => {
  return (
    <motion.div
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
      <Image src={image.src} width={230} height={230} alt={image.alt} />
    </motion.div>
  );
};
