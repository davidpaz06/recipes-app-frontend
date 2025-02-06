import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, ActivityIndicator, Alert } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import RecipeCard from "../components/RecipeCard";

interface Recipe {
  image: string;
  name: string;
  preparationTime: string;
}

export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://192.168.1.170:3000/recipes");
        const data = await response.json();

        if (response.ok) {
          setRecipes(data.recipes);
        } else {
          Alert.alert("Error", data.message || "Failed to fetch recipes");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <Background>
        <Header title="Cooked" />
        <ActivityIndicator size="large" color="#353535" />
      </Background>
    );
  }

  return (
    <Background>
      <Header title="Cooked" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </List>
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
