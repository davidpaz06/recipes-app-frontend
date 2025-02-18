import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import CustomIcon from "./CustomIcon";
import Container from "./Container";

export default function UsernameBar() {
  return (
    <Container style={styles.container}>
      <CustomText
        style={styles.username}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        USERNAME
      </CustomText>
      <View style={styles.icons}>
        <CustomIcon name="user" />
        <CustomIcon name="cog" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  username: {
    fontSize: 35,
    color: "#F1F1F1",
    width: "70%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
});
