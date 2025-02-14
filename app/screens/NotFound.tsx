import { View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.button}>
        Go back to Home screen!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
