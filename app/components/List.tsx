import React from "react";
import { View, StyleSheet } from "react-native";

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <View style={styles.listContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
});

export default List;
