import React, { useState } from "react";
import { Button, Modal } from "antd";
import FrameCalendar from "./Calendar";
import TimeFrame from "./TimeFrame";

const ModalTimeFrame: React.FC = () => {
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
      <Button
        className=" lg:hidden text-white bg-[#2F383A] border border-[#384345] w-full py-5 text-lg"
        onClick={showModal}
      >
        Select Time
      </Button>
      <Modal
        title="Select your time frame"
        width={375}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { backgroundColor: "black" } }}
      >
        <div className="flex flex-col gap-5">
          <FrameCalendar />
          <TimeFrame />
        </div>
      </Modal>
    </>
  );
};

export default ModalTimeFrame;
