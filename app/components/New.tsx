import React from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import CustomIcon from "./CustomIcon";

interface NewProps {
  onPress?: () => void;
  style?: object;
}

const New: React.FC<NewProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.addObj, style]} onPress={onPress}>
      <CustomIcon name="plus" size={30} color="#888888" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addObj: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
    marginHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#D1D1D1",
    boxShadow: "inset 0 0 5 #B0B0B0",
  },
});

export default New;
