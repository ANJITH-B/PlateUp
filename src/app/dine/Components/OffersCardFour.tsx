import React from "react";
import Image from 'next/image'
import N4 from '../assets/images/04.png'


const OffersCardFour: React.FC = () => {
  return (
    <div className="flex flex-row h-[44vh]">
      <div className="hidden md:block w-[40vw]"></div>
      <div className="flex flex-col w-full">
        <div className="w-full h-full my-5 p-6 border border-[#384345] inner rounded-3xl bg-[#2F383A] overflow-hidden">
          <div className="w-full h-full overflow-hidden flex flex-row gap-4">
            <div className=" pb-10 flex flex-col items-end gap-5 ">
              <Image src={N4} alt="" width={1000} height={200} className="" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 28L28 2M28 2V28M28 2H2"
                  stroke="#999999"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div className=" md:p-8">
              <div className="flex flex-row items-center gap-3">
                <p className="md:pt-3 text-gray-300 leading-7 md:text-xl ">
                  Host your corporate dinner next month and indulge with an
                  exclusive 30% discount per person. Encourage meaningful
                  conversations over a delightful lunch or dinner. Whether
                  celebrating your team's success or marking achievements, our
                  welcoming space sets the perfect tone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCardFour;
