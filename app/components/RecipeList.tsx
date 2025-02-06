import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";

interface Recipe {
  image: string;
  name: string;
  preparationTime: string;
}

interface RecipeListProps {
  listTitle?: string;
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ listTitle, recipes }) => {
  return (
    <View style={styles.listContainer}>
      {listTitle && <Text style={styles.listTitle}>{listTitle}</Text>}
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  listTitle: {
    fontSize: 45,
    lineHeight: 45,
    fontFamily: "Bebas",
    color: "#353535",
    paddingLeft: 20,
    paddingRight: 70,
  },
});

export default RecipeList;
