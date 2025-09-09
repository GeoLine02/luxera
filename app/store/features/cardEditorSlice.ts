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
      id: 1,
      coverImage: "",
      userImage: null,
      userText: "",
    },
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
