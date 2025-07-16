"use client";

import { selectSection } from "@/app/store/features/profileSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

const ProfileSectionSelector = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { activeSection, sections } = useSelector(
    (state: RootState) => state.profileReducer
  );
  console.log(activeSection);
  const activeSectionStyles = classNames({
    "text-black": activeSection,
  });

  const handleSelectSection = (sectionAccessorKey: string) => {
    dispatch(selectSection(sectionAccessorKey));
  };

  return (
    <div className="flex flex-col gap-10 p-[48px] bg-white rounded-xl">
      {sections.map((section) => {
        const { accessorKey, label } = section;

        return (
          <div
            onClick={() => handleSelectSection(accessorKey)}
            className={`${activeSectionStyles} flex items-center gap-2 text-medium-gray cursor-pointer`}
            key={accessorKey}
          >
            {/* <Icon /> */}
            <span className="font-medium">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSectionSelector;
