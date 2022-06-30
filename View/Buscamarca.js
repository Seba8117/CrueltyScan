import React, { useState, useEffect } from 'react'
import { TextInput,Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import {  Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
const Buscamarca = ({ navigation }) => {
    const [datosMarca, setdatosMarca] = useState([])
    const [busca, setBusca] = useState('')
    useEffect(() => {
        
        const llamarBdMarca = async () => {
            const requestOptions = {
                method: 'GET',

            };
            let respuesta
            try {
                respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/marcas", requestOptions)
            } catch (error) {
                Alert.alert('Alerta', 'Error en el sistema', [
                    { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
                ])
            }
            if (respuesta.status === 200) {
                const body = await respuesta.json();
                setdatosMarca(body)
            }
        }
     
        llamarBdMarca()
    }, [])
    
    const Buscar = async () => {
        const myHeaders = new Headers();
        myHeaders.append("nombre_marca", busca)
        const llamarBdMarca = async () => {
            const requestOptions = {
                method: 'GET',
                headers: myHeaders
            };
            let respuesta
            try {
                respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/buscar/marca/nombre", requestOptions)
            } catch (error) {
                Alert.alert('Alerta', 'Error en el sistema', [
                    { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
                ])
            }
            if (respuesta.status === 200) {
                const body = await respuesta.json();
                setdatosMarca(body)
            }
            else{
                Alert.alert('Alerta', 'Error en el sistema', [
                    { text: 'Cerrar', onPress: () => console.log('No se encontro la marca.') }
                ])

            }
        }

        llamarBdMarca()
    }
    




    return (

        <ScrollView>
            <View>
                <Text style={styles.textoBuscarMarca}>Marcas no testeadas en animales</Text>
            </View>

            <TextInput placeholder='Ingrese una marca' placeholderTextColor={'#666'} style={styles.input}
                onChangeText={texto => setBusca(texto)}
                value={busca}


            />
            <Button onPress={() => Buscar()}
                style={styles.btnbuscar} color='#0F0E0E'
                icon={require('../assets/IMG/buscar.png')}
                
            >Buscar una marca</Button>

            <Card>
                {datosMarca.map((marca, key) => {
                    const { nom_marca, descripcion } = marca
                    return <Card.Content style={styles.carta} key={key}>
                        <Title style={styles.letras} >{nom_marca} </Title>
                        <Image style={styles.foto} source={require('../assets/IMG/GarnierLogo.png')} />
                        <Paragraph style={styles.letras}>{descripcion} </Paragraph>
                        <View style={styles.letraultima}>

                        </View>

                    </Card.Content>
                })}
            </Card>



        </ScrollView>


    )


}

const styles = StyleSheet.create({
    btnbuscar: {
        marginTop:20,
        marginVertical:10,



    },
    input: {
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: '#FFF',
        // borderRadius: 20,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 20



    },
    textoBuscarMarca: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 20,
        color: '#0F0E0E'
    },

    foto: {
        height: 190,
        width: 190,
        marginTop: 30,
        marginHorizontal: 70,
        marginVertical: 20
    },
    carta: {
        backgroundColor: '#E5E6E6',
        borderWidth: 1,
        borderColor: '#000000',

    },
    letras: {
        color: '#000000',
        textAlign: 'center',

    },

    btnAgregar: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    letraultima: {
        color: '#000000',
        textAlign: 'center',
        marginVertical: 20

    },



})

export default Buscamarca
