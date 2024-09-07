import React, { useState } from "react";
import hotel0 from '../../dine/assets/images/Poult.png'
import hotel1 from "../../dine/assets/images/Cafe Free India.png";
import hotel2 from "../../dine/assets/images/Pleo.png";
import hotel3 from "../../dine/assets/images/Maharaja Bhog.png";
import hotel4 from "../../dine/assets/images/O Pedro.png";
import hotel5 from "../../dine/assets/images/Angrezi Dhaba.png";
import hotel6 from "../../dine/assets/images/Butterfly High.png";
import hotel7 from "../../dine/assets/images/Oudhe Premium Dining.png";
import hotel8 from "../../dine/assets/images/Miro Deli.png";
import Image from "next/image";
import ModalCart from "./ModalCart";
import Restaurant from "../RestaurantArray";
import { Roboto } from 'next/font/google';
import { motion} from 'framer-motion'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const imageArray = [hotel0, hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8];
const paths = [
  {
    d: "M9.39935 6.46985L9.50555 6.82754H9.87867H14.5416L10.6826 9.82602L10.4096 10.0381L10.5116 10.3684L11.989 15.1533L8.31075 12.2353L8 11.9888L7.68925 12.2353L4.00985 15.1542L5.48482 10.3681L5.58652 10.0381L5.31392 9.82613L1.45757 6.82754H6.12133H6.49445L6.60065 6.46985L8 1.75671L9.39935 6.46985Z",
    fill: "black",
    stroke: "black",
  },
];

const container = {
  hidden: { opacity: 0, scale: .9 },
  
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2
    },
  },
  
};
  
const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: { ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2}
  },
}

const MealCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerRow = 2;
  const itemsPerPage = itemsPerRow * 3;

  const totalPages = Math.ceil(Restaurant.length / itemsPerPage);

  const currentItems = Restaurant.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)) ;
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)) ;
  };
  const handlePageClick = (pageNumber : number) => {
    setCurrentPage(pageNumber) ;
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <motion.div variants={container} initial="hidden" whileInView="visible"
       viewport={{once:false}} exit="hidden" key={currentPage} className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {currentItems.map((item, index) => (
          <motion.div variants={card} key={index} className="flex flex-col w-full bg-[#F1CF88] rounded-lg p-1.5">
            <div className="flex items-end pb-2 md:pb-3">
              <div className="flex flex-row absolute m-1 md:m-2 gap-1">
                <p className="text-3xl md:text-4xl">10%</p>
                <p className="text-3xl md:text-4xl font-extralight">I</p>
                <div className="flex flex-col ">
                  <div className="leading-3 md:leading-4 font-bold text-sm md:text-medium pt-1">
                    Discount
                    <br />
                    <span className="text-[10px] font-light uppercase">with app</span>
                  </div>
                </div>
              </div>
              <Image src={imageArray[index]} alt="" width={200} height={200} className="w-full" />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-0.5">
              <div className="flex flex-row"><svg width="89" height="14" viewBox="0 0 92 17" fill="black" xmlns="http://www.w3.org/2000/svg">
                  {Array(5)
                    .fill(null)
                    .map((_, idx) => (
                      <path
                        key={idx}
                        d={paths[0].d}
                        fill={paths[0].fill}
                        stroke={paths[0].stroke}
                        transform={`translate(${idx * 20}, 0)`}
                      />
                    ))}
                </svg>
                <p className="hidden md:block font-thin text-gray-900 text-[11px] md:text-[13px] px-1">
                  {item[3]}
                </p></div>
                <p className="p-1.5 py-1 text-xl font-md text-gray-900 leading-6">
                {item[0]}
                <br />
              </p>
              </div>
              <ModalCart item={item} index={index} />
            </div>
            <div className={roboto.className}>
                <p className="text-xs font-light text-gray-800  md:leading-5 px-1.5 py-2 pt-0.5">{item[2]}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>


      {/* Pagination Controls */}

      <nav className="flex items-center gap-x-1 justify-center mt-4" aria-label="Pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <svg className="shrink-0 size-3.5 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center border ${currentPage === i + 1 ? 'border-gray-200' : 'border-transparent'} text-gray-500 py-2 px-3 text-sm rounded-lg focus:outline-none ${currentPage === i + 1 ? 'focus:bg-gray-50' : 'hover:bg-gray-100'} disabled:opacity-50 disabled:pointer-events-none`}
              aria-current={currentPage === i + 1 ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default MealCard;










// sample for large scale Dynamic Restaurant Image with Gradient and text above

{/* <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article> */}