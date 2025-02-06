import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface OptionProps {
  text: string;
}

const Option: React.FC<OptionProps> = ({ text }) => {
  const [loaded] = useFonts({
    Questrial: require("../../assets/fonts/Questrial-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.arrow}>{">"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 22,
    fontFamily: "Questrial",
    maxWidth: "90%",
  },
  arrow: {
    fontSize: 20,
    fontFamily: "Questrial",
    maxWidth: "5%",
  },
});

export default Option;
