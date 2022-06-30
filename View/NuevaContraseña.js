import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, Image,Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
const NuevaContraseña = ({ navigation }) => {
  const [nuevaClave, guardarNuevaContrasena] = useState('');
  const [nuevaClave2, guardarNuevaContrasena2] = useState('');
  const [correo, setvalue] = useState('');

  AsyncStorage.getItem('correo')
    .then((correo) => {
      setvalue(JSON.parse(correo))
    })

  console.log("nueva contra pagina")
  console.log(correo)


  const editarContra = async () => {
    if (nuevaClave === nuevaClave2) {
      const requestOptions = {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "correo": correo,
          "clave": nuevaClave

        })
      };
      let respuesta = ''
      try {
        respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/recuperar-clave/paso3`, requestOptions)
      } catch (error) {
        Alert.alert('Alerta', 'Error en el sistema', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        return;
      }

      if (respuesta.status === 200) {
        navigation.navigate('Login')
        Alert.alert('Alerta', 'Se registró la nueva contraseña', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        return;
      }
    }
    else{
      Alert.alert('Alerta', 'Las contraseñas no son iguales', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])

    }

  }







  return (
    <KeyboardAwareScrollView>

      <View style={styles.centro}>
        <Image style={styles.logo}
          source={require('../assets/IMG/NuevaContraseña.jpg')}

        />

        <View>
          <Text style={styles.texto}>Ingrese nueva contraseña:</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarNuevaContrasena(texto)}
            value={nuevaClave}
            placeholder='Nueva Contraseña'
            placeholderTextColor={'#666'}
            textAlign={'center'}
            secureTextEntry={true}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={texto => guardarNuevaContrasena2(texto)}
            value={nuevaClave2}
            placeholder='Nueva Contraseña'
            placeholderTextColor={'#666'}
            textAlign={'center'}
            secureTextEntry={true}
          />
        </View>

        <View >
          <Button onPress={() => editarContra()}
            style={styles.btnEnviar} color='#0F0E0E'

          > Cambiar Contraseña</Button>
        </View>


      </View>
    </KeyboardAwareScrollView>



  )
}

const styles = StyleSheet.create({

  centro: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  logo: {
    height: 150,
    width: 180,
    marginTop: 30,
    marginHorizontal: 80
  },

  texto: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
    fontSize: 20,
    color: '#0F0E0E'
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
    marginTop: -5,
    borderRadius: 8,
    borderWidth: 1,
  },

  btnEnviar: {
    marginVertical: 14,
    backgroundColor: '#c1f4c5',
    paddingVertical: 5,
    marginHorizontal: 30,
    marginTop: 25,
    borderRadius: 5,
    fontSize: 20,
    borderColor: '#0F0E0E',
    borderWidth: 1,
    width: 230,
    height: 50,
  },
})

export default NuevaContraseña
