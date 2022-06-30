import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Alert, Text, TextInput } from 'react-native';
import { Headline, Button, Paragraph, Dialog, Portal, Card } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ModificarRescastado = ({ navigation }) => {
    const Modificar = () => {
       





    }
    const eliminar = () => {
        Alert.alert('Alerta', 'Publicacion eliminada', [
            { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        navigation.navigate('MenuAdmin')

    }


    return (
        <ScrollView>
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Modificar rescatado</Text>
        
            </View>
            
            <View style={styles.fondoresto} >
                <Text style={styles.letras}>Nombre:</Text>
                <TextInput placeholder='Nombre rescatado' placeholderTextColor={'#666'} style={styles.input}    
                onChangeText={texto => guardarNombre(texto)}
                value={nombre_cliente}
                
                
                />

                <Text style={styles.letras}>Tipo animal:</Text>
                <TextInput placeholder='Perro, Gato, Ave etc.' placeholderTextColor={'#666'} style={styles.input} 
                onChangeText={texto => guardarNombre(texto)}
                value={nombre_cliente}/>

                <Text style={styles.letras}>Color:</Text>
                <TextInput placeholder='Color principal del animal' placeholderTextColor={'#666'} style={styles.input} 
                onChangeText={texto => guardarNombre(texto)}
                value={nombre_cliente}/>

                <Text style={styles.letras}>Tamaño:</Text>
                <TextInput placeholder='Ingrese tamaño' placeholderTextColor={'#666'} style={styles.input} 
                onChangeText={texto => guardarNombre(texto)}
                value={nombre_cliente}/>

                <Text style={styles.letras}>Edad:</Text>
                <TextInput placeholder='Ingrese edad' keyboardType='number-pad' placeholderTextColor={'#666'} style={styles.input} 
                onChangeText={texto => guardarNombre(texto)}
                value={nombre_cliente}/>

                <Text style={styles.letras}>Foto:</Text>
                <Image style={styles.foto} source={require('../assets/IMG/adopta2.jpg')} />
                <Pressable style={styles.boton} onPress={() => Modificar()}>
                <Text style={styles.textoboton} >Modificar</Text>
            </Pressable>
            <Pressable style={styles.botoneliminar} onPress={() => eliminar()}>
                <Text style={styles.textoboton} >ELiminar</Text>
            </Pressable>

            </View>
           

        </ScrollView>


    )


}

const styles = StyleSheet.create({
    btnEliminar: {
        marginVertical: 14,
        backgroundColor: '#FF3939',
        marginTop: 10,
        borderRadius: 5,
        fontSize: 24,
        borderColor: '#0F0E0E',
        borderWidth: 1,
        width: 160,
        height: 40,
    
      },
    fondoresto:{
        backgroundColor:'#FFF'
    },
    titulo: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
    },
    letras: {
        marginLeft: 50,
        color: '#000000',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20

    },
    foto: {
        height: 190,
        width: 190,
        marginTop: 30,
        marginHorizontal: 70,
        marginVertical: 20
    },
 
    input: {
        marginLeft: 50,
        marginRight:50,
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
        borderColor: '#000000',
        marginVertical: 40




    },
    botoneliminar: {
        backgroundColor: '#FF3939',
        padding: 15,
        marginTop: -20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        marginVertical: 40




    },
    textoboton: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'
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
    texto: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'

    },

})


export default ModificarRescastado
