import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SomaTitle from "./components/SomaTitle";
import LoginPage from "./pages/LoginPage";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <SomaTitle/> */}
      <LoginPage/>
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
