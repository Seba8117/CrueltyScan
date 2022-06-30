import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, StyleSheet, ScrollView, Alert, Text, TextInput } from 'react-native';
import { Headline, Button, Paragraph, Dialog, Portal, Card } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MiCuenta = ({ navigation }) => {

  //Campos formulario
  const [nombre_cliente, guardarNombre] = useState('');
  const [apellido_pa, guardarApellido] = useState('');
  const [apellido_ma, guardarApellidoMaterno] = useState('');
  const [correo, guardarCorreo] = useState('');
  const [contra, guardarContra] = useState('');
  const [celular, guardarTelefono] = useState();
  const [rut, setvalue] = useState('');

  //Almacena al usuario en la base de datos 
  const editarCuenta = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "nombre_cliente": nombre_cliente,
        "apellido_pa": apellido_pa,
        "apellido_ma": apellido_ma,
        "correo": correo,
        "contra": contra,

        //aun no
        "celular": 950093679,
        "id_comuna": 1,
      })
    };
    let respuesta = ''
    try {
      respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/cliente/${rut}`, requestOptions)
    } catch (error) {
      Alert.alert('Alerta', 'Error en el sistema', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

    if (respuesta.status === 200) {
      navigation.navigate('Inicio')
      Alert.alert('Alerta', 'Se actualizaron los datos', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

  }

  useEffect(() => {
    AsyncStorage.getItem('rut')
      .then((rut) => {
        setvalue(JSON.parse(rut))
      })
    const llamarBdCliente = async () => {
      const requestOptions = {
        method: 'GET'
      };
      let respuesta

      try {
        respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/cliente/${rut}`, requestOptions)

      } catch (error) {
        Alert.alert('Alerta', 'Error en el sistema', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
      }
      if (respuesta.status === 200) {
        const body = await respuesta.json();
        const { nombre_cliente, apellido_pa, apellido_ma, correo, celular, contra } = body[0]
        guardarNombre(nombre_cliente)
        guardarApellido(apellido_pa)
        guardarApellidoMaterno(apellido_ma)
        guardarCorreo(correo)
        guardarContra(contra)
        guardarTelefono(celular)
      }
    }
    llamarBdCliente()
  }, [rut])

  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo} > Mis Datos</Headline>

        <View style={styles.formulario}>

          <Text style={styles.letras}>Nombre:</Text>
          <TextInput placeholderTextColor={'#666'} style={styles.input}
            onChangeText={texto => guardarNombre(texto)}
            value={nombre_cliente} />

          <Text style={styles.letras}>Apellido Paterno:</Text>
          <TextInput placeholderTextColor={'#666'} style={styles.input}
            onChangeText={text => guardarApellido(text)}
            value={apellido_pa} />

          <Text style={styles.letras}>Apellido Materno:</Text>
          <TextInput placeholderTextColor={'#666'} style={styles.input}
            onChangeText={texto => guardarApellidoMaterno(texto)}
            value={apellido_ma} />

          <Text style={styles.letras}>Correo:</Text>
          <TextInput placeholderTextColor={'#666'} style={styles.input}
            onChangeText={texto => guardarCorreo(texto)}
            value={correo} />

          <Text style={styles.letras}>Contraseña:</Text>
          <TextInput placeholderTextColor={'#666'} style={styles.input}
            onChangeText={texto => guardarContra(texto)}
            value={contra} />

        </View>

        <Button color='#0F0E0E' style={styles.btneditarMiCuenta} onPress={() => editarCuenta()}>
          Modificar
        </Button>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#E5E6E6',
    marginTop: 20,
    marginHorizontal: 40,

  },
  input: {
    backgroundColor: '#FFF',
    // borderRadius: 20,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    marginHorizontal: 20,
    borderRadius: 8,

  },
  letras: {
    color: '#000000',
    textAlign: 'center',

  },

  btneditarMiCuenta: {
    marginVertical: 14,
    backgroundColor: '#d9d7f1',
    paddingVertical: 5,
    marginHorizontal: 80,
    marginTop: 8,
    borderRadius: 5,
    fontSize: 24,
    borderColor: '#0F0E0E',
    borderWidth: 1
  }
})

export default MiCuenta
