import React, { useState, useEffect } from 'react'
import { TextInput,Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import {  Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EliminarMarcas = ({ navigation }) => {
    

    const [nom_marca, guardarModificarNombreMarca] = useState('');
    const [descripcion, guardarModificarDescripcion] = useState('');
    
  
    const [id_marca, setvalue] = useState('');

    console.log('modificar:')
    console.log(id_marca)
    useEffect(() => {
        AsyncStorage.getItem('id_marca')
          .then((id_marca) => {
            setvalue(JSON.parse(id_marca))
          })
        const llamarBdCliente = async () => {
          const requestOptions = {
            method: 'GET'
          };
          let respuesta
    
          try {
            respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/marcas/${id_marca}`, requestOptions)
    
          } catch (error) {
            Alert.alert('Alerta', 'Error en el sistema', [
              { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
          }
          if (respuesta.status === 200) {
            const body = await respuesta.json();
            const { nom_marca, descripcion} = body[0]
            guardarModificarNombreMarca(nom_marca)
            guardarModificarDescripcion(descripcion)
          }
        }
        llamarBdCliente()
      }, [id_marca])

      const ModificarMarca = async() => {
        const requestOptions = {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "nom_marca": nom_marca,
                "descripcion": descripcion
              
            })
          };
          let respuesta = ''
          try {
            respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/marcas/${id_marca}`, requestOptions)
          } catch (error) {
            Alert.alert('Alerta', 'Error en el sistema', [
              { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
          }
      
          if (respuesta.status === 200) {
            navigation.navigate('MenuAdmin')
            Alert.alert('Alerta', 'Se actualizaron los datos', [
              { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
          }

        
    }

    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Modificar Marcas  </Text>
            </View>

            <View>
            <Text style={styles.letras}>Nombre de la marca: </Text>
                <TextInput placeholder='Ej: Argan' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarModificarNombreMarca(texto)}
                    value={nom_marca}
                />

                <Text style={styles.letras}>Descripcion:</Text>
                <TextInput
                    multiline={true}
                    placeholder='Escriba una breve desacripcion de la marca'
                    placeholderTextColor={'#666'}
                    numberOfLines={10}
                    onChangeText={texto => guardarModificarDescripcion(texto)}
                    value={descripcion}
                    style={{ marginHorizontal: 20, color: '#000000', height: 200, width: 368, textAlignVertical: 'top', borderWidth: 1, borderColor: '#000000' }} />


            </View>
            <Pressable style={styles.boton} onPress={() => ModificarMarca()} >
                <Text style={styles.textoboton} >Modificar Marca</Text>
            </Pressable>

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
        marginHorizontal: 20,
        borderRadius: 8,
    
      },
    titulo: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600',
    },
    fondo: {
        backgroundColor: '#cee5d0',


    },
    logo: {
        width: 23,
        height: 23,

    },
    texto: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 40

    },
    letras: {
        color: '#000000',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20


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
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'
        fontWeight: '600'
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
        textAlign: 'left',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'

    },


})


export default EliminarMarcas
