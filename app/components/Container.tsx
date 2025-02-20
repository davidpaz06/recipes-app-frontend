import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";

interface ContainerProps {
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  color = "#353535",
  onPress,
  style,
  children,
}) => {
  const containerStyle = [styles.container, { backgroundColor: color }, style];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default Container;
