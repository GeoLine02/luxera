import { EditorCardType } from "@/app/types/cardEditor";

export const pagesData: EditorCardType = {
  firstPage: {
    id: 1,
    coverImage: "",
    userImage: null,
    userImageCordinates: { top: 0, left: 0, bottom: 0, right: 0 },
    pagePreview: "",
    imagePlaceholderAngle: 0,
    userTextCordinates: {
      top: 120,
      left: 10,
      bottom: 100,
      right: 20,
    },
    userText: "",
    userImageAngle: 0,
    textAngle: 45,
    userImageZoom: 100,
  },
  secondPage: {
    id: 2,
    userText: "",
    userTextCordinates: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  thirdPage: {
    id: 3,
    userImage: null,
    userImageCordinates: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  fourthPage: {
    id: 4,
    userImage: null,
    userImageCordinates: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
};
