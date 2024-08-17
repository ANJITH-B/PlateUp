import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "antd";

interface ModalPaymentProps {
  item: string;
  index: number;
}

const ModalPament: React.FC<ModalPaymentProps> = ({ item, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
        okButtonProps={{ style: { backgroundColor: "black" } }}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button
              onClick={handleCancel}
              className="bg-gray-900 py-3 text-white w-full"
            >
              ADD YOUR PATEUP CARD
            </Button>
          </>
        )}
      ></Modal>
    </>
  );
};

export default ModalCart;
