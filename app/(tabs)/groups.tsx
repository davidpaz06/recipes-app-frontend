import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import data from "../../assets/data.json";

export default function Groups() {
  const options = data.groups.map((group) => ({ text: group.name }));

  return (
    <Background>
      <Header title="COOKED" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List items={options} type="option" />
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
