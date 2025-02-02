import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: "#353535",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#D1D1D1",
    textAlign: "left",
    fontFamily: "Bebas",
  },
});

export default Header;
