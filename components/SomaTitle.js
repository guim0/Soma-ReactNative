import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function SomaTitle() {

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Olá, nós somos a</Text>
      <Image  
      style={styles.logo}
      source={require('../assets/img/SOMA.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 70,
    
  },
  subtitle: {
    fontSize: 26,
    color: "#656565",
    marginBottom: 20,
    fontFamily: 'WorkSans',
  },
});
