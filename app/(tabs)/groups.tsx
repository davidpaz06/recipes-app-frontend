import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
  Text,
} from "react-native";
import { API_ROUTES } from "../../apiConfig";
import useAPI from "../hooks/useAPI";
import Background from "../components/Background";
import Header from "../components/Header";
import CustomScroll from "../components/CustomScroll";
import List from "../components/List";
import New from "../components/New";
import { useRecipe } from "../context/RecipeContext";

export default function Groups() {
  const [groups, setGroups] = useState<{ id: number; name: string }[]>([]);
  const { activeGroupId, setActiveGroupId } = useRecipe();
  const { apiRequest, loading } = useAPI();

  const fetchGroups = async () => {
    const data = await apiRequest({
      method: "GET",
      url: API_ROUTES.GROUPS,
      headers: true,
    });
    setGroups(data);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const options = groups.map((group) => ({
    text: group.name,
    onPress: () => {
      setActiveGroupId(group.id);
      Alert.alert("Group Selected", `You selected ${group.name}`);
    },
  }));

  const fetchGroupRecipes = async () => {
    if (!activeGroupId) return;
    const data = await apiRequest({
      method: "GET",
      url: `${API_ROUTES.GROUPS}/${activeGroupId}/recipes`,
      headers: true,
    });
    console.log(data);
  };

  useEffect(() => {
    if (activeGroupId) {
      fetchGroupRecipes();
    }
  }, [activeGroupId]);

  return (
    <Background>
      <View style={styles.container}>
        <Header title="COOKED" onPress={fetchGroups} />
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#353535" />
          </View>
        ) : activeGroupId ? (
          <View style={styles.activeGroupContainer}>
            <Text style={styles.activeGroupText}>
              Mostrando recetas del grupo {activeGroupId}
            </Text>
            {/* Aquí puedes renderizar las recetas del grupo activo */}
          </View>
        ) : (
          <CustomScroll contentContainerStyle={styles.scrollViewContent}>
            <List items={options} type="option" />
            <New style={styles.add} onPress={() => Alert.alert("Add Group")} />
          </CustomScroll>
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
  add: {
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  activeGroupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeGroupText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
