import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import Background from "./components/Background";
import Header from "./components/Header";
import { useRecipe } from "./context/RecipeContext";

const { height } = Dimensions.get("window");

const RecipeView: React.FC = () => {
  const router = useRouter();
  const { activeRecipe } = useRecipe();
  const [imageLoading, setImageLoading] = useState(true);

  if (!activeRecipe) {
    return (
      <Background>
        <Header title="Recipe" onPress={() => router.back()} />
        <View style={styles.container}>
          <Text style={styles.error}>Recipe not found</Text>
        </View>
      </Background>
    );
  }

  return (
    <Background>
      <Header title="Recipe" onPress={() => router.back()} />
      <View style={styles.imageContainer}>
        {imageLoading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#353535"
          />
        )}
        <Image
          source={{ uri: activeRecipe.imageUrl }}
          style={styles.image}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{activeRecipe.title}</Text>
        <Text style={styles.description}>{activeRecipe.description}</Text>
        <Text style={styles.prepTime}>
          Prep Time: {activeRecipe.prepTime} mins
        </Text>
        <Text style={styles.ingredients}>{activeRecipe.ingredients}</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: height * 0.35,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
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
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default RecipeView;
