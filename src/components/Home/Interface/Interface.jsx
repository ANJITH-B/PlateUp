import { motion } from 'framer-motion'
import FoodSteam from '../foodbowlAndSteam/steam';
import ParallaxText from '../parallax/ParallaxText'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button, MovingBorder } from '@/components/ui/moving-border';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Link from 'next/link';
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
    <div className="flex flex-col w-screen">
      {/* <div className="absoul">
            <svg width="1810" height="2619" viewBox="0 0 1810 2619" fill="none" preserveAspectRatio='xMidYMax meet'>
                <path d="M2.38118 4.67663L529.718 262.123C719.648 354.847 862.535 522.291 924.232 724.441L956.688 830.784C998.869 968.989 1005.21 1115.65 975.106 1256.98L884.175 1683.91C849.188 1848.17 905.9 2018.5 1032.37 2129.01L1121.2 2206.63C1231.3 2302.83 1353 2384.88 1483.47 2450.87L1807 2614.5" stroke="#FFC224" strokeWidth="10" />
            </svg>
        </div> */}
      <Home />
      <Food />
      <DineIn />
      <Grocery />
      <Travel />
      <Section><h1></h1></Section>
      <Section><h1></h1></Section>
      <Section><h1></h1></Section>
      <Contact />
      <Footer />
    </div>
  )
}


const Home = () => {
  return (
    <Section className='z--10' style={{ zIndex: -200 }}>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 h-full flex items-center flex-col  md:pl-20 sm:m-10">
          {/* <motion.h1
            className='text-4xl md:text-7xl font-bold italic md:mt-20 pt-[20vh] md:pt-[10vh]  content-start'
            initial={{ opacity: 0, y: -20, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >  
            <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }}>Satisfy your </motion.span>
            <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }} style={{ WebkitTextStroke: '3px rgb(234 179 8)' }}
              className='text-black stroke-gray-500  stroke-2'>craving </motion.span> <span style={{ WebkitTextStroke: '3px rgb(234 179 8)' }}
                className='text-black stroke-gray-500  stroke-2'> without</span>  breaking <motion.span initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 3 }}>the</motion.span>   <span className="text-yellow-500 italic">bank </span>
          </motion.h1> */}

          <motion.h2
            className="text-md md:text-xl italic font-semibold text-white-600 mt-4 md:pl-20 hidden sm:block"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0, delay: 0 }} // Delay added for a staggered effect
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
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className="p-5 md:pl-20 xl:px-40 md:pr-3 md:w-3/5 ">
          <motion.h2 className=" md:text-2xl    font-tertiary semifont-bold text-white-600 mt-20 md:mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
          Explore the convenience of dining with QUICKMEAL. Say goodbye to costly payments on food delivery apps and the limitations of canteen options. Use your Plateup card to enjoy your meal allowance at a standard rate. Enhance your office dining experience with a wide range of cuisines delivered directly to your table. 
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
          <motion.div className="border-button  mt-12 w-40 h-10  font-bold text-xs md:text-sm"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0. }}>
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
        <motion.div className="p-5 md:pr-20 md:pl-3 md:w-1/2 md:mt-0" >
          <motion.h2 className="md:text-2xl  font-tertiary semifont-bold text-white-600 mt-20 md:mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
          Rest assured, hunger will never bother you again, whether you're missing a meal at work or out in the field, all without worrying about the cost. Enjoy a variety of Indian cuisines with ease by redeeming your favorites at DINEVISTA. Whether it's celebrating your corporate lunch or enjoying a family dinner, we've got you covered.
          </motion.h2>
          <motion.div className="border-button  mt-12 w-40 h-10  font-bold text-xs md:text-sm"
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
        <motion.div className="p-5 md:pl-20 pr-3 md:w-1/2 ">
          <motion.h2 className="  md:text-2xl font-tertiary  semifont-bold text-white-600 mt-20 md:mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
          Streamline your grocery shopping without waiting for your salary or worrying about expenses. PantryPlus offers a diverse selection of daily essentials and groceries, eliminating the requirement for daily payments. Take advantage of your Plateup coins to enjoy weekly offers of up to 30% off at nearby PantryPlus stores, ensuring smooth shopping whenever you need.
          </motion.h2>
          <motion.div className="border-button mt-12 w-40 h-10  font-bold text-xs md:text-sm"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01, delay: 0 }}>
            Explore more
          </motion.div>
        </motion.div>
        <motion.div className=" px-10 md:w-1/2 md:mt-0" ></motion.div>
      </motion.div>
    </Section>
  );
};




const Travel = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-4 md:w-1/2 "></motion.div>
        <motion.div className="p-5 md:pr-20 md:pl-3 md:w-1/2 md:mt-0" >
          <motion.h2 className="md:text-2xl  font-tertiary semifont-bold text-white-600 mt-20 md:mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
          Easily manage your daily commute or city travels with our seamless journeys. Commuting is now simpler than ever. Use your wallet coins for WorkRide cabs, select personalized rides, share rides, or explore our corporate travel pass for added flexibility. Count on our reliable service to promptly arrive at your location and transport you to your destination.
          </motion.h2>
          <motion.div className="border-button  mt-12 w-40 h-10  font-bold text-xs md:text-sm"
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


const Redeem = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        {/* <motion.div className=" p-4 md:w-1/2 md:h-full  md:mt-20 md:pl-20">
          <motion.h1 className='text-4xl md:text-7xl font-bold md:mt-20 pt-20 content-start italic'>JUST <span className="text-yellow-500 italic">REDEEM</span> IT</motion.h1>
        </motion.div> */}
        <motion.div className="p-5 md:pr-20 md:pl-3 md:w-1/2 md:mt-0 h-full flex  md:items-center" >

          {/* <motion.h2 className=" md:text-xl font-primary font-semibold text-white-600 items-center md:pl-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Experience effortless grocery shopping without the need to wait for your salary or stress about expenses. With PantryPlus, you can effortlessly select from a wide range of daily essentials and groceries, eliminating the need for daily payments. Simply redeem your convenient Plateup allowance card at any nearby PantryPlus store and enjoy seamless shopping anytime
          </motion.h2> */}
          {/* <motion.button className='bg-orange-600 text-white py-2 px-4 rounded-lg ml-20 font-bold text-sm mt-12' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }}>Redeem Now</motion.button> */}
        </motion.div>
      </motion.div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section>
      <motion.div className=" max-w-screen-2xl flex flex-col  md:flex-row w-full h-full items-center ">
        <motion.div className=" p-10 md:p-4 md:w-1/2"></motion.div>
        <motion.div className="md:mt-0 " >
          <div className='border border-gray-500 md:w-[50vh] px-8 py-6 rounded-3xl backdrop-opacity-20 backdrop-invert bg-black/10 m-5 mt:10 md:m-0 mb-0'>
            <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_13350_1024)">
                <path d="M24.9453 1.56282C25.7684 1.01353 26.7263 0.700385 27.7149 0.657443C28.7035 0.614502 29.6849 0.843405 30.5525 1.31926L30.9503 1.56282L52.5999 15.995C53.2782 16.4469 53.8456 17.0463 54.2598 17.7482C54.6741 18.4502 54.9244 19.2366 54.9922 20.0488L55.0111 20.4981V46.1122C55.0116 47.4777 54.4958 48.7929 53.5674 49.7941C52.6389 50.7954 51.3663 51.4087 50.0047 51.5111L49.5987 51.5246H6.2996C4.93412 51.525 3.61893 51.0093 2.61769 50.0809C1.61645 49.1524 1.00315 47.8798 0.900738 46.5181L0.887207 46.1122L0.887207 20.4981C0.887221 19.6832 1.07121 18.8789 1.42546 18.1451C1.77971 17.4113 2.29506 16.767 2.93309 16.2602L3.29843 15.995L24.9453 1.56282ZM27.9492 6.06593L8.47267 19.0503L27.9492 32.0346L47.4257 19.0503L27.9492 6.06593Z" fill="white" />
              </g>
              <defs><clipPath id="clip0_13350_1024"><rect width="54.8369" height="51.3367" fill="white" transform="translate(0.530273 0.52832)" /></clipPath></defs>
            </svg>

            <motion.h2 className="text-md md:text-xl font-primary font-semibold text-white-600 mt-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0 }}>
            Subscribe to our newsletter for exclusive offers on groceries, dining, travel, and more
            </motion.h2>
            <div className='flex mt-5'>
            <motion.Input className='rounded-md p-1 h-10 mr-2 w-full bg-transparent border backdrop-blur-sm'></motion.Input>
            <motion.button className='bg-orange-600 text-white py-2 px-4 rounded-lg font-bold text-sm ' >Subscribe</motion.button>
           </div>
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
        <div className='max-w-screen-2xl z-10 flex flex-col  md:flex-row border m-0 border-gray-500 w-full p-10 rounded-t-3xl border-b-5 bg-opacity-20 bg-black backdrop-blur-[1.5px]'>
          <motion.div className=" p-4 md:w-1/2 ">

            <Image alt="plateUp" src="/image/logo.png" href="/" height={200} width={200} />
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
              <Image alt="plateUp" src="/image/email.png" href="hello@plateup.in" height={20} width={20} />
              <Image alt="plateUp" src="/image/linkedin.png" href="https://in.linkedin.com/company/plateupindia" height={20} width={20} />
              <Image alt="plateUp" src="/image/youtube.png" href="https://youtube.com/@plateupindia?si=-MGnjoGVugHF7WiU" height={20} width={20} />
              <Image alt="plateUp" src="/image/Vector.png" href="https://x.com/PlateupIndia" height={20} width={20} />
            </div>
            <div className='flex gap-4 mt-4'>
              <motion.button className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Gurgaon</motion.button >
              <motion.button onClick='map-https://maps.app.goo.gl/xSChMt2uNdz997TC6' className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Mumbai</motion.button >
              <motion.button className='bg-orange-600 px-3 py-1 text-sm rounded-xl'>Banglore</motion.button >
            </div>
          </motion.div>
          <motion.div className="items-center flex pr-3 md:pr-20 pl-3 md:w-1/2 md:mt-0" >
            <div className='w-full'>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Home</h1>
                <Link href={'/'}>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/" height={20} width={30} />
                </Link>
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>About Us</h1>
                <Link href={'/about'}>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/about" height={20} width={30} />
                </Link>
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Careers</h1>
                <Link href={'/careers'}>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/careers" height={20} width={30} />
                </Link>
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Impact</h1>
                <Link href={'/impact'}>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/impact" height={20} width={30} />
                </Link>
              </div>
              <div className='w-full h-1 rounded bg-gray-700'></div>
              <div className='flex flex-row justify-between flex-end gap-5 py-4'>
                <h1 className='text-2xl  font-bold'>Services</h1>
                <Link href={'/services'}>
                <Image className='h-6 row-end' alt="plateUp" src="/image/Arrow.png" href="/services" height={20} width={30} />
                </Link>
              </div>
              {/* <div className='w-full h-1 rounded bg-gray-700'></div> */}


            </div>
          </motion.div>

        </div>
      </motion.div>
    </Section>
  );
};

