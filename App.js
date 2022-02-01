import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import SomaTitle from "./components/SomaTitle";
import LoginPage from "./pages/LoginPage";
import SecurityCode from "./pages/SecurityCode";

export default function App() {
  const [loaded] = useFonts({
    WorkSans: require("./assets/fonts/WorkSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <SomaTitle/> */}
      {/* <LoginPage/> */}
      <SecurityCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    alignItems: "center",
    justifyContent: "center",
  },
});
