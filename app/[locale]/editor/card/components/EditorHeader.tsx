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
      className="flex items-center gap-2 hover:underline cursor-pointer"
    >
      <Icon size={iconSize} />
      <span className="font-medium text-lg">{label}</span>
    </button>
  );
};

const EditorHeader = () => {
  return (
    <header className="flex items-center justify-between px-11 py-4 bg-light-pink border-b-2 border-medium-gray w-full">
      <ActionButton
        Icon={IoClose}
        iconSize={40}
        label="Exit"
        onClick={() => {}}
      />

      <section className="flex gap-6 items-center">
        <ActionButton
          Icon={LuUndo2}
          iconSize={30}
          label="Undo"
          onClick={() => {}}
        />
        <ActionButton
          Icon={LuRedo2}
          iconSize={30}
          label="Redo"
          onClick={() => {}}
        />
        <ActionButton
          Icon={LuSave}
          iconSize={30}
          label="Save"
          onClick={() => {}}
        />
        <Button
          rounded="md"
          title="Preview Design"
          type="button"
          bgColor="darkPink"
          className="px-6 py-2 w-fit text-xl"
          onClick={() => {}}
          titleColor="white"
        />
      </section>
    </header>
  );
};

export default EditorHeader;
