import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Background from "../components/Background";
import List from "../components/List";
import data from "../../assets/data.json";
import { API_ROUTES } from "../../apiConfig";
import { useAuth } from "../context/AuthContext";

export default function Groups() {
  const [groups, setGroups] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAuth();

  const fetchGroups = async () => {
    try {
      const response = await fetch(API_ROUTES.GROUPS, {
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

  const options = data.groups.map((group) => ({ text: group.name }));
  useEffect(() => {
    fetchGroups();
  }, []);

  console.log(groups);
  const groupNames = groups.map((group) => group.name);
  console.log(groupNames);
  return (
    <Background>
      <Header title="COOKED" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <List items={options} type="option" />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    padding: 20,
  },
});
