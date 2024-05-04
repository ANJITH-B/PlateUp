import { motion } from 'framer-motion'
import FoodSteam from '../foodbowlAndSteam/steam';
import ParallaxText from '../parallax/ParallaxText'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, MovingBorder } from '@/components/ui/moving-border';
// import './style.css';

export const Section = (props) => {
  const { children } = props;
  return <motion.section
    className={` h-screen w-screen p-0 mx-auto flex justify-center items-center`}

    initial={{ opacity: 0, y: -5, }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
    {children}
  </motion.section>



};




export const Interface = () => {


  // const [pathLength, setPathLength] = useState(0);
  // const [drawLength, setDrawLength] = useState(0);

  // useEffect(() => {
  //     const path = document.querySelector('path');
  //     const pathLength = path.getTotalLength();
  //     setPathLength(pathLength);
  //     path.style.strokeDasharray = `${pathLength} ${pathLength}`;
  //     path.style.strokeDashoffset = pathLength;

  //     const onScroll = () => {
  //         const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //         const scrollPercentage = scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  //         const drawLength = pathLength * scrollPercentage;
  //         setDrawLength(drawLength);
  //         path.style.strokeDashoffset = pathLength - drawLength;
  //     };

  //     window.addEventListener('scroll', onScroll);

  //     return () => {
  //         window.removeEventListener('scroll', onScroll);
  //     };
  // }, [pathLength]);


  return (
    <div className=" flex flex-col w-screen   ">
      {/* <div className="absoul">
            <svg width="1810" height="2619" viewBox="0 0 1810 2619" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path d="M2.38118 4.67663L529.718 262.123C719.648 354.847 862.535 522.291 924.232 724.441L956.688 830.784C998.869 968.989 1005.21 1115.65 975.106 1256.98L884.175 1683.91C849.188 1848.17 905.9 2018.5 1032.37 2129.01L1121.2 2206.63C1231.3 2302.83 1353 2384.88 1483.47 2450.87L1807 2614.5" stroke="#FFC224" strokeWidth="10" />
            </svg>
        </div> */}
      <AboutSection />
      <Food />
      <DineIn />
      <Grocery />
      <Shop />
      <IT />
      <Section><h1></h1></Section>
      <Contact />
      <Footer />
    </div>
  )
}


const AboutSection = () => {
  return (
    <Section className='z--10' style={{ zIndex: -200 }}>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 h-full  mt-20 pl-20">
          <motion.h1
            className='text-7xl font-bold italic mt-20 pt-20 content-start'
            initial={{ opacity: 0, y: -20, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }}>INCREDIBLE </motion.span>
            <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }} style={{ WebkitTextStroke: '3px rgb(234 179 8)' }}
              className='text-black stroke-gray-500  stroke-2'>FOOD </motion.span> <span style={{ WebkitTextStroke: '3px rgb(234 179 8)' }}
                className='text-black stroke-gray-500  stroke-2'> CHOICES</span> WITH <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }}>AWESOME</motion.span> REWARD  <span className="text-yellow-500 italic">POINTS</span>
          </motion.h1>

          <motion.h2
            className="text-xl italic font-semibold text-white-600 mt-4 pl-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay added for a staggered effect
          >
            <span className='text-orange-500'>MEAL </span><span className='text-orange-300'> Express</span>
          </motion.h2>

        </motion.div>
        <motion.div className=" pr-20 pl-3 md:w-1/2 md:mt-0" >
        </motion.div>
      </motion.div>
    </Section>
  )
}


const Food = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log('haia', e);
    setPosition({ y: e.clientX, x: e.clientY });
  };
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className="pl-20 pr-3 md:w-3/5 ">
          <motion.h2 className=" text-2xl italic semifont-bold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Experience the ease of dining with QUICKMEAL No more hassle with cash payments on delivery apps or being restricted to limited canteen options for your meal. Just utilize your Plateup card to enjoy your meal allowance at a standard rate. Elevate your office dining experience with an array of cuisines delivered directly to your table.
          </motion.h2>
          {/* <div className="sec">
        <h2>Light</h2>
      </div>
      <div
        className="light"
        style={{ '--x': `${position.x}px`, '--y': `${position.y}px` }}
        onMouseMove={handleMouseMove}
      ></div> */}
          {/* <MovingBorder>hel</MovingBorder> */}
          <motion.div className="border-button  mt-12 font-bold text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Explore more
          </motion.div>
        </motion.div>
        <motion.div className=" px-10 md:w-2/5 md:mt-0" ></motion.div>
      </motion.div>
    </Section>
  );
};

const DineIn = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 "></motion.div>
        <motion.div className=" pr-20 pl-3 md:w-1/2 md:mt-0" >
          <motion.h2 className=" text-2xl italic semifont-bold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Experience effortless grocery shopping without the need to wait for your salary or stress about expenses. With PantryPlus, you can effortlessly select from a wide range of daily essentials and groceries, eliminating the need for daily payments. Simply redeem your convenient Plateup allowance card at any nearby PantryPlus store and enjoy seamless shopping anytime.
          </motion.h2>
          <motion.div className="border-button  mt-12 font-bold text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Explore more
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};


const Grocery = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className="pl-20 pr-3 md:w-1/2 ">
          <motion.h2 className=" text-2xl italic semifont-bold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Travel stress-free, whether you're commuting to the office or navigating halfway across the city. Eliminate the hassle of costly cabs, tiring walks in the heat, or endless waits. WorkRide makes commuting effortless. Simply use your allowance with WorkRide cabs and enjoy seamless journeys to wherever you need to go.
          </motion.h2>
          <motion.div className="border-button  mt-12 font-bold text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Explore more
          </motion.div>
        </motion.div>
        <motion.div className=" px-10 md:w-1/2 md:mt-0" ></motion.div>
      </motion.div>
    </Section>
  );
};




const Shop = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 "></motion.div>
        <motion.div className=" pr-20 pl-3 md:w-1/2 md:mt-0" >
          <motion.h2 className=" text-2xl italic semifont-bold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Experience effortless grocery shopping without the need to wait for your salary or stress about expenses. With PantryPlus, you can effortlessly select from a wide range of daily essentials and groceries, eliminating the need for daily payments. Simply redeem your convenient Plateup allowance card at any nearby PantryPlus store and enjoy seamless shopping anytime
          </motion.h2>
          <motion.div className="border-button  mt-12 font-bold text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Explore more
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};


const IT = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 h-full  mt-20 pl-20">
          <motion.h1 className='text-7xl font-bold mt-20 pt-20 content-start'>JUST <span className="text-yellow-500 italic">REDEEM</span> IT</motion.h1>
        </motion.div>
        <motion.div className=" pr-20 pl-3 md:w-1/2 md:mt-0" >

          <motion.h2 className=" text-xl italic font-semibold text-white-600 mt-4 pl-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Experience effortless grocery shopping without the need to wait for your salary or stress about expenses. With PantryPlus, you can effortlessly select from a wide range of daily essentials and groceries, eliminating the need for daily payments. Simply redeem your convenient Plateup allowance card at any nearby PantryPlus store and enjoy seamless shopping anytime
          </motion.h2>
          <motion.button className='bg-orange-600 text-white py-2 px-4 rounded-lg ml-20 font-bold text-sm mt-12' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }}>Redeem Now</motion.button>
        </motion.div>
      </motion.div>
    </Section>
  );
};
const Contact = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 "></motion.div>
        <motion.div className=" pr-20 pl-3 md:w-1/2 md:mt-0" >
          <div className='border border-gray-500 w-4/6 p-10 rounded-3xl backdrop-opacity-10 backdrop-invert bg-white/10 '>
            {/* <Image width={100} height={100} src=''/> */}
            <motion.h1 className='text-3xl font-bold'>Contact</motion.h1>
            <motion.h2 className=" text-xl italic font-semibold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
              Get offers in your Inbox, its free!
            </motion.h2>
            <motion.Input className='rounded-md p-1 mr-2'></motion.Input>
            <motion.button className='bg-orange-600 text-white py-2 px-4 rounded-lg font-bold text-sm mt-12' >Subscribe</motion.button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};


const Footer = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-col w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 h-full"></motion.div>
        <div className='max-w-screen-2xl flex flex-col  md:flex-row w-full border m-0 border-gray-500 w-full p-10 rounded-t-3xl border-b-5 backdrop-opacity-5 backdrop-invert bg-black/1 '>
          <motion.div className=" p-4 md:w-1/2 ">

            <Image alt="plateUp" src="/image/PLATEUP.png" href="/" height={500} width={400} />
            <motion.h1 className='text-3xl  mt-4'>Keep up with us</motion.h1>
            <motion.h2 className=" text-lg  text-white-600 mt-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
              Get latest trends, updates and offers.
            </motion.h2>
            <motion.Input className='border rounded-lg h-9 mr-2'></motion.Input>
            <motion.button className='bg-orange-600 text-white py-2 px-5 rounded-lg font-bold text-sm mt-12' >SignUp</motion.button>
            <div className='flex gap-2 mt-5'>
              <motion.h2 className=" text-xl font-semibold text-yellow-500 " initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
                Contact Us
              </motion.h2>
              <Image alt="plateUp" src="/image/Expo.png" href="/" height={10} width={27} />
            </div>
            <motion.h2 className=" text-lg  text-white-600 mt-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
              23rd, The Ruby, 29, Senapati Bapat Marg, Mumbai
            </motion.h2>
            <div className='flex gap-6 mt-4'>
              <Image alt="plateUp" src="/image/email.png" href="/" height={500} width={20} />
              <Image alt="plateUp" src="/image/linkedin.png" href="/" height={500} width={20} />
              <Image alt="plateUp" src="/image/youtube.png" href="/" height={500} width={20} />
              <Image alt="plateUp" src="/image/Vector.png" href="/" height={500} width={20} />
            </div>
            <div className='flex gap-4 mt-4'>
              <motion.button className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Gurgaon</motion.button >
              <motion.button className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Mumbai</motion.button >
              <motion.button className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Banglore</motion.button >
            </div>
          </motion.div>
          <motion.div className="items-center flex pr-20 pl-3 md:w-1/2 md:mt-0" >
            <div className='w-full'>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Home</h1>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>About Us</h1>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Careers</h1>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Blogs & Art</h1>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Services</h1>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
              </div>
              {/* <div className='w-full h-1 rounded bg-gray-700'></div> */}


            </div>
          </motion.div>

        </div>
      </motion.div>
    </Section>
  );
};

