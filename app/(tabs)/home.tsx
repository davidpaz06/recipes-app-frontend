import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Background from "../components/Background";
import Header from "../components/Header";
import CustomScroll from "../components/CustomScroll";
import List from "../components/List";
import { API_ROUTES } from "../../apiConfig";
import useAPI from "../hooks/useAPI";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  prepTime: number;
  createdBy: number;
  imageUrl: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { apiRequest, loading } = useAPI();

  const fetchRecipes = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.RECIPES,
      headers: true,
    });

    setRecipes(data);
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
        <CustomScroll contentContainerStyle={styles.scrollViewContent}>
          <List items={recipes} type="recipe" listTitle="Recipes" />
        </CustomScroll>
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
