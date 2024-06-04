export const SectionNav = (props) => {
    const { onSectionChange, section } = props;
    return (
        <>
            <div className={`z-10 fixed top-0 right-0  bottom-0 bg-gradient-to-b from-[#213] to-[#213] transition-all overflow-hidden flex flex-col items-center w-full ${[0, 5, 6, 7, 8,9].includes(section) ? 'h-0' : 'h-20'}`}>
                <div className="flex flex-row items-center justify-evenly sm:gap-10 gap-14 p-7 ">
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(1)} className={` md:text-2xl font-secondary  font-bold  ${section === 1 ? 'bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107]' : 'text-white'}`}>Food</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(2)} className={` md:text-2xl font-secondary  font-bold  ${section === 2 ? 'bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107]' : 'text-white'}`}>DineIn</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(3)} className={` md:text-2xl font-secondary  font-bold  ${section === 3 ? 'bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107]' : 'text-white'}`}>Grocery</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(4)} className={` md:text-2xl font-secondary  font-bold  ${section === 4 ? 'bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107]' : 'text-white'}`}>Travel</button ></div>
                </div>
            </div>
        </>
    )
}
