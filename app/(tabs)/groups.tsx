import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import { API_ROUTES } from "../../apiConfig";
import useAPI from "../hooks/useAPI";

export default function Groups() {
  const [groups, setGroups] = useState<{ name: string }[]>([]);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const { apiRequest, loading } = useAPI();

  const fetchGroups = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.GROUPS_BY_USER,
      headers: true,
    });
    setGroups(data);
  };

  const fetchGroupRecipes = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.GROUP_BY_ID,
      headers: true,
    });
    setActiveGroup(data);
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
