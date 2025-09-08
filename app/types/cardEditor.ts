export interface EditorCardType {
  firstPage: {
    id: 1;
    coverImage: string;
    userImage: string | null;
    userImageCordinates: string;
    userImageAngle: number;
    userImageZoom: number;
    userText: string;
    userTextCordinates: string;
    pagePreview: string;
  };
  secondPage: {
    id: 2;
    userText: string;
    userTextCordinates: string;
  };
  thirdPage: {
    id: 3;
    userImage: string | null;
    userImageCordinates: string;
  };
  fourthPage: {
    id: 4;
    userImage: string | null;
    userImageCordinates: string;
  };
}

export type EditorActiveSettingType = "layouts" | "stickers" | "images" | null;

export interface EditorPageSettingsType {
  ActiveSettingLabel: EditorActiveSettingType;
}

export type ActivePageType =
  | EditorCardType["firstPage"]
  | EditorCardType["secondPage"]
  | EditorCardType["thirdPage"]
  | EditorCardType["fourthPage"];
