import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import cardBg from "../../dine/assets/images/cardBg.png";
import MealExpress from "../../dine/assets/images/MealExpress.png";

const ModalPayment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [value, setValue] = useState("");

  const formatMMYY = (inputValue: string) => {
    // Remove any non-numeric characters
    const cleanedValue = inputValue.replace(/[^0-9]/g, "");

    // Format as MM/YY
    if (cleanedValue.length <= 2) {
      return cleanedValue;
    } else if (cleanedValue.length <= 4) {
      return cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2);
    } else {
      return cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatMMYY(e.target.value);
    setValue(formattedValue);
  };

  const handleError = () => {
    let timer;
    if (error) {
      clearTimeout(timer);
    }
    setError(true);
    timer = setTimeout(() => setError(false), 3000);
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
        title="PAYMENT"
        width={375}
        centered
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { backgroundColor: "black" } }}
        onCancel={handleCancel}
        footer={() => <></>}
      >
        <div>
          <hr className="w-full pb-2" />
          <h1 className="pb-3">Enter Your Card details</h1>
          <div>
            <div className="w-full relative overflow-hidden h-60">
              <div className="absolute flex flex-col gap-2 z-10 p-4 w-full">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-gray-300">Plateup Card</p>
                    <svg
                      width="36"
                      height="29"
                      viewBox="0 0 36 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0H23.5C24 0 25 0.5 26 1.5C27 2.5 32 7.33333 34.5 9.5C34.8333 9.66667 35.5 10.4 35.5 12V25C35.5 26.1667 35 28.5 33 28.5H2C1.33333 28.3333 0 27.6 0 26V3C0 2 0.6 0 3 0ZM6 5.5C4 7 5.59168 10.2042 8 9C10 8 8.5 4 6 5.5ZM17 12.5C15 14 16.5917 17.2042 19 16C21 15 19.5 11 17 12.5ZM6 19.5C4 21 5.59168 24.2042 8 23C10 22 8.5 18 6 19.5ZM14.5 23C11.8074 23 12 19.4485 14.5 19.4485C15.6303 19.4485 16.1317 19.4176 17.6323 19.4485C20.1323 19.5 20.0998 23 17.6323 23H14.5ZM7.36775 16.0515C4.67517 16.0515 4.86775 12.5 7.36775 12.5C8.49804 12.5 8.99943 12.4691 10.5 12.5C13 12.5515 12.9676 16.0515 10.5 16.0515H7.36775ZM14.5 9.05151C11.8074 9.05151 12 5.5 14.5 5.5C15.6303 5.5 16.1317 5.46908 17.6323 5.5C20.1323 5.55151 20.0998 9.05151 17.6323 9.05151H14.5Z"
                        fill="#EDCCB7"
                      />
                    </svg>
                  </div>
                  <Image
                    src={MealExpress}
                    alt="mealExpress"
                    className="w-16 h-8"
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <p className=" text-xs text-gray-300">Card Number*</p>
                    <input
                      type="text"
                      maxLength={16}
                      className="text-white w-full px-4 rounded-lg border-gray-400 bg-opacity-30 py-2 border"
                      placeholder="0000 0000 0000 000"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="w-full text-xs text-gray-300">CVV*</p>
                    <input
                      type="password"
                      maxLength={3}
                      className="text-white w-20 px-4 rounded-lg border-gray-400 bg-opacity-30 py-2 border"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <p className=" text-xs text-gray-300">Name</p>
                    <input
                      type="text"
                      className="text-white w-full px-4 rounded-lg border-gray-400 bg-opacity-30 py-2 border"
                      placeholder="RAVI BANSAL"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="w-full text-xs text-gray-300">Expiry date</p>
                    <input
                      type="text"
                      className="text-white w-full px-4 rounded-lg border-gray-400 bg-opacity-30 py-2 border"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={value}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <Image
                  src={cardBg}
                  alt="..."
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20">
          <span className="text-red-600 h-4 p-1">
            {error && "Oops! Invalid Card details"}
          </span>
        </div>
        <button
          onClick={handleError}
          className="mb-0 w-full px-3 py-3 rounded-lg bg-black hover:bg-gray-900 text-white"
        >
          Add your Plateup Card
        </button>
      </Modal>
    </>
  );
};

export default ModalPayment;
