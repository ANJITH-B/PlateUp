import React, { useState } from "react";
import {  Modal } from "antd";
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import hotel0 from "../assets/images/Poult.png";
import hotel1 from "../assets/images/Cafe Free India.png";
import hotel2 from "../assets/images/Pleo.png";
import hotel3 from "../assets/images/Maharaja Bhog.png";
import hotel4 from "../assets/images/O Pedro.png";
import hotel5 from "../assets/images/Angrezi Dhaba.png";
import hotel6 from "../assets/images/Butterfly High.png";
import hotel7 from "../assets/images/Oudhe Premium Dining.png";
import hotel8 from "../assets/images/Miro Deli.png";
import Image from "next/image";
import Restaurant from "../RestaurantArray";
import ModalPayment from "./ModalPayment";

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  interface MenuItem {
    key: string;
    label: string;
  }
  const items: MenuItem[] = [
    {
      label: 'Book by Seats',
      key: '1',
    },
    {
      label: 'Book by Table',
      key: '2',
    },
    ]
    
const imageArray = [hotel0, hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7,hotel8];


const paths = [
    {
      d: "M9.39935 6.46985L9.50555 6.82754H9.87867H14.5416L10.6826 9.82602L10.4096 10.0381L10.5116 10.3684L11.989 15.1533L8.31075 12.2353L8 11.9888L7.68925 12.2353L4.00985 15.1542L5.48482 10.3681L5.58652 10.0381L5.31392 9.82613L1.45757 6.82754H6.12133H6.49445L6.60065 6.46985L8 1.75671L9.39935 6.46985Z",
      fill: "black",
      stroke: "black",
    },
  ];

  interface ModalCartProps {
    item: string[];
    index: number
    
  }

const ModalCart: React.FC<ModalCartProps> = ({item, index}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Select an Seating');
  const [divs, setDivs] = useState<number[]>([]);

  const addDiv = () => {
    // Add a new element to the array (we can use the current length as a unique key)
    setDivs([...divs, divs.length]);
  };
  const removeDiv = (index: number) => {
    // Filter out the div with the specified index
    setDivs(divs.filter((_, i) => i !== index));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  // Handle button click
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  // Handle menu item click
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
    const selectedItem = items.find(items => items?.key === e.key);
    if (selectedItem) {
      setSelectedLabel(selectedItem.label);
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <a onClick={showModal}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="28" rx="14" fill="white" />
          <path
            d="M17.437 18.5802C17.793 18.5802 18.1344 18.7235 18.386 18.9785C18.6377 19.2336 18.7791 19.5795 18.7791 19.9402C18.7791 20.3009 18.6377 20.6468 18.386 20.9019C18.1344 21.1569 17.793 21.3002 17.437 21.3002C17.0811 21.3002 16.7397 21.1569 16.488 20.9019C16.2363 20.6468 16.0949 20.3009 16.0949 19.9402C16.0949 19.1854 16.6922 18.5802 17.437 18.5802ZM6.7002 7.7002H8.89454L9.52533 9.0602H19.4502C19.6282 9.0602 19.7989 9.13184 19.9247 9.25936C20.0505 9.38689 20.1212 9.55985 20.1212 9.7402C20.1212 9.8558 20.0877 9.9714 20.0407 10.0802L17.6384 14.4798C17.4102 14.8946 16.9673 15.1802 16.464 15.1802H11.4647L10.8607 16.2886L10.8406 16.3702C10.8406 16.4153 10.8583 16.4585 10.8897 16.4904C10.9212 16.5223 10.9639 16.5402 11.0084 16.5402H18.7791V17.9002H10.7265C10.3706 17.9002 10.0292 17.7569 9.7775 17.5019C9.52581 17.2468 9.38441 16.9009 9.38441 16.5402C9.38441 16.3022 9.4448 16.0778 9.54546 15.8874L10.4581 14.2214L8.0423 9.0602H6.7002V7.7002ZM10.7265 18.5802C11.0825 18.5802 11.4238 18.7235 11.6755 18.9785C11.9272 19.2336 12.0686 19.5795 12.0686 19.9402C12.0686 20.3009 11.9272 20.6468 11.6755 20.9019C11.4238 21.1569 11.0825 21.3002 10.7265 21.3002C10.3706 21.3002 10.0292 21.1569 9.7775 20.9019C9.52581 20.6468 9.38441 20.3009 9.38441 19.9402C9.38441 19.1854 9.98164 18.5802 10.7265 18.5802ZM16.766 13.8202L18.6315 10.4202H10.1494L11.7331 13.8202H16.766Z"
            fill="#111111"
          />
        </svg>
      </a>
      <Modal
        // title="Basic Modal"
        width={375}
        centered
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: 'black' } }}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <Button onClick={handleCancel} className="bg-gray-900 py-3 text-white w-full">ADD YOUR PATEUP CARD</Button> */}
            
          </>
        )}
      >
        <div className="flex flex-col gap-5">
          <p className="text-xl font-light"> CART ITEMS - <span className="text-green-600">4</span></p>
          <hr className="w-full"/>
          {/* <TimeFrame /> */}
          
        <div  className="flex flex-row gap-3 w-full">
          <div className="flex items-end pb-3 w-30">
            <div className="flex flex-row absolute text-white m-2 gap-1">
              <p className="text-2xl">10%</p>
              <p className="text-2xl font-extralight">I</p>
              <div className="flex flex-col gap-0">
                <div className=" text-[10px] font-semibold pt-1">
                  <p>Discount</p>
                  <p className="text-[6px] font-light uppercase ">with app</p>
                </div>
              </div>
            </div>
            <Image src={imageArray[index]}  alt="" width={400} height={400}className="w-40" />
          </div>
          <div className="flex flex-col w-48">
          <div className="flex justify-between">
            <div className="flex flex-row gap-">
              <svg  width="92" height="17"  viewBox="0 0 92 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <path key={index} d={paths[0].d} fill={paths[0].fill} stroke={paths[0].stroke} transform={`translate(${index * 20}, 0)`}/>
                  ))}
              </svg>
              <p className="font-thin text-gray-900 text-[10px] md:text-md px-1 pt-[2px]">{item[3]}</p>
            </div>
            
          </div>
          <p className="text-sm font-md">
            {item[0]}
            <br />
            <span className="text-[12px] font-light text-gray-400">
              {item[2]}
            </span>
          </p>
          </div>
        </div>
        <div className=" border rounded-2xl w-full">
            <div className="p-2">
            <Dropdown menu={menuProps}>
                <Button className="border border-white rounded-2xl hover:border-white shadow-none">
                    <Space>
                    {selectedLabel}
                        
                    
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
            </div>
                
                <hr/>
                {divs.map((div, index) => (
                    <>
                <div key={index} className="flex justify-between">
                  {selectedLabel !== 'Book by Seats' ? 
                (<> 
                  <button
            className="bg-  text-2xl text-black ml-3"
            onClick={() => removeDiv(index)}
          >
            -
          </button>
                  <p className="p-2 pl-3 pt-3 text-sm font-light"> {selectedLabel !== 'Book by Seats' ? ('Select the No of seated Table') : ( 'Select the No of Guests' )}</p>
                  <div className="inline-block relative w-36 px-2 pt-3">
                    <select className="block appearance-none rounded-lg w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>2 Seated</option>
                        <option>4 Seated</option>
                        <option>6 Seated</option>
                        <option>8 Seated</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div></>):
                  (<></>) 
                    }
                </div>
                    <hr className="w-full"/>
                    </>))}
                {selectedLabel !== 'Book by Seats' ? (<></>):(
                <div className="flex flex-row items-center justify-between">
                    <p className="p-2 pl-6 pt-3 text-sm font-light"> {selectedLabel !== 'Book by Seats' ? ('Select the No of seated Table') : ( 'Select the No of Guests' )}</p>
                    <input type="number" className="m-2 px-2 py-1 w-20 rounded-lg border-gray-400 border-spacing-3 bg-gray-100 focus:border-whit hover:border-white focus:ring-white"/>
                </div>)}
                <hr/>
                {selectedLabel == 'Book by Seats' ? (<></>) :( <>
                <div className="flex flex-row items-center">
                    <button  onClick={addDiv} className="bg- border text-md text-black p-2 py-0 pb-0.5 rounded-full m-2 ml-5">+</button>
                    <p className="text-sm font-light">Add another Table</p>
                </div>
                <hr/></>)}
                <div className="p-2 py-4 text-sm font-light">
                {selectedLabel !== 'Book by Table' && (
                <>
                    <Checkbox onChange={onChange}>I did prefer nearest seats</Checkbox>
                    <Checkbox onChange={onChange}>I did prefer opposite seats</Checkbox>
                    <Checkbox onChange={onChange}>I did prefer same Table</Checkbox>
                </>
                )}
                {selectedLabel !== 'Book by Seats' && (
                <Checkbox onChange={onChange}>I did prefer same Table</Checkbox>
                )}
                </div>
        </div>
        <div className="h-10 w-full"> </div>
        <ModalPayment/>
        </div>
      </Modal>
    </>
  );
};

export default ModalCart;
