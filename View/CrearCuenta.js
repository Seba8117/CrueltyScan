import React, { useState } from 'react'
import {TextInput, View, StyleSheet, ScrollView,Alert } from 'react-native';
import {  Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../style/global';


const CrearCuenta = ({navigation}) => {

  //Campos formulario
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [email, guardarEmail] = useState('');
  const [contraseña, guardarContraseña] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [region, guardarRegión] = useState('');
  const [comuna, guardarComuna] = useState('');
  const [apellidoMaterno, guardarApellidoMaterno] = useState('');
  //const [alerta, guardarAlerta] = useState('false');



  //Almacena al usuario en la base de datos 
  const registrarseUsuario = () => {

    //Validar
    if (nombre === '' || apellido === '' || email === '' ||
      contraseña === '' || telefono === '' || 
       region === '' || comuna === ''||apellidoMaterno==='') {
        Alert.alert('Alerta', 'Hay campos vacios.', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        return;
      }
    else {
      Alert.alert('Alerta', 'Registro exitoso.', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      navigation.navigate('Login')
      return;

    }

    //Generar Registro 
    const registro = { nombre, apellido, email, contraseña, telefono, region, comuna,apellidoMaterno };

    //Guardar Usuario

    //Redireccionar

    //Limpiar form 


  }




  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}> Registro</Headline>
       

        <TextInput
          placeholder='Nombre'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarNombre(texto)}
          value={nombre}

        />

        <TextInput
          onChangeText={texto => guardarApellido(texto)}
          value={apellido}
          style={styles.input}
          placeholder='Apellido Paterno'
          placeholderTextColor={'#666'}
        />
        <TextInput
          onChangeText={texto => guardarApellidoMaterno(texto)}
          value={apellidoMaterno}
          style={styles.input}
          placeholder='Apellido Materno'
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarEmail(texto)}
          value={email}
          style={styles.input}
          placeholder='Correo'
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarContraseña(texto)}
          value={contraseña}
          secureTextEntry
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor={'#666'}
          // right={<TextInput.Icon name="eye" />}
        />


        <TextInput
          onChangeText={texto => guardarTelefono(texto)}
          value={telefono}
          style={styles.input}
          placeholder='Telefono'
          placeholderTextColor={'#666'}
          
        />


        <TextInput
          onChangeText={texto => guardarRegión(texto)}
          value={region}
          style={styles.input}
          placeholder='Region'
          placeholderTextColor={'#666'}
        />


        <TextInput
          onChangeText={texto => guardarComuna(texto)}
          value={comuna}
          style={styles.input}
          placeholder='Comuna'
          placeholderTextColor={'#666'}
        />

        <Button color='#0F0E0E' style={styles.btnregistrarUsu} onPress={() => registrarseUsuario()}>
          Registrar
        </Button>

      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    // borderRadius: 20,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 15,
    marginRight:60,
    marginLeft:50,
    width: 260,
    height: 50,
    marginTop: 10,

  },

  btnregistrarUsu: {
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

export default CrearCuenta
