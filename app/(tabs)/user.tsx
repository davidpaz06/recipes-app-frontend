import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import CustomScroll from "../components/CustomScroll";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import { API_ROUTES } from "../../apiConfig";
import useAPI from "../hooks/useAPI";
import UsernameBar from "../components/UsernameBar";
import New from "app/components/New";

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
  const { apiRequest, loading } = useAPI();

  const fetchRecipes = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.RECIPES_BY_USER,
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
          <UsernameBar />
          <List items={recipes} type="recipe" listTitle="My Recipes" />
          <New onPress={() => Alert.alert("Add Recipe")} />
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
