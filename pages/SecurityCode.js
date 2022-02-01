import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  Keyboard,
} from "react-native";

export default function SecurityCode() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Gui, digite novamente o código por favor.
        </Text>
        <Text style={styles.headerSubtitle}>É uma questão de segurança :)</Text>
      </View>

      <View style={styles.input}>
        <View style={styles.value1} />
        <View style={styles.value2} />
        <View style={styles.value3} />
        <View style={styles.value4} />
      </View>
      <View style={styles.keyboard}>
        <Pressable>
          <Text style={styles.button}> 1</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 2</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 3</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 4</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 5</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 6</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 7</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 8</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 9</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.button}> 0</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonTitle}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232323",
    marginTop: 80,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    alignSelf: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 27,
    width: 350,
    fontFamily: "WorkSans",
  },
  headerSubtitle: {
    marginTop: 10,
    color: "white",
    opacity: 0.3,
    fontSize: 16,
    fontFamily: "WorkSans",
  },

  input: {
    flexDirection: "row",
    justifyContent: "center",
  },
  value1: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#ADFF00",
    marginRight: 40,
  },
  value2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#ADFF00",
    marginRight: 40,
  },
  value3: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#353535",
    marginRight: 40,
  },
  value4: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#353535",
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
 
  },
  button: {
    textAlign:'center',
    width: 100,
    height: 100,
    fontSize: 45,
    color: "white",
    fontFamily: "WorkSans",
  },

  footer: {
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: "#232323",
    width: 150,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonTitle: {
    color: "white",
    fontFamily: "WorkSans",
  },
});
