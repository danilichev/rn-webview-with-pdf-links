import React from "react";
import {
  Platform,
  StyleProp,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from "react-native";

const TOUCHABLE_ACTIVE_OPACITY = 0.8;

export interface Props extends TouchableWithoutFeedbackProps {
  activeOpacity?: number;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const Touchable: React.FC<Props> = React.memo((props) => {
  const { children, contentStyle, ...rest } = props;

  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVE_OPACITY} {...rest}>
        <View style={contentStyle}>{children}</View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback {...rest}>
      <View style={contentStyle}>{children}</View>
    </TouchableNativeFeedback>
  );
});
