import { screenNames } from "./constants";

export type MainStackParamList = {
  [screenNames.HomeScreen]: undefined;
  [screenNames.PdfScreen]: { title?: string; url: string };
  [screenNames.WebScreen]: { title?: string; url: string };
};
