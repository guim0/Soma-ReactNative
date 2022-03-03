import react from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function SomaTitle({ navigation }) {
  return (
    <Pressable style={styles.container} onPress={() => navigation.push("Login")}>
      <View style={styles.container} >
        <Text style={styles.subtitle}>Olá, nós somos a</Text>

        <Image style={styles.logo} source={require("../assets/img/SOMA.png")} />
      </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232323",
  },
  logo: {
    width: 270,
    height: 70,
  },
  subtitle: {
    fontSize: 26,
    color: "#656565",
    marginBottom: 20,
    fontFamily: "WorkSans",
  },
});
