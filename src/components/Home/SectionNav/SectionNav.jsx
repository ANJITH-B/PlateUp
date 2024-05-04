export const SectionNav = (props) => {
    const { onSectionChange, section } = props;
    return (
        <>
            <div className={`z-10 fixed top-0 right-0  bottom-0 bg-white transition-all overflow-hidden flex flex-col w-full ${[0, 5, 6, 7, 8,9].includes(section) ? 'h-0' : 'h-20'}`}>
                <div className="  flex flex-row items-center justify-center gap-10 p-7">
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(1)} className={` md:text-2xl  font-bold  ${section === 1 ? 'text-orange-600' : 'text-gray-500'}`}>Food</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(2)} className={` md:text-2xl  font-bold  ${section === 2 ? 'text-orange-600' : 'text-gray-500'}`}>DineIn</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(3)} className={` md:text-2xl  font-bold  ${section === 3 ? 'text-orange-600' : 'text-gray-500'}`}>Grocery</button ></div>
                    <div className=" w-[10vw]"><button onClick={() => onSectionChange(4)} className={` md:text-2xl  font-bold  ${section === 4 ? 'text-orange-600' : 'text-gray-500'}`}>Travel</button ></div>
                </div>
            </div>
        </>
    )
}
