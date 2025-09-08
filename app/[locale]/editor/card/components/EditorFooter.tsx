"use client";

import { setActiveSetting } from "@/app/store/features/cardEditorSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { EditorActiveSettingType } from "@/app/types/cardEditor";
import Button from "@/app/ui/Button";
import classNames from "classnames";
import { FiLayout, FiImage } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";

interface ActionButtonProps {
  isActive: boolean;
  Icon: IconType;
  iconSize: number;
  label: string;
  onClick: () => void;
}

const ActionButton = ({
  isActive,
  Icon,
  iconSize,
  label,
  onClick,
}: ActionButtonProps) => {
  const activeActionStyles = classNames({
    "bg-dark-pink w-full h-2": isActive,
    hidden: !isActive,
  });

  return (
    <div className="space-y-2">
      <button
        onClick={onClick}
        className="flex gap-2 items-center cursor-pointer"
      >
        <Icon size={iconSize} />
        <span className="font-medium text-lg">{label}</span>
      </button>

      <div className={`${activeActionStyles} w-full h-2 bg-medium-pink`}></div>
    </div>
  );
};

const EditorFooter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeSetting, activePage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );
  const handleChooseSetting = (settingLabel: EditorActiveSettingType) => {
    if (activeSetting === settingLabel) {
      console.log("enter");
      dispatch(setActiveSetting(null));
    } else {
      dispatch(setActiveSetting(settingLabel));
    }
  };

  const isMiddlePage = activePage.id === 2 || activePage.id === 3;

  return (
    <>
      {isMiddlePage && (
        <footer className="w-full border-t-2 border-medium-gray flex items-center justify-center">
          <div className="w-full py-4 max-w-[95%] flex items-center justify-center gap-6 border-r-2 border-medium-gray">
            <ActionButton
              Icon={FiImage}
              iconSize={35}
              isActive={false}
              label="Layouts"
              onClick={() => handleChooseSetting("layouts")}
            />
            <ActionButton
              Icon={FiLayout}
              iconSize={35}
              isActive={false}
              label="Images"
              onClick={() => handleChooseSetting("images")}
            />
          </div>
          <div className="w-full max-w-[10%] px-6">
            <Button
              rounded="md"
              title="Done"
              type="button"
              bgColor="darkPink"
              titleColor="white"
              className="py-2 px-4 text-lg font-medium"
              onClick={() => {}}
            />
          </div>
        </footer>
      )}
    </>
  );
};

export default EditorFooter;
