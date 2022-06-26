import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import { Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { color } from 'react-native-reanimated';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Login = ({ navigation }) => {

  //Campos formulario
  const [email, guardarEmail] = useState('');
  const [contrasena, guardarContrasena] = useState('');


  //Almacena al usuario en la base de datos 
  const inicioSesionUsuario = async () => {
    if (email === '' || contrasena === '') {
      Alert.alert('Alerta', 'Contraseña y/o correo vacio', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])

      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correo": email,
        "contra": contrasena
      })
    };

    let respuesta = ''
    try {
      respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/login", requestOptions)
    } catch (error) {
      Alert.alert('Alerta', 'Error en el sistema', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

    if (respuesta.status === 200) {
      const body = await respuesta.json();
      if (body.tipoUsuario === 1) {
        
        navigation.navigate('MenuAdmin')
       
        

        return;
      } else {
        
        navigation.navigate('Inicio')
        await AsyncStorage.setItem('rut',  JSON.stringify(body.rut));
        return;
      }
    } else {
      Alert.alert('Alerta', 'Contraseña y/o correo incorrecto', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }
  }

  const olvidasteContrasena = () => {
    navigation.navigate('RecupContr')
  }

  const crearCuenta = () => {
    navigation.navigate('CrearCuenta')
  }

  return (
    <KeyboardAwareScrollView>
    <View style={styles.centro}>
      <Image style={styles.logo}
        source={require('../assets/IMG/Logo.png')}

      />
      <View >
        <Button onPress={() => crearCuenta()}
          style={styles.btnCrearCuenta} color='#0F0E0E'

        > + Crear Cuenta</Button>
      </View>

      <View >
        <TextInput
          placeholder='Email'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarEmail(texto)}
          value={email}
          textAlign={'center'}
        />

        <TextInput
          style={styles.input}
          onChangeText={texto => guardarContrasena(texto)}
          value={contrasena}
          placeholder='Contraseña'
          placeholderTextColor={'#666'}
          textAlign={'center'}
          secureTextEntry={true}
        />
      </View>

      <View >
        <Button onPress={() => inicioSesionUsuario()}
          style={styles.btnIniciarSesion} color='#0F0E0E'
        > Iniciar Sesión</Button>
      </View>

      <View >
        <Button onPress={() => olvidasteContrasena()}
          style={styles.btnOlvidasteTuContrasena}
        > ¿Olvidaste tu contraseña?</Button>
      </View>
    </View>

    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
  },
  centro: {
    textAlign: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 190,
    width: 190,
    marginTop: 30,
    marginHorizontal: 80
  },
  btnCrearCuenta: {
    marginVertical: 14,
    backgroundColor: '#c1f4c5',
    paddingVertical: 5,
    marginHorizontal: 50,
    marginTop: 50,
    borderRadius: 5,
    fontSize: 20,
    borderColor: '#0F0E0E',
    borderWidth: 1,
    width: 260,
    height: 50,
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 15,
    marginRight: 60,
    marginLeft: 50,
    width: 260,
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  btnIniciarSesion: {
    marginVertical: 14,
    backgroundColor: '#d9d7f1',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 24,
    color: '#0F0E0E',
    borderColor: '#0F0E0E',
    borderWidth: 1,
    marginHorizontal: 50,
    width: 260,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
  },
  btnOlvidasteTuContrasena: {
    fontSize: 20,
    color: '#0F0E0E'
  }
})

export default Login
