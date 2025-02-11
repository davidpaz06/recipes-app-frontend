import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    paddingHorizontal: 20,
    fontFamily: "Bebas",
    color: "#353535",
  },
});

export default Title;
