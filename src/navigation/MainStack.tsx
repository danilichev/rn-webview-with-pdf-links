import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { HomeScreen } from "src/screens";

import { screenNames } from "./constants";

const MainStack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={screenNames.HomeScreen} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
