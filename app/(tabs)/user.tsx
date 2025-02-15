import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import ScrollUpdate from "../components/ScrollUpdate";
import { API_ROUTES } from "../../apiConfig";
import { useAuth } from "../context/AuthContext";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  prepTime: number;
  createdBy: number;
  imageUrl: string;
}

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAuth();

  const fetchRecipes = async () => {
    try {
      const response = await fetch(API_ROUTES.RECIPES_BY_USER, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      });
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
      <Header title="Cooked" onPress={fetchRecipes} />
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#353535" />
        </View>
      ) : (
        <ScrollUpdate
          contentContainerStyle={styles.scrollViewContent}
          onUpdate={fetchRecipes}
        >
          <List items={recipes} type="recipe" listTitle="My Recipes" />
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
