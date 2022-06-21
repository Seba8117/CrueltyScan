import React, { useState }  from 'react'
import { TextInput, View, StyleSheet, Text, Image} from 'react-native';
import { Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const NuevaContraseña = () => {
    const [nuevaClave, guardarNuevaContrasena] = useState('');

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
            onChangeText={texto => guardarNuevaContrasena(texto)}
            value={nuevaClave}
            placeholder='Nueva Contraseña'
            placeholderTextColor={'#666'}
            textAlign={'center'}
            secureTextEntry={true}
            />
          </View>
  
          <View >
              <Button onPress={() => guardarNuevaContrasena()}
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
  
      texto:{
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
