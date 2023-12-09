import { screenNames } from "./constants";

export type MainStackParamList = {
  [screenNames.HomeScreen]: undefined;
  [screenNames.WebScreen]: { title?: string; url: string };
};
