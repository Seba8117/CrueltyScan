import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native'
const BuscarMarcaAdmin = ({ navigation }) => {

    return (
        <ScrollView>
             <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <TextInput placeholder='Marca' placeholderTextColor={'#666'} style={styles.input} />
                <Pressable style={styles.boton}  >
                    <Text style={styles.textoboton} >Buscar</Text>
                </Pressable>
            </View>
       
        </ScrollView>
        
    )


}

const styles = StyleSheet.create({
    titulo: {
        marginTop: 35,
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
        marginHorizontal: 60,
        marginTop:20,
        borderRadius: 10
  



    },
    boton: {
        backgroundColor: '#D9D7F1',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 90,
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
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'

    },


})


export default BuscarMarcaAdmin