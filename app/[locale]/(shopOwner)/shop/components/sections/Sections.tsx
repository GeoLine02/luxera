"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import MainSection from "./mainSection/MainSection";

const Sections = () => {
  const { activeSection } = useSelector((state: RootState) => state.shopSLice);

  return (
    <div className="p-4 bg-ice-blue w-full h-full">
      {activeSection === "main" && <MainSection />}
    </div>
  );
};

export default Sections;
