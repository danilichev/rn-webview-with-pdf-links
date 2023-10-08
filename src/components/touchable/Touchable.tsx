import React from "react";
import {
  Platform,
  StyleProp,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from "react-native";

const TOUCHABLE_ACTIVE_OPACITY = 0.8;

export interface Props extends TouchableWithoutFeedbackProps {
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
}

export const Touchable: React.FC<Props> = React.memo((props) => {
  const { children, ...rest } = props;

  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity activeOpacity={TOUCHABLE_ACTIVE_OPACITY} {...rest}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback {...props}>
      <>{children}</>
    </TouchableNativeFeedback>
  );
});
