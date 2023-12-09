import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { MainStackNavigator } from "./MainStack";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
