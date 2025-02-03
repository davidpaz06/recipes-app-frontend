import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import Option from "../components/Option";
import data from "../../assets/data.json";

export default function Groups() {
  const options = data.groups.map((group) => ({ text: group.name }));

  return (
    <Background>
      <Header title="Groups" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Option options={options} />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    padding: 20,
  },
});
