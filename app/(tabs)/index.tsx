import React from "react";
import { View, FlatList, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import RecipeCard from "../components/RecipeCard";
import data from "../../assets/data/data.json";

export default function Index() {
  const renderList = ({
    item,
  }: {
    item: {
      recipes: { image: string; title: string; preparationTime: string };
    };
  }) => (
    <RecipeCard
      image={item.recipes.image}
      title={item.recipes.title}
      preparationTime={item.recipes.preparationTime}
    />
  );

  return (
    <Background>
      <Header title="Cooked" />
      <FlatList
        data={data.data}
        renderItem={renderList}
        style={styles.flatlist}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    paddingVertical: 20,

    borderColor: "red",
  },
});
