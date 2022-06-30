import React, { useState, useEffect } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native'
import { Headline, Card, Title, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ListadoRescatados = ({ navigation }) => {

    const [datosMascota, setDatosMascota] = useState([]);
    const [datosId, setDatosid]= useState(null);
    useEffect(() => {
        const llamarBdMascotas = async () => {
            const requestOptions = {
                method: 'GET',

            };
            let respuesta
            try {
                respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/mascotas", requestOptions)
            } catch (error) {
                Alert.alert('Alerta', 'Error en el sistema', [
                    { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
                ])
            }
            if (respuesta.status === 200) {
                const body = await respuesta.json();
                setDatosMascota(body)
            }
        }

        llamarBdMascotas()
    }, [datosMascota])




    const visitarModificarRescatado = async() => {
        if(datosId===null){
            console.log(datosId)
        }
        else{
            await AsyncStorage.setItem('id_mascota',  JSON.stringify(datosId));
            console.log("se guardó")
            console.log(datosId )
            navigation.navigate('ModificarRescatado')
            
        }
        
    }

    return (
        <ScrollView >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Listado Rescatados  </Text>
            </View>

            <Card>
                {datosMascota.map((mascota, key) => {
                    const { id_animal, nombre } = mascota

                    return <Card.Content style={styles.carta} key={key}>
                        <Title style={styles.letras} >ID Mascota: {id_animal} </Title>
                        <Paragraph style={styles.letras}>Nombre: {nombre} </Paragraph>
                        <Pressable onPress={() => { visitarModificarRescatado(); setDatosid(id_animal) }}  >
                            <Text style={styles.texto2} > Editar</Text>
                        </Pressable>

                    </Card.Content>

                })}

            </Card>


        </ScrollView>


    )


}

const styles = StyleSheet.create({
    carta: {
        backgroundColor: '#E5E6E6',
        borderWidth: 1,
        borderColor: '#000000',
        textAlign: 'center',
        alignItems: 'center', 

    },
    letras: {
        color: '#000000',
        textAlign: 'center',

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
        marginVertical: 30

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