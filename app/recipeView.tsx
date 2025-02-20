import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API_ROUTES } from "../apiConfig";
import useAPI from "./hooks/useAPI";
import Background from "./components/Background";
import Header from "./components/Header";
import CustomScroll from "./components/CustomScroll";
import List from "./components/List";
import New from "./components/New";

interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  prepTime: number;
  createdBy: number;
  imageUrl: string;
}

export default function recipeView() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { apiRequest, loading } = useAPI();
  const navigation = useNavigation();

  const fetchRecipes = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.RECIPE_BY_ID,
      headers: true,
    });

    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Background>
      <Header title="Cooked" onPress={() => navigation.goBack()} />
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#353535" />
        </View>
      ) : (
        <CustomScroll contentContainerStyle={styles.scrollViewContent}>
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
