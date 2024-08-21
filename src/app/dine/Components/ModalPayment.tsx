import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "antd";
import Image from "next/image";
import cardBg from "../assets/images/Cardbg.png";
interface ModalPaymentProps {
  item: string;
  index: number;
}

const ModalPayment: React.FC = () => {
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
        <button className="w-full px-3 py-3 rounded-xl bg-black hover:bg-gray-900 text-white">
          Pay using PlatUp Card
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
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button
              onClick={handleCancel}
              className="bg-gray-900 py-4 text-white w-full"
            >
              ADD YOUR PlATEUP CARD
            </Button>
          </>
        )}
      >
        <div>
          <hr className="w-full pb-2" />
          <h1>Enter Your Card details</h1>
          <div>
            
            <div className="w-full relative overflow-hidden h-60">
              <div className="absolute z-10 p-4 w-full">
                <h1 className="text-sm text-gray-300">PlateUp Card</h1>
                <input type="number w-full px-3 py-3 border" placeholder="0000 0000 0000 000"/>
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
      </Modal>
    </>
  );
};

export default ModalPayment;
