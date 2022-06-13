import React, { useState } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native'
const RegistroProducto = ({navigation}) => {
    //Campos formulario
    const [nombreProducto, guardarNombreProducto] = useState('');
    const [test, guardarTest] = useState('');
    const [marca, guardarMarca] = useState('');
    const [categoria, guardarCategoria] = useState('');
    
    const registrarProducto = () => {

        //Validar
        if (nombreProducto === '' || test === '' || marca === '' ||
          categoria === '' ) {
            Alert.alert('Alerta', 'Hay campos vacios.', [
              { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
          }
        else {
          Alert.alert('Alerta', 'Registro exitoso.', [
            { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
          ])
          navigation.navigate('MenuAdmin')
          return;
    
        }

     }
    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Registro de producto</Text>
            </View>
            <View>

                <Text style={styles.letras}>Nombre Producto:  </Text>
                <TextInput placeholder='Ej: Argan' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarNombreProducto(texto)}
                    value={nombreProducto} />

                <Text style={styles.letras}>Testeado en animal: </Text>
                <TextInput placeholder='Si/No' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarTest(texto)}
                    value={test} />

                <Text style={styles.letras}>Marca: </Text>
                <TextInput placeholder='Seleccione marca' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarMarca(texto)}
                    value={marca} />

                <Text style={styles.letras}>Categoria: </Text>
                <TextInput placeholder='Seleccione categoria' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarCategoria(texto)}
                    value={categoria} />




            </View>
            <Pressable style={styles.boton} onPress={() => registrarProducto()} >
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
        marginHorizontal: 20,
        borderRadius: 10,



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

export default RegistroProducto
