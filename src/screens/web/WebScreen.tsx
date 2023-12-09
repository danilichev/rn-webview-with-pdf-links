import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { WebView } from "react-native-webview";

import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

type Props = NativeStackScreenProps<
  MainStackParamList,
  typeof screenNames.WebScreen
>;

export const WebScreen = ({ route }: Props) => {
  return (
    <WebView source={{ uri: route.params.url }} style={styles.container} />
  );
};
