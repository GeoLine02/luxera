import classNames from "classnames";
import { useState } from "react";

interface ToggleProps {
  onClick: () => void;
}

const Toggle = ({ onClick }: ToggleProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleStyles = classNames("transition-all duration-300", {
    "left-6": isToggled,
    "left-1": !isToggled,
  });

  const handleToggle = () => {
    onClick();
    setIsToggled(!isToggled);
  };

  return (
    <div
      onClick={handleToggle}
      className="w-11 h-6 rounded-full relative bg-dark-gray flex items-center justify-center cursor-pointer"
    >
      <div
        className={`${toggleStyles} p-1 w-4 aspect-square rounded-full bg-white absolute`}
      ></div>
    </div>
  );
};

export default Toggle;
