"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import MyProfileSection from "./myProfileSection/MyProfileSection";
import { useEffect } from "react";
import { selectSection } from "@/app/store/features/profileSlice";
import WhishListSection from "./whishListSection/WhishListSection";
import OrderHistorySection from "./orderHistorySection/OrderHistorySection";

const Sections = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { activeSection } = useSelector(
    (state: RootState) => state.profileReducer
  );

  useEffect(() => {
    dispatch(selectSection("profile"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      {activeSection === "profile" && <MyProfileSection />}
      {activeSection === "whishlist" && <WhishListSection />}
      {activeSection === "orderHistory" && <OrderHistorySection />}
    </div>
  );
};

export default Sections;
