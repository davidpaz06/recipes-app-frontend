import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

interface HeaderProps {
  title: string;
  onPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingTop: Platform.select({
      ios: 40,
      android: 10,
    }),
    paddingLeft: 20,
    backgroundColor: "#353535",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 50,
    color: "#D1D1D1",
    textAlign: "left",
    fontFamily: "Bebas",
  },
});

export default Header;
