import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import CustomScroll from "../components/CustomScroll";
import CustomText from "../components/CustomText";
import Header from "../components/Header";
import Container from "../components/Container";
import Background from "../components/Background";
import List from "../components/List";
import CustomIcon from "../components/CustomIcon";
import { API_ROUTES } from "../../apiConfig";
import useAPI from "../hooks/useAPI";
import UsernameBar from "../components/UsernameBar";

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
