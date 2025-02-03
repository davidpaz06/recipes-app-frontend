import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

interface Recipe {
  image: string;
  title: string;
  preparationTime: string;
}

interface RecipeCardProps {
  recipes: Recipe[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipes }) => {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Questrial: require("../../assets/fonts/Questrial-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {recipes.map((recipe, index) => (
        <View
          key={index}
          style={{ width: "100%", paddingHorizontal: 20, marginBottom: 20 }}
        >
          <View style={styles.cardContainer}>
            <Image source={{ uri: recipe.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{recipe.title}</Text>
              <Text style={styles.cardTime}>{recipe.preparationTime}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 170,
  },
  cardContent: {
    backgroundColor: "#353535",
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontFamily: "Questrial",
    fontSize: 18,
    maxWidth: "80%",
    color: "#FFF",
  },
  cardTime: {
    fontFamily: "Bebas",
    fontSize: 20,
    color: "#b1b1b1",
  },
});

export default RecipeCard;
