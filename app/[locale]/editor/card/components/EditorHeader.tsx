"use client";

import Button from "@/app/ui/Button";
import { IoClose } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuUndo2, LuRedo2, LuSave } from "react-icons/lu";

interface ActionButtonProps {
  label: string;
  Icon: IconType;
  iconSize: number;
  onClick: () => void;
}
const ActionButton = ({
  Icon,
  iconSize,
  label,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 sm:gap-2 hover:underline cursor-pointer"
    >
      <Icon size={iconSize} />
      <span className="font-medium text-sm sm:text-base md:text-lg">
        {label}
      </span>
    </button>
  );
};

const EditorHeader = () => {
  return (
    <header className="flex items-center justify-between px-3 md:px-11 py-3 sm:py-4 bg-light-pink border-b-2 border-medium-gray w-full">
      {/* Exit button goes left on desktop, stays inline on mobile */}
      <div className="hidden sm:block">
        <ActionButton
          Icon={IoClose}
          iconSize={30}
          label="Exit"
          onClick={() => {}}
        />
      </div>

      <section className="flex flex-wrap justify-between sm:justify-end gap-3 sm:gap-6 items-center md:w-full">
        {/* Mobile exit button (inline with actions) */}
        <div className="sm:hidden">
          <ActionButton
            Icon={IoClose}
            iconSize={30}
            label="Exit"
            onClick={() => {}}
          />
        </div>

        <ActionButton
          Icon={LuUndo2}
          iconSize={24}
          label="Undo"
          onClick={() => {}}
        />
        <ActionButton
          Icon={LuRedo2}
          iconSize={24}
          label="Redo"
          onClick={() => {}}
        />
        <ActionButton
          Icon={LuSave}
          iconSize={24}
          label="Save"
          onClick={() => {}}
        />
        <Button
          rounded="md"
          title="Preview"
          type="button"
          bgcolor="darkPink"
          className="px-3 sm:px-6 py-2 w-fit text-sm sm:text-base md:text-xl md:w-auto"
          onClick={() => {}}
          titleColor="white"
        />
      </section>
    </header>
  );
};

export default EditorHeader;
