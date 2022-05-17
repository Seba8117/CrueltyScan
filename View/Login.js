import React, { useState } from 'react'
import {TextInput, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import {  Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import globalStyles from '../style/global';


const Login = ({ navigation }) => {

  //Campos formulario
  const [email, guardarEmail] = useState('');
  const [contraseña, guardarContraseña] = useState('');


  //Almacena al usuario en la base de datos 
  const inicioSesionUsuario = () => {

    if (email === '' || contraseña === '') {
      Alert.alert('Alerta', 'Contraseña y/o correo vacio', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])

      return;
    }
    if (email === 'admin@gmail.com' || contraseña === 'admin123') {
      navigation.navigate('MenuAdmin')
    }
    if (email === 'cliente@gmail.com' || contraseña === 'cliente123') {
      navigation.navigate('Inicio')
    }
    else {
      Alert.alert('Alerta', 'Contraseña y/o correo incorrecto', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])

    }
  }

  const olvidasteContraseña = () => {
    navigation.navigate('RecupContr')
  }

  const crearCuenta = () => {
    navigation.navigate('CrearCuenta')
  }

  //Generar Registro 
  // const inicioSesionUsu = { email, contraseña};

  //Guardar Usuario

  //Redireccionar

  //Limpiar form 

  return (

    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('../assets/IMG/Logo.png')}

      />
      <View >
        <Button onPress={() => crearCuenta()}
          style={styles.btnCrearCuenta} color='#0F0E0E'

        > + Crear Cuenta</Button>
      </View>

      <View >
        {/* <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          onChangeText={texto => guardarEmail(texto)}
          value={email}
        /> */}
        <TextInput
          placeholder='Email'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarEmail(texto)}
          value={email}
        />

        <TextInput
          style={styles.input}
          onChangeText={texto => guardarContraseña(texto)}
          value={contraseña}
          placeholder='Contraseña'
          placeholderTextColor={'#666'}



        />
      </View>

      <View >
        <Button onPress={() => inicioSesionUsuario()}
          style={styles.btnIniciarSesion} color='#0F0E0E'
        > Iniciar Sesión</Button>
      </View>

      <View >
        <Button onPress={() => olvidasteContraseña()}
          style={styles.btnOlvidasteTuContraseña}
        > ¿Olvidaste tu contraseña?</Button>
      </View>




    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: '#FFF',
    flex: 1,


  },


  logo: {
    height: 190,
    width: 190,
    marginTop: 30
  },

  btnCrearCuenta: {
    marginVertical: 14,
    backgroundColor: '#c1f4c5',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 50,
    borderRadius: 5,
    paddingHorizontal: 60,
    fontSize: 20,
    borderColor: '#0F0E0E',
    borderWidth: 1,
    height: 50,

  },

  // input: {
  //   marginBottom: 20,
  //   backgroundColor: '#000000',
  //   color: '#000000',
  //   paddingVertical: 10,
  //   paddingHorizontal: 100,
  //   width: 290,
  //   height: 20,
  //   textAlign: 'center',
  // },
  input: {
    backgroundColor: '#FFF',
    // borderRadius: 20,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 100,
    width: 290,
    height: 50,
    marginTop: 10,
    textAlign:'left'



  },

  btnIniciarSesion: {
    marginVertical: 14,
    backgroundColor: '#d9d7f1',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: -8,
    borderRadius: 5,
    paddingHorizontal: 70,
    fontSize: 24,
    color: '#0F0E0E',
    borderColor: '#0F0E0E',
    borderWidth: 1

  },

  btnOlvidasteTuContraseña: {
    fontSize: 20,
    color: '#0F0E0E'
  }


})

export default Login
