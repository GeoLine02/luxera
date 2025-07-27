"use client";

import { selectSection } from "@/app/store/features/profileSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { ProfileSectionType } from "@/app/types/profile";
import { Dropdown } from "@/app/ui/DropDown";
import { profileSectionsData } from "@/data/profile";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

const ProfileSectionSelector = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [sections] = useState<ProfileSectionType[]>(profileSectionsData);
  const { activeSection } = useSelector(
    (state: RootState) => state.profileReducer
  );

  const handleSelectSection = (sectionAccessorKey: string) => {
    dispatch(selectSection(sectionAccessorKey));
  };

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <Dropdown>
          <Dropdown.Trigger className="flex items-center rounded-lg border-2 border-dirty-pink justify-between w-full bg-white py-2 px-4">
            <span>{activeSection}</span>
            <IoIosArrowDown size={25} />
          </Dropdown.Trigger>
          <Dropdown.Menu expandMode="absolute">
            {sections.map((section) => (
              <div
                onClick={() => handleSelectSection(section.accessorKey)}
                key={section.accessorKey}
              >
                <Dropdown.Item>{section.label}</Dropdown.Item>
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Desktop */}
      <div className="hidden flex-col gap-10 p-[48px] bg-white rounded-xl w-full h-fit max-w-[256px] md:flex">
        {sections.map((section) => {
          const { accessorKey, label } = section;

          const sectionClasses = classNames(
            "flex items-center gap-2 cursor-pointer font-medium",
            {
              "text-black": accessorKey === activeSection,
              "text-medium-gray": accessorKey !== activeSection,
            }
          );

          return (
            <div
              onClick={() => handleSelectSection(accessorKey)}
              className={sectionClasses}
              key={accessorKey}
            >
              {/* <Icon /> */}
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfileSectionSelector;
