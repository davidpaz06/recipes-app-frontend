import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import { useFonts } from "expo-font";

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  fontFamily?: "Bebas" | "Questrial";
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontFamily = "Bebas",
  ...props
}) => {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Questrial: require("../../assets/fonts/Questrial-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text style={[styles.text, { fontFamily }, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default CustomText;
