import { ProfileSectionType } from "@/app/types/profile";
import { profileSectionsData } from "@/data/profile";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  activeSection: string;
  sections: ProfileSectionType[];
}

export const profileSlice = createSlice({
  name: "profile",
  initialState: <InitialStateType>{
    sections: profileSectionsData,
    activeSection: "personalInfo",
  },
  reducers: {
    selectSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { selectSection } = profileSlice.actions;
export default profileSlice.reducer;
