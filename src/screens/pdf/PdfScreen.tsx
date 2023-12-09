import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, View } from "react-native";
import Pdf from "react-native-pdf";

import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

type Props = NativeStackScreenProps<
  MainStackParamList,
  typeof screenNames.PdfScreen
>;

export const PdfScreen = ({ route }: Props) => {
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
