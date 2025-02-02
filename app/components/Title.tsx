import React from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";

interface TitleProps {
  text: string;
  backgroundImage: any;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    fontFamily: "Bebas",
    textAlign: "center",
    color: "#353535",
  },
});

export default Title;
