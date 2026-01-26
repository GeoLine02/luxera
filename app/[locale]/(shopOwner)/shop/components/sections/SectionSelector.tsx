"use client";

import classNames from "classnames";
import { useState } from "react";
import { IconType } from "react-icons/lib";
import { sectionsData } from "../../data/sectionsData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { changeSection, closeSection } from "@/app/store/features/shopSlice";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useLocale } from "next-intl";

interface SectionProps {
  label: string;
  accessorKey: string;
  Icon: IconType;
  isActive: boolean;
  href?: string;
}

const Section = ({
  accessorKey,
  label,
  Icon,
  isActive,
  href,
}: SectionProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeSection = () => {
    dispatch(changeSection(accessorKey));
    dispatch(closeSection());
  };

  const handleCloseSections = () => {
    dispatch(closeSection());
  };

  const activeSection = classNames({
    "bg-dark-gray rounded-r-xl text-white": isActive,
    "text-dark-gray": !isActive,
  });

  const sharedClassName = `${activeSection} px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-dark-gray/80 hover:rounded-r-xl hover:text-white`;

  if (href) {
    return (
      <Link href={href} onClick={handleCloseSections} className={sharedClassName}>
        <Icon size={25} />
        <h1>{label}</h1>
      </Link>
    );
  }

  return (
    <div onClick={handleChangeSection} className={sharedClassName}>
      <Icon size={25} />
      <h1>{label}</h1>
    </div>
  );
};

const SectionSelector = () => {
  const [sections] = useState(sectionsData);
  const { activeSection, isSectionsOpen } = useSelector(
    (state: RootState) => state.shopSLice
  );
  const dispatch = useDispatch<AppDispatch>();
  const locale = useLocale();

  const mobileSectionStyles = classNames(
    "transition-all fixed duration-300 z-50 top-0 h-full max-w-[300px]",
    {
      "left-0": isSectionsOpen,
      "-left-[100%]": !isSectionsOpen,
    }
  );

  const handleCloseSections = () => {
    dispatch(closeSection());
  };

  return (
    <div
      className={`${mobileSectionStyles} md:static bg-white p-4 border-r-2 md:max-w-[400px] border-light-gray flex flex-col min-h-screen`}
    >
      <section className="flex justify-between items-center md:block">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-dark-gray">
            Luxera Gift
          </h1>
          <h2 className="text-medium-gray">seller panel</h2>
        </div>
        <div
          onClick={handleCloseSections}
          className="cursor-pointer md:hidden "
        >
          <IoClose size={25} />
        </div>
      </section>

      <div className="mt-9 flex flex-col flex-1">
        <section>
          {sections
            .filter((section) => section.accessorKey !== "backToMain")
            .map((section) => (
              <Section
                key={section.accessorKey}
                accessorKey={section.accessorKey}
                label={section.label}
                Icon={section.Icon}
                isActive={section.accessorKey === activeSection}
              />
            ))}
        </section>
        <section className="mt-auto pt-8">
          {sections
            .filter((section) => section.accessorKey === "backToMain")
            .map((section) => (
              <Section
                key={section.accessorKey}
                accessorKey={section.accessorKey}
                label={section.label}
                Icon={section.Icon}
                href={`/${locale}`}
                isActive={false}
              />
            ))}
        </section>
      </div>
    </div>
  );
};

export default SectionSelector;
