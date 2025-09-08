"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";

const ActivePage = () => {
  const { activePage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );

  return (
    <div className="w-full md:w-[25%] h-[80%] mb-14 md:mb-0  flex justify-center items-center">
      <div className="h-full w-[80%] mx-auto md:w-full px-4 bg-light-pink">
        {activePage.id === 1 && <FirstPage />}
        {activePage.id === 2 && <SecondPage />}
        {activePage.id === 3 && <ThirdPage />}
        {activePage.id === 4 && <FourthPage />}
      </div>
    </div>
  );
};

export default ActivePage;
