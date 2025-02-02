import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import RecipeCard from "../components/RecipeCard";
import data from "../../assets/data/data.json";

export default function Index() {
  return (
    <Background>
      <Header title="Cooked" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {data.data.map((item, index) => (
          <RecipeCard
            key={index}
            image={item.recipes.image}
            title={item.recipes.title}
            preparationTime={item.recipes.preparationTime}
          />
        ))}
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
