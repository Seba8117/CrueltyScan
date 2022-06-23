import React, { useState } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
const EliminarMarcas = ({ navigation }) => {
    const ModificarMarca = () => {
        Alert.alert('Alerta', 'Marca modificada con exito!', [
            { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        navigation.navigate('MenuAdmin')

        
    }

    const [nombreMarca, guardarModificarNombreMarca] = useState('');
    const [descripcion, guardarModificarDescripcion] = useState('');


    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Modificar Marcas      </Text>
            </View>

            <View>
            <Text style={styles.letras}>Nombre de la marca: </Text>
                <TextInput placeholder='Ej: Argan' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarModificarNombreMarca(texto)}
                    value={nombreMarca}
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
