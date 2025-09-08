"use client";

import { useSelector } from "react-redux";
import ImagesSideBar from "./ImagesSideBar";
import LayoutSideBar from "./LayoutSideBar";
import { RootState } from "@/app/store/store";

const SideBar = () => {
  const { activeSetting, activePage } = useSelector(
    (state: RootState) => state.cardEditorSlice
  );
  const isMiddlePage = activePage.id === 2 || activePage.id === 3;

  return (
    <>
      {isMiddlePage && activeSetting && (
        <div className="border-r-2 border-medium-gray w-full max-w-[20%] h-full p-2">
          {activeSetting === "layouts" && <LayoutSideBar />}
          {activeSetting === "images" && <ImagesSideBar />}
        </div>
      )}
    </>
  );
};

export default SideBar;
