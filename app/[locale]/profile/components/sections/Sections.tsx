"use client";

import { useSelector } from "react-redux";
import LoginAndSecurity from "./loginAndSecurity/LoginAndSecurity";
import { RootState } from "@/app/store/store";
import MyPayments from "./myPayments/MyPayments";

const Sections = () => {
  const { activeSection } = useSelector(
    (state: RootState) => state.profileReducer
  );
  return (
    <div className="w-full">
      {activeSection === "loginAndSecurity" && <LoginAndSecurity />}
      {activeSection === "myPayments" && <MyPayments />}
    </div>
  );
};

export default Sections;
