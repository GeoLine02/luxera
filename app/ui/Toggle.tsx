import classNames from "classnames";
import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleStyles = classNames("transition-all duration-300", {
    "left-6": isToggled,
    "left-1": !isToggled,
  });

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="w-11 h-6 rounded-full relative bg-dark-gray flex items-center justify-center ">
      <div
        onClick={handleToggle}
        className={`${toggleStyles} p-1 w-4 aspect-square rounded-full bg-white absolute cursor-pointer`}
      ></div>
    </div>
  );
};

export default Toggle;
