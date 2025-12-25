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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader?: any;
  bgcolor?:
    | "black"
    | "lightPink"
    | "darkPink"
    | "dirtyPink"
    | "iceBlue"
    | "darkGray"
    | "white"
    | "transparent"
    | "lightGray"
    | "mediumGray"
    | "red";
  icon?: React.ReactNode;
  titleColor?: "black" | "white" | "dirtyPink" | "mediumBrown";
}

const Button = ({
  className,
  type,
  onClick = () => {},
  title,
  disabled = false,
  bgcolor = "transparent",
  rounded,
  icon,
  titleColor = "black",
  loader,
}: ButtonProps) => {
  const buttonStyles = classNames("btn", {
    "rounded-sm": rounded === "sm",
    "rounded-md": rounded === "md",
    "rounded-lg": rounded === "lg",
    "rounded-xl": rounded === "xl",
    "rounded-full": rounded === "full",
    "bg-black": bgcolor === "black",
    "bg-light-pink": bgcolor === "lightPink",
    "bg-dirty-pink": bgcolor === "dirtyPink",
    "bg-dark-pink": bgcolor === "darkPink",
    "bg-ice-blue": bgcolor === "iceBlue",
    "bg-light-gray": bgcolor === "lightGray",
    "bg-red-500": bgcolor === "red",
    "bg-white": bgcolor === "white",
    "bg-dark-gray": bgcolor === "darkGray",
    "bg-medium-gray": bgcolor === "mediumGray",
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
      <div>{loader}</div>
      <span>{title}</span>
    </button>
  );
};

export default Button;
