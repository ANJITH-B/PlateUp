import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import cardBg from "../assets/images/cardBg.png";
import MealExpress from "../assets/images/MealExpress.png";

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
        <button className="w-full px-3 py-3 rounded-lg bg-black hover:bg-gray-900 text-white">
          Pay using Plateup Card
        </button>
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
