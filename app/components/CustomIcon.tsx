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
  activeColor = "#FFD33D",
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

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        name={name}
        size={size}
        color={isActive ? activeColor : color}
        style={[styles.icon, style]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    paddingBottom: 5,
  },
});

export default CustomIcon;
