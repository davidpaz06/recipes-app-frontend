import React, { useState } from "react";
import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface CustomIconProps {
  name: string;
  size?: number;
  color?: string;
  activeColor?: string;
  style?: TextStyle;
  onPress?: () => void;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  size = 35,
  color = "#F1F1F1",
  activeColor,
  style,
  onPress,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    if (onPress) {
      onPress();
    }
  };

  return onPress ? (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={name}
        size={size}
        color={isActive && activeColor ? activeColor : color}
        style={[styles.icon, style]}
      />
    </TouchableOpacity>
  ) : (
    <Icon name={name} size={size} color={color} style={[styles.icon, style]} />
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    textAlign: "center",
  },
});

export default CustomIcon;
