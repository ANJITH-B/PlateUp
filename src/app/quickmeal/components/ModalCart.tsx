import React, { useState } from "react";
import { Modal } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
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
import ModalPayment from "./ModalPayment";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

interface MenuItem {
  key: string;
  label: string;
}
const items: MenuItem[] = [
  {
    label: "Book by Seats",
    key: "1",
  },
  {
    label: "Book by Table",
    key: "2",
  },
];

const imageArray = [
  hotel0,
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
];

const paths = [
  {
    d: "M9.39935 6.46985L9.50555 6.82754H9.87867H14.5416L10.6826 9.82602L10.4096 10.0381L10.5116 10.3684L11.989 15.1533L8.31075 12.2353L8 11.9888L7.68925 12.2353L4.00985 15.1542L5.48482 10.3681L5.58652 10.0381L5.31392 9.82613L1.45757 6.82754H6.12133H6.49445L6.60065 6.46985L8 1.75671L9.39935 6.46985Z",
    fill: "black",
    stroke: "black",
  },
];

interface ModalCartProps {
  item: string[];
  index: number;
}

const ModalCart: React.FC<ModalCartProps> = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Book by Seats");
  const [divs, setDivs] = useState<number[]>([]);

  const addDiv = () => {
    setDivs([...divs, divs.length]);
  };

  const removeDiv = (index: number) => {
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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
    const selectedItem = items.find((items) => items?.key === e.key);
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
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_443_269)">
        <rect x="7" y="5" width="31" height="31" rx="15.5" fill="#111111" shape-rendering="crispEdges"/>
        <path d="M26.3052 25.5701C26.6993 25.5701 27.0772 25.7288 27.3559 26.0111C27.6345 26.2935 27.7911 26.6765 27.7911 27.0758C27.7911 27.4752 27.6345 27.8582 27.3559 28.1405C27.0772 28.4229 26.6993 28.5816 26.3052 28.5816C25.9111 28.5816 25.5332 28.4229 25.2545 28.1405C24.9758 27.8582 24.8193 27.4752 24.8193 27.0758C24.8193 26.2402 25.4805 25.5701 26.3052 25.5701ZM14.418 13.5244H16.8474L17.5458 15.0301H28.534C28.7311 15.0301 28.9201 15.1094 29.0594 15.2506C29.1987 15.3918 29.277 15.5833 29.277 15.783C29.277 15.911 29.2398 16.039 29.1878 16.1594L26.5281 21.0304C26.2755 21.4896 25.7851 21.8058 25.2279 21.8058H19.6929L19.0243 23.033L19.002 23.1233C19.002 23.1733 19.0215 23.2211 19.0564 23.2564C19.0912 23.2917 19.1385 23.3116 19.1877 23.3116H27.7911V24.8173H18.8757C18.4816 24.8173 18.1036 24.6586 17.825 24.3763C17.5463 24.0939 17.3898 23.7109 17.3898 23.3116C17.3898 23.0481 17.4566 22.7996 17.5681 22.5888L18.5785 20.7443L15.9039 15.0301H14.418V13.5244ZM18.8757 25.5701C19.2698 25.5701 19.6477 25.7288 19.9264 26.0111C20.205 26.2935 20.3616 26.6765 20.3616 27.0758C20.3616 27.4752 20.205 27.8582 19.9264 28.1405C19.6477 28.4229 19.2698 28.5816 18.8757 28.5816C18.4816 28.5816 18.1036 28.4229 17.825 28.1405C17.5463 27.8582 17.3898 27.4752 17.3898 27.0758C17.3898 26.2402 18.051 25.5701 18.8757 25.5701ZM25.5622 20.3001L27.6276 16.5358H18.2367L19.9901 20.3001H25.5622Z" fill="#D9D9D9"/>
        </g>
        <defs>
        <filter id="filter0_d_443_269" x="0.8" y="0.8" width="43.4" height="43.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="3.1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_443_269"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_443_269" result="shape"/>
        </filter>
        </defs>
      </svg>
      </a>
      <Modal
        title="SELECT PREFERENCE"
        width={375}
        centered
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: "black" } }}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <Button onClick={handleCancel} className="bg-gray-900 py-3 text-white w-full">ADD YOUR PATEUP CARD</Button> */}
          </>
        )}
      >
        <div className="flex flex-col gap-5">
          <hr className="w-full" />
          <div className="flex flex-row gap-3 w-full">
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
              <Image
                src={imageArray[index]}
                alt=""
                width={400}
                height={400}
                className="w-40"
              />
            </div>
            <div className="flex flex-col w-48">
              <div className="flex justify-between">
                <div className="flex flex-row gap-">
                  <svg
                    width="92"
                    height="17"
                    viewBox="0 0 92 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <path
                          key={index}
                          d={paths[0].d}
                          fill={paths[0].fill}
                          stroke={paths[0].stroke}
                          transform={`translate(${index * 20}, 0)`}
                        />
                      ))}
                  </svg>
                  <p className="font-thin text-gray-900 text-[10px] md:text-md px-1 pt-[2px]">
                    {item[3]}
                  </p>
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

            <hr />
            {divs.map((div, index) => (
              <>
                <div key={index} className="flex justify-between">
                  {selectedLabel !== "Book by Seats" ? (
                    <>
                      <button
                        className="bg-  text-2xl text-black ml-3"
                        onClick={() => removeDiv(index)}
                      >
                        -
                      </button>
                      <p className="p-2 pl-3 pt-3 text-sm font-light">
                        {" "}
                        {selectedLabel !== "Book by Seats"
                          ? "Select the No of seated Table"
                          : "Select the No of Guests"}
                      </p>
                      <div className="inline-block relative w-36 px-2 pt-3">
                        <select className="block appearance-none rounded-lg w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline">
                          <option>2 Seated</option>
                          <option>4 Seated</option>
                          <option>6 Seated</option>
                          <option>8 Seated</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <hr className="w-full" />
              </>
            ))}
            {selectedLabel !== "Book by Seats" ? (
              <></>
            ) : (
              <div className="flex flex-row items-center justify-between">
                <p className="p-2 pl-6 pt-3 text-sm font-light">
                  {" "}
                  {selectedLabel !== "Book by Seats"
                    ? "Select the No of seated Table"
                    : "Select the No of Guests"}
                </p>
                <input
                  type="number"
                  className="m-2 px-2 py-1 w-20 rounded-lg border-gray-400 border-spacing-3 bg-gray-100 focus:border-whit hover:border-white focus:ring-white"
                />
              </div>
            )}
            <hr />
            {selectedLabel == "Book by Seats" ? (
              <></>
            ) : (
              <>
                <div className="flex flex-row items-center">
                  <button
                    onClick={addDiv}
                    className="bg- border text-md text-black p-2 py-0 pb-0.5 rounded-full m-2 ml-5"
                  >
                    +
                  </button>
                  <p className="text-sm font-light">Add another Table</p>
                </div>
                <hr />
              </>
            )}
            <div className="p-2 py-4 text-sm font-light">
              {selectedLabel !== "Book by Table" && (
                <>
                  <Checkbox onChange={onChange}>
                    I did prefer nearest seats
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    I did prefer opposite seats
                  </Checkbox>
                  <Checkbox onChange={onChange}>
                    I did prefer same Table
                  </Checkbox>
                </>
              )}
              {selectedLabel !== "Book by Seats" && (
                <Checkbox onChange={onChange}>I did prefer same Table</Checkbox>
              )}
            </div>
          </div>
          <div className="h-10 w-full" onClick={() => setIsModalOpen(false)}>
            <ModalPayment />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCart;
