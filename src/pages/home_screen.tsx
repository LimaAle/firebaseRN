import React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import FirebaseUtil from '../utils/FirebaseUtils';

export default function HomeScreen() {

  const signOut=()=>{
    FirebaseUtil.signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Deslogar" onPress={()=>signOut()}/>
    </View>)
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignContent:"center",
    padding:20,
  }
})