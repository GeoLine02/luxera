import DropDown from "@/app/ui/DropDown";
import { IoIosArrowDown } from "react-icons/io";

export default function CustomDropdown() {
  return (
    <DropDown>
      <DropDown.Trigger>
        <div className="border-2 border-light-gray rounded-xl p-2 w-full max-w-[160px] flex justify-between items-center gap-3">
          <h1>Newest</h1>
          <div className="border-2  border-light-gray rounded-full w-[32px] aspect-square flex items-center justify-center">
            <IoIosArrowDown />
          </div>
        </div>
      </DropDown.Trigger>

      <DropDown.Content>
        <DropDown.Item onClick={() => alert("Newest")}>Newest</DropDown.Item>
        <DropDown.Item onClick={() => alert("Oldest")}>Oldest</DropDown.Item>
        <DropDown.Item onClick={() => alert("Popular")}>Popular</DropDown.Item>
      </DropDown.Content>
    </DropDown>
  );
}
