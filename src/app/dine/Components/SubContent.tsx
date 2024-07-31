import React from 'react'
import ShortBrief from './WordPopping'

const pharses: string[] = [
    "Dine Vista!",
    "We're committed to making",
    "Dining out a Delightful",
    "Experience for you",
  ];

const SubContent:React.FC = () => {
  return (
    <div className="flex flex-row justify-between pt-[5vh] md:pt-[10vh]">
          <div className="h-full text-[20px] md:text-[42px] leading-tight flex flex-col items-start">
            {pharses.map((pharse, index) => (
              <ShortBrief key={index} phrase={pharse} />
            ))}
          </div>
          <p className="text-[14px] md:text-[22px] w-[200px] md:w-[400px]">
            free from worries about payments or stress.
            With just a tap, indulge in a variety of cuisines 
            at various styles of restaurants, all without
            fretting about the payments
          </p>
    </div>
  )
}

export default SubContent
