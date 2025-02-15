import { Tabs } from "expo-router";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD33D",
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: "#353535",
          height: Platform.select({
            ios: 75,
            android: 60,
          }),
          paddingHorizontal: 50,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="user"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
