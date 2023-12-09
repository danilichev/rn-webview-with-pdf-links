import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { WebView } from "react-native-webview";

import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

export const WebScreen = () => {
  const route =
    useRoute<RouteProp<MainStackParamList, typeof screenNames.WebScreen>>();

  // useEffect

  return (
    <WebView source={{ uri: route.params.url }} style={styles.container} />
  );
};
