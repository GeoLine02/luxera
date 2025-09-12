export interface EditorCardType {
  firstPage: {
    id: 1;
    coverImage: string;
    userImage: string | null;
    userImageCordinates: {
      top?: number;
      left?: number;
      bottom?: number;
      right?: number;
    };
    imagePlaceholderAngle: number;
    userImageAngle: number;
    userImageZoom: number;
    userText: string;
    userTextCordinates: {
      top?: number;
      left?: number;
      bottom?: number;
      right?: number;
    };
    textAngle: number;
    pagePreview: string;
  };
  secondPage: {
    id: 2;
    userText: string;
    userTextCordinates: {
      top: number;
      left: number;
      bottom: number;
      right: number;
    };
  };
  thirdPage: {
    id: 3;
    userImage: string | null;
    userImageCordinates: {
      top: number;
      left: number;
      bottom: number;
      right: number;
    };
  };
  fourthPage: {
    id: 4;
    userImage: string | null;
    userImageCordinates: {
      top: number;
      left: number;
      bottom: number;
      right: number;
    };
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
