import React from "react";
import { ScrollView, StyleSheet, ScrollViewProps } from "react-native";

interface CustomScrollProps extends ScrollViewProps {
  children: React.ReactNode;
}

const CustomScroll: React.FC<CustomScrollProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.scrollViewContent, style]}
      bounces={false} // Para iOS
      overScrollMode="never" // Para Android
      {...props}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default CustomScroll;
