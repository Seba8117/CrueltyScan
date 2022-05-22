import React, { useState } from 'react'
import { View, StyleSheet, ScrollView,Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import globalStyles from '../style/global';

const MiCuenta = ({ navigation }) => {

  //Campos formulario
  const [nombre, guardarNombre] = useState('Cliente');
  const [apellido, guardarApellido] = useState('Cliente');
  const [email, guardarEmail] = useState('cliente@gmail.com');
  const [contraseña, guardarContraseña] = useState('cliente123');
  const [telefono, guardarTelefono] = useState('99999999');
  const [direccion, guardarDireccion] = useState('AV.Siempre viva');
  const [region, guardarRegión] = useState('Metropolitana');
  const [comuna, guardarComuna] = useState('Conchali');
  // const [alerta, guardarAlerta] = useState('false');



  //Almacena al usuario en la base de datos 
  const editarCuenta = () => {
    //Validar
    if (nombre === '' || apellido === '' || email === '' ||
      contraseña === '' || telefono === '' || direccion === ''
      || region === '' || comuna === '') {
      //  guardarAlerta(true)
      Alert.alert('Alerta', 'Hay campos vacios', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])

      return;
    }
    else{
      Alert.alert('Alerta', 'Se ha modificado su perfil', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      navigation.navigate('Inicio')
      return;

    }
    

    //Generar Registro 
    const registro = { nombre, apellido, email, contraseña, telefono, direccion, region, comuna };

    //Guardar Usuario

    //Redireccionar

    //Limpiar form 


  }




  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}> Mis Datos</Headline>

        <TextInput
          label="Nombre"
          onChangeText={texto => guardarNombre(texto)}
          value={nombre}
          mode="flat"
          pointerEvents="none"
          style={styles.input}
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}

        />

        <TextInput
          label="Apellido"
          onChangeText={texto => guardarApellido(texto)}
          value={apellido}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />

        <TextInput
          label="Email"
          onChangeText={texto => guardarEmail(texto)}
          value={email}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />

        <TextInput
          label="Contraseña"
          onChangeText={texto => guardarContraseña(texto)}
          value={contraseña}
          secureTextEntry
          style={styles.input}
          right={<TextInput.Icon name="eye" />}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />


        <TextInput
          label="Teléfono"
          onChangeText={texto => guardarTelefono(texto)}
          value={telefono}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />

        <TextInput
          label="Dirección"
          onChangeText={texto => guardarDireccion(texto)}
          value={direccion}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />

        <TextInput
          label="Región"
          onChangeText={texto => guardarRegión(texto)}
          value={region}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#353535',
            }
          }}
        />


        <TextInput
          label="Comuna"
          onChangeText={texto => guardarComuna(texto)}
          value={comuna}
          style={styles.input}
          mode="flat"
          theme={{
            colors: {
              primary: 'black',
              text: '#4D4D4D',
            }
          }}
        />





        <Button color='#0F0E0E' style={styles.btneditarMiCuenta} onPress={() => editarCuenta()}>
          Modificar
        </Button>






      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: '#BCBCBC',

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
