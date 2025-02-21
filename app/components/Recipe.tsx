import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Background from "./Background";
import Header from "./Header";

const { height } = Dimensions.get("window");

interface RecipeViewProps {
  imageUrl: string;
  title: string;
  description: string;
  prepTime: number;
  ingredients: string;
}

const RecipeView: React.FC<RecipeViewProps> = ({
  imageUrl,
  title,
  description,
  prepTime,
  ingredients,
}) => {
  return (
    <Background>
      <Header title="Recipe" onPress={() => navigation.goBack()} />
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.prepTime}>Prep Time: {prepTime} mins</Text>
        <Text style={styles.ingredients}>{ingredients}</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height * 0.35,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  prepTime: {
    fontSize: 16,
    marginBottom: 10,
  },
  ingredients: {
    fontSize: 16,
  },
});

export default RecipeView;
