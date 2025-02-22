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
import { API_ROUTES } from "../apiConfig";
import useAPI from "./hooks/useAPI";
import Background from "./components/Background";
import Header from "./components/Header";
import { useRecipe } from "./context/RecipeContext";
import CustomText from "./components/CustomText";
import Icon from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("window");

const RecipeView: React.FC = () => {
  const router = useRouter();
  const { activeRecipe } = useRecipe();
  const [imageLoading, setImageLoading] = useState(true);
  const [steps, setSteps] = useState([]);
  const { apiRequest } = useAPI();

  const fetchSteps = async () => {
    if (!activeRecipe) return;
    const data = await apiRequest({
      method: "GET",
      url: `${API_ROUTES.RECIPES}/${activeRecipe.id}/steps`,
      headers: true,
    });
    setSteps(data);
  };

  const goBack = () => {
    router.back();
  };

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
      <View style={styles.imageContainer}>
        {imageLoading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#353535"
          />
        )}
        <Icon
          name="arrow-left"
          style={styles.goBack}
          onPress={() => router.back()}
        />
        <Image
          source={
            activeRecipe.imageUrl ? { uri: activeRecipe.imageUrl } : undefined
          }
          style={styles.image}
          onLoad={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
        <CustomText style={styles.watermark}>Cooked</CustomText>
      </View>
      <View style={styles.container}>
        <CustomText fontFamily="Bebas" style={styles.title}>
          {activeRecipe.title}
        </CustomText>
        <CustomText style={styles.prepTime}>
          {activeRecipe.prepTime} mins
        </CustomText>
        <CustomText style={{ paddingLeft: 10, fontSize: 25 }}>
          Ingredients
        </CustomText>
        <CustomText fontFamily="Questrial" style={styles.ingredients}>
          {activeRecipe.ingredients}
        </CustomText>
        <CustomText style={{ paddingLeft: 10, fontSize: 25 }}>Steps</CustomText>
        <Text style={styles.description}>{activeRecipe.description}</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: height * 0.45,
  },
  goBack: {
    position: "absolute",
    top: 60,
    left: 25,
    fontSize: 30,
    color: "#D1D1D1",
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  watermark: {
    position: "absolute",
    bottom: 30,
    left: 20,
    fontSize: 50,
    color: "#ffffff",
    opacity: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  container: {
    flex: 1,
    backgroundColor: "#D1D1D1",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  title: {
    backgroundColor: "#353535",
    color: "#ffffff",
    padding: 5,
    fontSize: 35,
    marginBottom: 10,
  },
  prepTime: {
    color: "#353535",
    borderColor: "#353535",
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 5,
    position: "absolute",
    top: 60,
    right: 0,
    padding: 5,
    fontSize: 20,
  },
  ingredients: {
    paddingLeft: 20,
    fontSize: 16,
  },
  description: {
    color: "#353535",
    paddingLeft: 20,
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default RecipeView;
