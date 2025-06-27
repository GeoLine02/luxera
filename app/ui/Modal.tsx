import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="flex items-center fixed left-0 top-0 justify-center h-screen w-screen z-50 bg-black/70">
      <div>{children}</div>
    </div>
  );
};

export default Modal;
