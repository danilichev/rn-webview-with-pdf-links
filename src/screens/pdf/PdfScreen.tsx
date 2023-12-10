import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import Pdf from "react-native-pdf";

import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

type Props = NativeStackScreenProps<
  MainStackParamList,
  typeof screenNames.PdfScreen
>;

export const PdfScreen = ({ route }: Props) => {
  useEffect(() => {
    console.log("PdfScreen", route.params.url);
  }, [route.params.url]);

  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri: route.params.url }}
        style={styles.pdf}
        trustAllCerts={Platform.OS === "ios"}
      />
    </View>
  );
};
