import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring,} from "framer-motion";
import Image from "next/image";
import F1 from '../assets/images/PhoneExample.png'
// import { FiMousePointer } from "react-icons/fi";

const Phone = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{  transformStyle: "preserve-3d", transform, }}
      className="relative md:h-[550px] w-[2000px] md:w-[650px] rounded-xl bg-gradient-to-br "
    >
      <div
        style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d",}}
        className="absolute inset-4 grid place-content-center rounded-xl  "
      >
        <Image  style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d",}} src={F1} width={800} height={700} alt="Image vannilla" className="w-1200px md:w-[700px]"/>
      </div>
    </motion.div>
  );
};

export default TiltCard;
