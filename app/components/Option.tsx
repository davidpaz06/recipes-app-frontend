import React from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import Icon from "react-native-vector-icons/FontAwesome";

interface OptionProps {
  text: string;
  onPress?: () => void; // Propiedad opcional para la función de manejo de eventos
}

const Option: React.FC<OptionProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CustomText style={styles.text}>{text}</CustomText>
      <Icon name="chevron-right" style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Platform.OS === "ios" ? 15 : 10,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: Platform.OS === "ios" ? 22 : 18,
    fontFamily: "Questrial",
    maxWidth: "90%",
  },
  arrow: {
    fontSize: 15,
    color: "#888888",
    maxWidth: "5%",
    marginVertical: "auto",
  },
});

export default Option;
