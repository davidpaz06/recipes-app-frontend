import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import ScrollUpdate from "../components/ScrollUpdate";
import { API_ROUTES } from "../apiConfig";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  prepTime: number;
  createdBy: number;
  imageUrl: string;
}

export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(API_ROUTES.RECIPES);
      const data = await response.json();

      if (response.ok) {
        setRecipes(data);
      } else {
        Alert.alert("Error", data.message || "Failed to fetch recipes");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Background>
      <Header title="Cooked" />
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#353535" />
        </View>
      ) : (
        <ScrollUpdate
          contentContainerStyle={styles.scrollViewContent}
          onUpdate={fetchRecipes}
        >
          <List items={recipes} type="recipe" listTitle="Recipes" />
        </ScrollUpdate>
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
