import React from "react";
import { View, StyleSheet } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <View style={styles.background}>{children}</View>;
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#D1D1D1",
    height: "100%",
  },
});

export default Background;
