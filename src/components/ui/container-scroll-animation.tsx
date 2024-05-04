"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({titleComponent}: {titleComponent: string | React.ReactNode}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
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
    return isMobile ? [1.05, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      className="min-h-[60rem] md:min-h-[80rem] flex items-center justify-center relative p-2 md:p-16"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1800px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] p-6 bg-[#181818] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full bg-amber-700 rounded-2xl gap-4 overflow-hidden p-4">
        <h1 className="font-black text-black  text-center mx-auto text-2xl container py-4">Welcome to PlateUp</h1>
        <p className="text-center font-bold container mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat quod aut mollitia culpa, ratione consequatur tempora? Facilis, quos, minus itaque aspernatur repellendus, iusto asperiores delectus dignissimos architecto corrupti animi!</p>
        <h1 className="font-black text-black  text-center mx-auto container py-4">Yaha pe video/images jo bhi decide hoga woh aajayega.</h1>
        
      </div>
    </motion.div>
  );
};
