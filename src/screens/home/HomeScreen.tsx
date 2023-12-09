import React from "react";
import { Alert, Text, View } from "react-native";

import { Touchable } from "src/components";

import { styles } from "./styles";

export const HomeScreen = () => (
  <View style={styles.container}>
    <Touchable
      onPress={() => {
        Alert.alert("boo!");
      }}
    >
      <Text>Boo!</Text>
    </Touchable>
  </View>
);
