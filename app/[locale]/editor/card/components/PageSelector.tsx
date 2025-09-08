"use client";

import { setActivePage } from "@/app/store/features/cardEditorSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { ActivePageType } from "@/app/types/cardEditor";
import { useDispatch, useSelector } from "react-redux";

interface PageProps {
  page: ActivePageType;
  isActive: boolean;
}

const Page = ({ page, isActive }: PageProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChoosePage = (page: ActivePageType) => {
    dispatch(setActivePage(page));
  };

  return (
    <div
      className={`w-16 h-24 bg-light-pink rounded cursor-pointer ${
        isActive && "border-2 border-medium-pink"
      }`}
      onClick={() => handleChoosePage(page)}
    ></div>
  );
};

const PageSelector = () => {
  const {
    pages: { firstPage, secondPage, thirdPage, fourthPage },
    activePage,
  } = useSelector((state: RootState) => state.cardEditorSlice);

  return (
    <div className="flex gap-3">
      <Page isActive={firstPage.id === activePage.id} page={firstPage} />
      <Page isActive={secondPage.id === activePage.id} page={secondPage} />
      <Page isActive={thirdPage.id === activePage.id} page={thirdPage} />
      <Page isActive={fourthPage.id === activePage.id} page={fourthPage} />
    </div>
  );
};

export default PageSelector;
