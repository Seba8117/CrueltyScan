import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView,Image } from 'react-native'
const MenuAdopcion = ({ navigation }) => {

  const visitarRegistroRescatado = () => {
    navigation.navigate('RegistroRescatado')
  }
  const visitarAdopcion = () => {
    navigation.navigate('Adopcion')
  }

  return (
    <SafeAreaView style={styles.fondo} >
      <Text style={styles.colorLetra}>Adopción</Text>

      <Image style={styles.logo} source={require('../assets/IMG/adopción.png')}/>

      <Pressable style={styles.boton} onPress={() => visitarAdopcion()}    >
        <Text style={styles.textoboton} >Adopta</Text>
      </Pressable>

      <Pressable style={styles.boton} onPress={() => visitarRegistroRescatado()}  >
        <Text style={styles.textoboton} >Registrar Rescatado</Text>
      </Pressable>


    </SafeAreaView>

  )


}

const styles = StyleSheet.create({
  colorLetra: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    //fontFamily:'cursive'
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
    marginHorizontal: 135,

  },
  fondo: {
    backgroundColor: '#cee5d0',
    flex: 1,

  },

  boton: {
    backgroundColor: '#D9D7F1',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',



  },

  textoboton: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    //textTransform:'uppercase',
    //fontWeight:'900'
  },


});

export default MenuAdopcion