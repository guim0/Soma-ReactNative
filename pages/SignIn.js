import React from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";

let schema = yup.object().shape({
  username: yup.string().required("Campo Obrigatório"),
  email: yup.string().required("Campo Obrigatório"),
  birthDate: yup.string().required("Campo Obrigatório"),
  cpf: yup.string().required("Campo Obrigatório"),
  //   terms: yup.boolean().required("Campo Obrigatório"),
});
export default function SignIn({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [cpf, setCPF] = React.useState("");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.Overflow} >
        <Formik
          initialValues={{
            username: "",
            email: "",
            birthDate: "",
            cpf: "",
            terms: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={schema}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <View style={styles.form}>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.HeaderTitle}>
                  Bem vind
                  <Text
                    style={{ textTransform: "lowercase", color: "#ADFF00" }}
                  >
                    x
                  </Text>
                  !
                </Text>
                <Text style={styles.HeaderSubtitle}>
                  Preenche os dados por favor? :)
                </Text>
              </Pressable>
              <Text style={styles.title}>Nome</Text>
              <TextInput
                style={styles.input}
                value={name}
                placeholder="Guilherme Auriz de Moraes"
                placeholderTextColor={"#414141"}
                onChangeText={(name) => setName(name)}
              />
              {errors.username && (
                <Text style={styles.errorMessage}>{errors.username}</Text>
              )}
              <Text style={styles.title}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                placeholder="guimodev@gmail.com"
                placeholderTextColor={"#414141"}
                onChangeText={(email) => setEmail(email)}
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              <Text style={styles.title}>Data de Nascimento</Text>
              <TextInput
                style={styles.input}
                value={birthDate}
                placeholder="24/07/1999"
                placeholderTextColor={"#414141"}
                onChangeText={(birthDate) => setBirthDate(birthDate)}
              />
              {errors.birthDate && (
                <Text style={styles.errorMessage}>{errors.birthDate}</Text>
              )}
              <Text style={styles.title}>CPF</Text>
              <TextInput
                style={styles.input}
                value={cpf}
                placeholder="000.000.000-00"
                placeholderTextColor={"#414141"}
                onChangeText={(cpf) => setCPF(cpf)}
              />
              {errors.document && (
                <Text style={styles.errorMessage}>{errors.document}</Text>
              )}
              <View>
                <Text style={styles.HeaderSubtitle}>
                  Li e concordo com os Termos de Uso.
                </Text>
              </View>
              <View style={styles.footer}>
              <Pressable style={styles.buttonSubmit} onPress={handleSubmit}>
                <Text>é isso!</Text>
              </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#232323",
    paddingLeft: 20,
    paddingTop: 10,
  },

  Overflow:{
width: 400,
  },
  HeaderTitle: {
    color: "white",
    fontSize: 30,
    textTransform: "capitalize",
  },
  HeaderSubtitle: {
    color: "white",
    opacity: 0.3,
    fontSize: 14,
    marginTop: 5,
  },
  form: {
    borderColor: "white",

    justifyContent: "space-between",
  },

  errorMessage: {
    color: "#FF0000",
    fontSize: 14,
    marginTop: 5,
  },
  title: {
    fontFamily: "WorkSans",
    color: "#ADFF00",
    fontSize: 25,
    paddingTop: 20,
  },
  input: {
    color: "white",
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#414141",
    padding: 12,
    borderRadius: 15,
    minWidth: 300,
    maxWidth: 350,
    marginTop: 5,
    marginBottom: 5,
  },
  footer:{
    alignItems: 'flex-start',
    marginLeft: 30,
    marginTop: 20
  },
  buttonSubmit: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ADFF00",
    borderRadius: 10,
    
  },
  buttonText:{
    fontSize: 12,
    fontFamily: 'WorkSans'
  }
});
