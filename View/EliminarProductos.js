import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Image, Alert } from 'react-native'

const EliminarProductos = ({ navigation }) => {
    const eliminar = () => {
        Alert.alert('Alerta', 'Producto eliminado', [
            { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        navigation.navigate('MenuAdmin')

    }

    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>ELiminar Productos</Text>
            </View>
            <View>
                <Pressable style={styles.boton2} onPress={() => eliminar()}>
                    <Text style={styles.textoboton2} ><Image style={styles.logo} source={require('../assets/IMG/close.png')} /> Crema Garnier    </Text>
                </Pressable>

                <Pressable style={styles.boton2} onPress={() => eliminar()}>
                    <Text style={styles.textoboton2} ><Image style={styles.logo} source={require('../assets/IMG/close.png')} /> Base The Body Shop       </Text>
                </Pressable>


                <Pressable style={styles.boton2} onPress={() => eliminar()}>
                    <Text style={styles.textoboton2}  ><Image style={styles.logo} source={require('../assets/IMG/close.png')} /> Maquillaje Avene   </Text>
                </Pressable>


            </View>

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
        flex: 1


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


export default EliminarProductos 
