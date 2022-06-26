import React, { useState } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const RegistroResacatado = ({ navigation }) => {
    // Campos formulario
    const [nombreRescatado, guardarNombreRescatado] = useState('');
    const [color, guardarColor] = useState('');
    const [tamaño, guardarTamaño] = useState('');
    const [edad, guardarEdad] = useState('');
    const [tipoMascota, guardarTipo] = useState('');
    const [foto, guardarFoto] = useState('');
    const [rut,setvalue]=useState('');
    
    AsyncStorage.getItem('rut')
        .then((rut) => {
            setvalue(JSON.parse(rut))
        })
    
    

    

    const registrarRescatado = async () => {
        console.log("Click")
        console.log(rut)
        if (nombreRescatado === '' || tipoMascota === '' || color === '' || tamaño === '' || edad === '') {
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
                "color": color,
                "tamano": tamaño,
                "nombre": nombreRescatado,
                "edad": edad,
                "tipo_mascota": tipoMascota,
                "rut": rut
            






                //    "foto":foto,
                //    "adptado": 0
            })
        };
        let respuesta = ''
        try {
            respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/mascotas", requestOptions)
        } catch (error) {
            Alert.alert('Alerta', 'Error en el sistema', [
                { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
        }

        if (respuesta.status === 200) {
            navigation.navigate('Inicio')
            Alert.alert('Alerta', 'Se registró una nueva mascota', [
                { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
            ])
            return;
        }

    }
    return (
        <ScrollView style={styles.fondo}>
            <Text style={styles.titulo}>Datos</Text>
            <View style={styles.formulario}>
                <Text style={styles.letras}>Nombre:</Text>
                <TextInput placeholder='Nombre rescatado' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarNombreRescatado(texto)}
                    value={nombreRescatado} />

                <Text style={styles.letras}>Color:</Text>
                <TextInput placeholder='Color principal del animal' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarColor(texto)}
                    value={color} />

                <Text style={styles.letras}>Tamaño:</Text>
                <TextInput placeholder='Ej:pequeño, mediano o Grande' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarTamaño(texto)}
                    value={tamaño} />

                <Text style={styles.letras}>Edad:</Text>
                <TextInput placeholder='Ingrese edad' keyboardType='number-pad' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarEdad(texto)}
                    value={edad} />

                <Text style={styles.letras}>Tipo:</Text>
                <TextInput type='file' placeholder='Perro, Gato, Ave etc' placeholderTextColor={'#666'} style={styles.input}
                    onChangeText={texto => guardarTipo(texto)}
                    value={tipoMascota} />
                    

            </View>
            <Pressable style={styles.boton} onPress={() => registrarRescatado()} >
                <Text style={styles.textoboton} >Registrar</Text>
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
    },
    fondo: {
        backgroundColor: '#cee5d0',
        flex: 1,

    },
    letras: {
        color: '#000000',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20


    },
    formulario: {
        backgroundColor: '#E5E6E6',
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
        borderRadius: 8,
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

})


export default RegistroResacatado