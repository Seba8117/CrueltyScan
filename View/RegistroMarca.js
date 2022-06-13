import React, { useState } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView,Alert } from 'react-native'

const RegistroMarca = ({ navigation }) => {
    // Campos formulario
    const [nombreMarca, guardarNombreMarca] = useState('');
    const [descripcion, guardarDescripcion] = useState('');
 
  

    const registrarMarca  = async () => {
        if (nombreMarca === ''||  descripcion=== '') {
            Alert.alert('Alerta', 'Hay campos vacios.', [
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
              "nom_marca":nombreMarca,
              "descripcion": descripcion, 
        
              
      
            })
          };
          let respuesta = ''
          try {
            respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/marcas", requestOptions)
          } catch (error) {
            Alert.alert('Alerta', 'Error en el sistema', [
              { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
          }
      
          if (respuesta.status === 200) {
              navigation.navigate('MenuAdmin')
              Alert.alert('Alerta', 'Se registró una nueva marca', [
                { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
              ])
              return;
            }

    }

    return (

        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Registro de marca</Text>
            </View>
            <View>

                <Text style={styles.letras}>Nombre de la marca: </Text>
                <TextInput placeholder='Ej: Argan' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarNombreMarca(texto)}
                    value={nombreMarca}
                />

                <Text style={styles.letras}>Descripcion:</Text>
                <TextInput
                    multiline={true}
                    placeholder='Escriba una breve desacripcion de la marca'
                    placeholderTextColor={'#666'}
                    numberOfLines={10}
                    onChangeText={texto => guardarDescripcion(texto)}
                    value={descripcion}
                    style={{ marginHorizontal: 20, color: '#000000', height: 200, width: 368, textAlignVertical: 'top', borderWidth: 1, borderColor: '#000000' }} />



            </View>
            <Pressable style={styles.boton} onPress={() => registrarMarca()} >
                <Text style={styles.textoboton} >Registrar</Text>
            </Pressable>

        </ScrollView>


    )


}

const styles = StyleSheet.create({
    botonvolver: {
        marginTop: 15,
        marginLeft: 10,
        color: '#000000',
    },
    titulo: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600',
    },
    fondo: {
        backgroundColor: '#cee5d0',


    },
    texto: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        marginHorizontal: 20,
        textAlign: 'center',
        marginVertical: 15

    },
    text: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        marginLeft: 70,
        marginVertical: 20,

    },
    letras: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20,



    },

    formulario: {
        backgroundColor: '#D9D9D8',
        marginTop: 20,
        marginHorizontal: 40,

    },
    input: {
        backgroundColor: '#FFF',
        // borderRadius: 20,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 20



    },
    boton: {
        backgroundColor: '#D9D7F1',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 20,
        borderColor: '#000000',




    },
    textoboton: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 23,
        //textTransform:'uppercase',
        //fontWeight:'900'

    },

    boton2: {
        backgroundColor: '#E1E1DF',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',




    },
    textoboton2: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'

    },

})


export default RegistroMarca