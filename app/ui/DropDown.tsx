"use client";

import classNames from "classnames";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "Dropdown compound components must be used within <Dropdown>"
    );
  }
  return context;
};

interface DropdownProps {
  children: ReactNode;
}

export const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Delay close to let the click propagate
        setTimeout(() => {
          close();
        }, 0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={dropdownRef} className="relative flex flex-col">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

interface TriggerProps {
  children: ReactNode;
  className?: string;
}

const Trigger = ({ children, className }: TriggerProps) => {
  const { toggle } = useDropdown();
  return (
    <button
      onClick={toggle}
      className={`${className} cursor-pointer rounded-lg`}
    >
      {children}
    </button>
  );
};

interface MenuProps {
  children: ReactNode;
  expandMode: ExpandModeType;
  className?: string;
}

type ExpandModeType = "overlay" | "absolute";

const Menu = ({ children, expandMode, className }: MenuProps) => {
  const { isOpen } = useDropdown();

  const dropDownMenuTransition = classNames("dropdown-animation", {
    "dropdown-open": isOpen,
    "dropdown-closed": !isOpen,
    absolute: expandMode === "absolute",
    overlay: expandMode === "overlay",
  });

  return (
    <div
      className={`${dropDownMenuTransition} ${className} bg-white left-0 w-full top-[75px] rounded shadow-lg z-10`}
    >
      {children}
    </div>
  );
};

interface ItemProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
}

const Item = ({ children, onSelect, className }: ItemProps) => {
  const { close } = useDropdown();

  const handleClick = () => {
    onSelect?.();
    close();
  };

  return (
    <div
      onClick={handleClick}
      className={`p-4 ${className} hover:bg-gray-100 cursor-pointer`}
    >
      {children}
    </div>
  );
};

// Compound pattern
Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
