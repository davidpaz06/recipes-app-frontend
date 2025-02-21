import { Stack } from "expo-router";
import { AuthProvider } from "./context/AuthContext";
import RecipeProvider from "./context/RecipeContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="recipeView" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </RecipeProvider>
    </AuthProvider>
  );
}
