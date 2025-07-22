"use client";

import { selectSection } from "@/app/store/features/profileSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { ProfileSectionType } from "@/app/types/profile";
import { profileSectionsData } from "@/data/profile";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    <div className="flex flex-col gap-10 p-[48px] bg-white rounded-xl w-full max-w-[256px]">
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
  );
};

export default ProfileSectionSelector;
