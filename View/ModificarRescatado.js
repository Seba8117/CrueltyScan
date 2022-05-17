import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native'
const ModificarRescastado = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Datos rescatado</Text>
        
            </View>
            
            <View style={styles.fondoresto} >
                <Text style={styles.letras}>Nombre:</Text>
                <TextInput placeholder='Nombre rescatado' placeholderTextColor={'#666'} style={styles.input}   value="Firulais" />

                <Text style={styles.letras}>Tipo animal:</Text>
                <TextInput placeholder='Perro, Gato, Ave etc.' placeholderTextColor={'#666'} style={styles.input} value="Perro" />

                <Text style={styles.letras}>Color:</Text>
                <TextInput placeholder='Color principal del animal' placeholderTextColor={'#666'} style={styles.input}  value="Blanco"/>

                <Text style={styles.letras}>Tamaño:</Text>
                <TextInput placeholder='Ingrese tamaño' placeholderTextColor={'#666'} style={styles.input} value="Pequeño" />

                <Text style={styles.letras}>Edad:</Text>
                <TextInput placeholder='Ingrese edad' keyboardType='number-pad' placeholderTextColor={'#666'} style={styles.input} value="3"/>

                <Text style={styles.letras}>Foto:</Text>
                <TextInput   type='file' placeholder='Seleccione Imagen' placeholderTextColor={'#666'} style={styles.input} />

            </View>
            <Pressable style={styles.boton} >
                <Text style={styles.textoboton} >Modificar</Text>
            </Pressable>

        </ScrollView>


    )


}

const styles = StyleSheet.create({
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
