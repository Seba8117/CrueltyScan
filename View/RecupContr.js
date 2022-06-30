
import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecupContr = ({ navigation }) => {
  const [email, guardarEmail] = useState('');
  //const [alerta, guardarAlerta] = useState('false');


  const EnviarCorreo = async() => {

    await AsyncStorage.setItem('correo',  JSON.stringify(email));
            console.log("se guardó")
            console.log(email)
            
    if (email === '') {
      Alert.alert('Campo vacio', 'Porfavor escriba su correo y reintente.', [
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
        "correo": email
      })
    };
    let respuesta = ''
    try {
      respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/recuperar-clave/paso1", requestOptions)
    } catch (error) {
      Alert.alert('Alerta', 'Error en el sistema', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

    if (respuesta.status === 200) {
      navigation.navigate('ValidacionCodigo')
      Alert.alert('Alerta', 'Se envio un codigo a su correo para recuperar contraseña', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

  }

  return (
    <View style={globalStyles.contenedor}>

      <Paragraph style={styles.parrafo1} >
        Por favor ingrese el correo electrónico que utilizó al registrarse en Crueltly Scan.
      </Paragraph>


      <TextInput
        label="Email"
        placeholder='correo@correo.cl'
        onChangeText={texto => guardarEmail(texto)}
        value={email}
        style={styles.input}
      />


      <Button color='#0F0E0E' style={styles.btnEnviarCorreo} onPress={() => EnviarCorreo()}>
        Enviar
      </Button>


      <Paragraph style={styles.parrafo1} >
        Le enviaremos un correo electrónico.
      </Paragraph>



    </View>




  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: '#0F0E0E'
  },

  btnEnviarCorreo: {
    marginVertical: 14,
    backgroundColor: '#d9d7f1',
    paddingVertical: 5,
    marginHorizontal: 80,
    marginTop: 8,
    borderRadius: 5,
    fontSize: 24,
    borderColor: '#0F0E0E',
    borderWidth: 1
  },

  parrafo1: {
    padding: 60,
    fontSize: 18
  }
})
export default RecupContr
