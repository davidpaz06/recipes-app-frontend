import React, { useState, useEffect } from "react";
import {   ScrollView,   StyleSheet,   View,   ActivityIndicator,   Alert } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import { API_ROUTES } from "../../apiConfig";
import { useAuth } from "../context/AuthContext";

export default function Groups() {
  const [groups, setGroups] = useState<{ name: string }[]>([]);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAuth();

  const fetchGroups = async () => {
    try {
      const response = await fetch(API_ROUTES.USERGROUPS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}` || "",
        },
      });
      const data = await response.json();

      if (response.ok) {
        setGroups(data);
      } else {
        console.error("Error", data.message || "Failed to fetch groups");
      }
    } catch (error) {
      console.error("Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchGroupRecipes = async () => {
    try {
      const response = await fetch(
        `${API_ROUTES.USERGROUPS}/${activeGroupId}/recipes`
      );
      const data = await response.json();

      if (response.ok) {
        setActiveGroup(data);
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
    fetchGroups();
  }, []);

  const options = groups.map((group) => ({
text: group.name,
    onPress: () => Alert.alert("Option Pressed", `You pressed ${group.name}`),
}));

  return (
    <Background>
      <View style={styles.container}>
        <Header title="COOKED" onPress={fetchGroupRecipes} />
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#353535" />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <List items={options} type="option" />
          </ScrollView>
        )}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    padding: 20,
  },
});
