"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Disclaimere = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className=" bg-warm-white w-[90vw] h-[90vh] p-6 border border-light-gray rounded-2xl fixed  z-50 ">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full">
              <div className="float-right">
                <IoMdClose
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                  size={35}
                />
              </div>
            </div>
            <div className="space-y-5 flex flex-col items-center justify-center h-full">
              <h1 className="text-5xl font-medium">For Recruiters:</h1>
              <p className="text-xl max-w-xl">
                The Reason why I put this project in my resume is that even if
                its not finished and missing most of its functionaility. it
                explains that am righting clean and reusable code wiht help of
                SOLID and OOP principals
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Disclaimere;
