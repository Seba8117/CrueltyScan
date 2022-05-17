import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native'
const ListadoRescatados = ({ navigation }) => {
    
    const visitarModificarRescatado = () => {
        navigation.navigate('ModificarRescatado')
    }

    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Listado Rescatados  </Text>
            </View>
            <View>
                <Pressable onPress={() => visitarModificarRescatado()} >
                    <Text style={styles.texto2} >ID: 10 </Text>
                </Pressable>

                <Pressable onPress={() => visitarModificarRescatado()}  >
                    <Text style={styles.texto2} >ID: 11 </Text>
                </Pressable>


                <Pressable  onPress={() => visitarModificarRescatado()}>
                    <Text style={styles.texto2} >ID: 12</Text>
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
    texto2: {
        color: '#3251FF',
        fontSize: 22,
        marginLeft: 40,
        marginTop: 25,
        textDecorationLine: 'underline',
        //textTransform:'uppercase',
        //fontWeight:'900'

    },

})


export default ListadoRescatados