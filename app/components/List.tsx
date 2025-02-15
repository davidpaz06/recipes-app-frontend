import React from "react";
import { View, StyleSheet } from "react-native";
import RecipeCard from "./RecipeCard";
import Option from "./Option";
import Title from "./Title";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  prepTime: number;
  createdBy: number;
  imageUrl: string;
}

interface OptionItem {
  text: string;
  onPress?: () => void;
}

interface ListProps {
  items: Recipe[] | OptionItem[];
  type: "recipe" | "option";
  listTitle?: string;
}

const List: React.FC<ListProps> = ({ items, type, listTitle }) => {
  if (!Array.isArray(items) || items.length === 0) {
    console.error(
      "Se esperaba que items fuera un array, pero se obtuvo",
      items
    );
    return null;
  }

  return (
    <View style={styles.listContainer}>
      {listTitle && <Title>{listTitle}</Title>}
      {type === "recipe" &&
        (items as Recipe[]).map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      {type === "option" &&
        (items as OptionItem[]).map((item, index) => (
          <Option key={index} text={item.text} onPress={item.onPress} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});

export default List;
