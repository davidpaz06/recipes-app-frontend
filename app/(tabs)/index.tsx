import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#D1D1D1",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Header title="Cooked" />
    </View>
  );
}

const styles = StyleSheet.create({});
