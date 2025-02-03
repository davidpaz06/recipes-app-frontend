import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import RecipeCard from "../components/RecipeCard";
import data from "../../assets/data.json";

export default function Index() {
  return (
    <Background>
      <Header title="Cooked" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RecipeCard recipes={data.recipes} />
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
