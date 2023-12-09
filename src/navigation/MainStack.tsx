import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { HomeScreen, WebScreen } from "src/screens";

import { screenNames } from "./constants";
import { MainStackParamList } from "./types";

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName={screenNames.HomeScreen}>
      <MainStack.Screen
        component={HomeScreen}
        name={screenNames.HomeScreen}
        options={{ title: "Home" }}
      />
      <MainStack.Group screenOptions={{ presentation: "modal" }}>
        <MainStack.Screen
          component={WebScreen}
          name={screenNames.WebScreen}
          options={({ route }) => ({ title: route.params?.title })}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
