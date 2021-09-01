import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import FirebaseUtil from "../utils/FirebaseUtils";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e => {
      console.log(e);
      alert("Email ou senha Errado")
    })
  }
  const signUp = () => {
    FirebaseUtil.signUp(email, password).catch(e => {
      console.log(e);
      alert("Algo deu errado")
    })
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working test</Text>
      <StatusBar style="auto" />
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.textInput} />
      <TextInput placeholder="Senha" onChangeText={setPassword} value={password} style={styles.textInput} />
      {create ?<>
        <Button title="Entrar" onPress={() => signUp()} />
        <Text style={styles.text} onPress={()=>setCreate(false)}>Criar Conta</Text>
        </> :
        <>
          <Button title="Entrar" onPress={() => signIn()} />
          <Text style={styles.text} onPress={()=>setCreate(true)}>Criar Conta</Text>
        </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    marginBottom: 20,
  },
  text: {
    color: 'blue',
    marginTop: 20
  }
});