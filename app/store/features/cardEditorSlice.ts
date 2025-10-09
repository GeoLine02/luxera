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
  firstPage: EditorCardType["firstPage"];
}

const cardEditorSlice = createSlice({
  initialState: <IinitialStateType>{
    pages: pagesData,
    activePage: pagesData.firstPage,
    activeSetting: null,
    allImages: [],
    firstPage: {
      coverImage: "",
      id: 1,
      pagePreview: "",
      userImageAngle: 0,
      userImageZoom: 100,
      userImage: null,
      imagePlaceholderAngle: 45,
      textAngle: 45,
      userImageCordinates: {
        top: 12,
        left: 20,
        bottom: 20,
        right: 100,
      },
      userText: "",
      userTextCordinates: {
        bottom: 40,
        right: 20,
      },
    },
  },
  name: "cardEditorSlice",
  reducers: {
    setActivePage: (state, action) => {
      const activePage = action.payload;

      state.activePage = activePage;
    },
    setActiveSetting: (state, action) => {
      const activeSetting = action.payload;
      state.activeSetting = activeSetting;
    },

    manageFirstPage: (state, action) => {
      const { userImage, userText }: Partial<EditorCardType["firstPage"]> =
        action.payload;

      if (userImage) {
        state.firstPage = {
          ...state.firstPage,
          userImage,
        };
      }

      if (userText) {
        state.firstPage = {
          ...state.firstPage,
          userText,
        };
      }
    },
  },
});

export const { setActivePage, setActiveSetting, manageFirstPage } =
  cardEditorSlice.actions;
export default cardEditorSlice.reducer;
