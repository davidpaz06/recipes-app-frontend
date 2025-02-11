import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import data from "../../assets/data.json";

export default function Recipes() {
  return (
    <Background>
      <Header title="Cooked" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List items={data.recipes} type="recipe" listTitle="My recipes" />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
