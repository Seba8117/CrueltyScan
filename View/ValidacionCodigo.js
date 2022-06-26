import React, { useState }  from 'react'
import { TextInput, View, StyleSheet, Text, Image} from 'react-native';
import { Button} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const ValidacionCodigo = () => {

  const [codigo, enviarCodigo] = useState('');

  return (
    <KeyboardAwareScrollView>
        <View style={styles.centro}>
            <Image style={styles.logo}
                source={require('../assets/IMG/Conejito.png')}

            />

        <View>
            <Text style={styles.texto}>Ingrese el código:</Text>
        </View>

        <View>
            <TextInput
                placeholder=''
                placeholderTextColor={'#666'}
                style={styles.input}
                onChangeText={texto => enviarCodigo(texto)}
                value={codigo}
                textAlign={'center'}
        
            />
        </View>

        <View >
            <Button onPress={() => enviarCodigo()}
            style={styles.btnEnviar} color='#0F0E0E'

            > Enviar</Button>
        </View>


        </View>
    </KeyboardAwareScrollView>
    

    
  )
}

const styles = StyleSheet.create({

    centro: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 30
      },

    logo: {
        height: 180,
        width: 200,
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
        width: 150,
        height: 50,
      },
})
export default ValidacionCodigo
