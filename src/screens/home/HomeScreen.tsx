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
  const onWebLinkPress = useCallback(() => {
    navigation.navigate(screenNames.WebScreen, {
      title: "GitHub",
      url: "https://github.com",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Touchable onPress={onWebLinkPress}>
        <Text style={styles.webLink}>Open Web Link</Text>
      </Touchable>
    </View>
  );
};
