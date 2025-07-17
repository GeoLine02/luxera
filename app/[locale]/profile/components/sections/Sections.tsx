"use client";

import { useSelector } from "react-redux";
import LoginAndSecurity from "./loginAndSecurity/LoginAndSecurity";
import { RootState } from "@/app/store/store";

const Sections = () => {
  const { activeSection } = useSelector(
    (state: RootState) => state.profileReducer
  );

  return (
    <div className="w-full">
      {activeSection === "loginAndSecurity" && <LoginAndSecurity />}
    </div>
  );
};

export default Sections;
