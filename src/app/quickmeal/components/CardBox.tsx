import React from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { container } from '../animation'
import Image from 'next/image'
import Tea from '../assets/images/tea.png';
import Logo from '../assets/images/Plateup-logo 4.png';
import Card from '../assets/images/Card.png';
import { useMediaQuery } from "react-responsive";
 

const CardBox: React.FC = () => {
    const sm = useMediaQuery({ maxWidth: 768 })
    const { scrollYProgress } = useViewportScroll();
    const OnScrollmoveYup = useTransform(scrollYProgress, [0, 1], [10, -100]);
    const OnScrollmoveYdown = useTransform(scrollYProgress, [0, 1], [-120, 200]);


    return (
        <motion.div variants={container} initial="initial" whileInView="visible" className="flex h-[38vh] md:h-[45vh] rounded-3xl w-full bg-[#1E1F1F] overflow-hidden relative" >
        <motion.div style={{ y: OnScrollmoveYup }} className="w-full h-full flex items-center justify-center absolute" >
            <Image src={Logo} alt="..." className="w-[700px] md:w-[700px] opacity-25" />
        </motion.div>
        <motion.div style={{ y: OnScrollmoveYdown }}  className="w-full h-full flex items-center justify-center absolute">
            <Image src={Card} alt="..." className="w-[220px] md:w-[400px]" />
        </motion.div>
        <div className="flex absolute w-full h-full p-3 md:p-5 justify-end items-end">
            <div className="rounded-full flex flex-row items-end bg-[#D3D2D0] w-44 h-14 md:w-56 md:h-16" >
            <motion.div initial={{y: 4}} className="absolute" drag dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }} whileHover={{ scale: 1.1 }} dragConstraints={{ top: 3, left: 0, right: ( sm ? 115 : 150), bottom: 3 }} >
                <Image src={Tea} alt="tea" width={70} height={70} className="w-16 h-[75px] md:w-18 md:h-20" draggable="false" onMouseDown={(e) => e.preventDefault()} />
            </motion.div>
            <p className="w-full text-sm md:text-medium text-center text-gray-700 md:pl-10 h-4/6 md:h-2/3 items-center justify-center"> slide to take a breake </p>
            </div>
        </div>
        </motion.div>
    );
};

export default CardBox;
