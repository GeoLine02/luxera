"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";

interface DropDownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DropDownContext = createContext<DropDownContextType | undefined>(
  undefined
);

const useDropDown = () => {
  const context = useContext(DropDownContext);
  if (!context)
    throw new Error("DropDown components must be used within <DropDown>");
  return context;
};

interface DropDownProps {
  children: ReactNode;
}

const DropDown = ({ children }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <DropDownContext.Provider value={{ isOpen, toggle, close }}>
      <div className="relative inline-block">{children}</div>
    </DropDownContext.Provider>
  );
};

// DropDown.tsx (updated Trigger)
const Trigger = ({ children }: { children: ReactNode }) => {
  const { toggle } = useDropDown();
  return (
    <div onClick={toggle} className="cursor-pointer select-none">
      {children}
    </div>
  );
};

const Content = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { isOpen, close } = useDropDown();

  if (!isOpen) return null;

  return (
    <div
      className={`border-2 border-light-gray absolute mt-2 w-48 bg-white rounded-xl z-50 ${className}`}
      onClick={close}
    >
      {children}
    </div>
  );
};

const Item = ({
  children,
  onClick,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  const { close } = useDropDown();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    close();
  };

  return (
    <div
      {...rest}
      onClick={handleClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
};

// Attach subcomponents
DropDown.Trigger = Trigger;
DropDown.Content = Content;
DropDown.Item = Item;

export default DropDown;
