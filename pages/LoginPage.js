import React from "react";
import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";

export default function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/img/SOMA.png")} />
        <Pressable onPress={() => navigation.goBack('Welcome')}></Pressable>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>Investir nunca foi tão simples.</Text>
        <Text style={styles.subtitle}>Venha somar com a gente.</Text>
        <View style={styles.buttons}>
          <Pressable onPress={()=> navigation.navigate('SignIn')} style={styles.createAccount}>
            <Text style={styles.createAccountText}>Crie sua Conta</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate('Code')} style={styles.signIn}>
            <Text style={styles.signInText}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
 
    flexDirection: "column",
  },

  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    width: 90,
    height: 23,
  },

  bottom: {
    flex: 2,
    justifyContent: "flex-end",
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },

  title: {
    color: "white",
    fontSize: 40,
    fontFamily: "WorkSans",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "WorkSans",
    color: "white",
    fontSize: 15,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 2,
    marginRight: 2,
    marginTop: 30,
    marginBottom: 20,
  },

  createAccount: {
    backgroundColor: "#232323",
    width: 150,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },
  createAccountText: {
    color: "white",
    fontFamily: "WorkSans",
  },

  signIn: {
    backgroundColor: "#ADFF00",
    width: 150,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    color: "#232323",
    fontFamily: "WorkSans",
  },
});
