import React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";

interface ScrollProps {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

const Scroll: React.FC<ScrollProps> = ({ children, contentContainerStyle }) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.scrollViewContent, contentContainerStyle]}
      horizontal={false}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {},
});

export default Scroll;
