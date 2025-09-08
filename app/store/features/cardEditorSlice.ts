import { pagesData } from "@/app/[locale]/editor/card/pagesData";
import {
  ActivePageType,
  EditorActiveSettingType,
  EditorCardType,
} from "@/app/types/cardEditor";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialStateType {
  pages: EditorCardType;
  activePage: ActivePageType;
  activeSetting: EditorActiveSettingType;
  allImages: string[];
}

const cardEditorSlice = createSlice({
  initialState: <IinitialStateType>{
    pages: pagesData,
    activePage: pagesData.firstPage,
    activeSetting: null,
    allImages: [],
  },
  name: "cardEditorSlice",
  reducers: {
    setActivePage: (state, action) => {
      const activePage = action.payload;

      console.log("activePageee: ", activePage);

      state.activePage = activePage;
    },
    setActiveSetting: (state, action) => {
      const activeSetting = action.payload;
      state.activeSetting = activeSetting;
    },

    setFirstPageImage: (state, action) => {
      const uploadedFile: string = action.payload;

      if (uploadedFile) {
        state.pages = {
          firstPage: { ...state.pages.firstPage, userImage: uploadedFile },
          secondPage: { ...state.pages.secondPage },
          thirdPage: { ...state.pages.thirdPage },
          fourthPage: { ...state.pages.fourthPage },
        };

        if (state.activePage.id === 1) {
          state.activePage = {
            ...state.activePage,
            userImage: uploadedFile,
          };
        }

        state.allImages = [...state.allImages, uploadedFile];
      }
    },
  },
});

export const { setActivePage, setActiveSetting, setFirstPageImage } =
  cardEditorSlice.actions;
export default cardEditorSlice.reducer;
