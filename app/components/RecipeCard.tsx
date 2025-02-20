import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

interface Recipe {
  imageUrl: string | null;
  title: string;
  prepTime: number;
}

interface RecipeCardProps {
  recipe: Recipe;
  onLongPress?: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onLongPress }) => {
  const [loaded] = useFonts({
    Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    Questrial: require("../../assets/fonts/Questrial-Regular.ttf"),
  });

  const [imageLoading, setImageLoading] = useState(true);
  const router = useRouter();

  if (!loaded) {
    return null;
  }

  const imageUrl =
    recipe.imageUrl && recipe.imageUrl.trim() !== ""
      ? recipe.imageUrl
      : "https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg"; // URL de imagen predeterminada

  const handlePress = () => {
    router.push("/recipeView");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={onLongPress}
      activeOpacity={0.85}
      delayPressIn={20}
      style={{ width: "100%", paddingHorizontal: 20, marginBottom: 20 }}
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          {imageLoading && (
            <ActivityIndicator
              style={styles.loader}
              size="large"
              color="#353535"
            />
          )}
          <Image
            source={{ uri: imageUrl }}
            style={styles.cardImage}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardName}>{recipe.title}</Text>
          <Text style={styles.cardTime}>{recipe.prepTime} mins</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 170,
  },
  cardImage: {
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
  cardContent: {
    backgroundColor: "#353535",
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardName: {
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
