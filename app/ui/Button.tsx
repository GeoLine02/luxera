"use client";

import classNames from "classnames";

interface ButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  type: "button" | "submit";
  className?: string;
  title: string;
  disabled?: boolean;
  rounded: "sm" | "md" | "lg" | "xl" | "full";
  bgColor?:
    | "black"
    | "lightPink"
    | "darkPink"
    | "dirtyPink"
    | "iceBlue"
    | "transparent";
  icon?: React.ReactNode;
  titleColor?: "black" | "white" | "dirtyPink" | "mediumBrown";
}

const Button = ({
  className,
  type,
  onClick = () => {},
  title,
  disabled = false,
  bgColor = "transparent",
  rounded,
  icon,
  titleColor = "black",
}: ButtonProps) => {
  const buttonStyles = classNames("btn", {
    "rounded-sm": rounded === "sm",
    "rounded-md": rounded === "md",
    "rounded-lg": rounded === "lg",
    "rounded-xl": rounded === "xl",
    "rounded-full": rounded === "full",
    "bg-black": bgColor === "black",
    "bg-light-pink": bgColor === "lightPink",
    "bg-dirty-pink": bgColor === "dirtyPink",
    "bg-dark-pink": bgColor === "darkPink",
    "bg-ice-blue": bgColor === "iceBlue",
    "text-black": titleColor === "black",
    "text-white": titleColor === "white",
    "text-dirty-pink": titleColor === "dirtyPink",
    "text-medium-brown": titleColor === "mediumBrown",
  });

  return (
    <button
      className={`cursor-pointer w-full ${className} ${buttonStyles}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <div>{icon}</div>
      <span>{title}</span>
    </button>
  );
};

export default Button;
