import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, View } from "react-native";

import { Touchable } from "src/components";
import { MainStackParamList, screenNames } from "src/navigation";

import { styles } from "./styles";

type Props = NativeStackScreenProps<
  MainStackParamList,
  typeof screenNames.HomeScreen
>;

export const HomeScreen = ({ navigation }: Props) => {
  const onPdfLinkPress = useCallback(() => {
    navigation.navigate(screenNames.PdfScreen, {
      title: "dummy.pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    });
  }, [navigation]);

  const onWebLinkPress = useCallback(() => {
    navigation.navigate(screenNames.WebScreen, {
      title: "GitHub",
      url: "https://github.com",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Touchable onPress={onWebLinkPress}>
        <Text style={styles.link}>Open Web Link</Text>
      </Touchable>
      <Touchable onPress={onPdfLinkPress}>
        <Text style={styles.link}>Open Pdf</Text>
      </Touchable>
    </View>
  );
};
