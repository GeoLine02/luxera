"use client";

import Button from "@/app/ui/Button";
import Modal from "@/app/ui/Modal";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const AdvertismentBalance = () => {
  const [isCardInfoModalOpen, setIsCardInfoModalOpen] =
    useState<boolean>(false);

  const handleOpenModal = () => {
    setIsCardInfoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCardInfoModalOpen(false);
  };

  return (
    <section className="bg-white rounded-xl p-4 shadow-xl shadow-gray-300 flex flex-col  justify-between mt-9 md:flex-row md:items-center gap-2">
      <div className="space-y-1">
        <h2 className="font-medium">თქვენი სარეკლამო ბალანსი</h2>
        <h1 className="font-bold text-3xl">320.50 GEL</h1>
      </div>

      <Button
        onClick={handleOpenModal}
        icon={<IoMdAddCircle size={25} className="text-white" />}
        rounded="lg"
        title="ბალანსის შევსება"
        type="button"
        bgColor="darkGray"
        className="py-2 px-4 font-medium flex justify-center gap-2 items-center md:!w-fit"
        titleColor="white"
      />

      {isCardInfoModalOpen && (
        <Modal>
          <div className="bg-white rounded-xl p-4 space-y-6 md:min-w-[600px]">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-medium text-dark-gray">გადახდა</h1>
              <div className="cursor-pointer" onClick={handleCloseModal}>
                <IoClose size={25} />
              </div>
            </div>
            <p className="text-medium-gray">
              გადასახდელი თანხა:{" "}
              <span className="text-dark-gray font-medium">5.00 GEL</span>
            </p>
            <div className="flex flex-col gap-1">
              <label className="text-sm" htmlFor="cardNumber">
                ბარათის ნომერი
              </label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </div>

            <div className="w-full flex">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm" htmlFor="expDate">
                  მოქედების ვადა
                </label>
                <input type="date" />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-sm" htmlFor="cvc">
                  CVC
                </label>
                <input type="text" />
              </div>
            </div>
            <Button
              rounded="lg"
              title="გადახდა"
              type="button"
              bgColor="darkGray"
              className="py-3 px-4"
              titleColor="white"
            />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default AdvertismentBalance;
