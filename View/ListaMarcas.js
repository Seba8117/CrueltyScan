import React, { useState, useEffect } from 'react'
import {  TextInput,Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import { Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ListaMarcas = ({ navigation }) => {
    const [datosMarca, setdatosMarca] = useState([])
   
    const [datosId, setDatosid]= useState(null);
    const [busca, setBusca] = useState('')

    const eliminarData = () => {
        AsyncStorage.removeItem('id_marca')
      }
   
    
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
        eliminarData()
        llamarBdMarca()
    }, [])

    
    const visitarModificar = async() => {
        if(datosId===null){
            console.log(datosId)
        }
        else{
            await AsyncStorage.setItem('id_marca',  JSON.stringify(datosId));
            console.log("se guardó")
            console.log(datosId)
            navigation.navigate('EliminarMarcas')
            
        }
        
    }
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
                <Text style={styles.textoBuscarMarca}>Lista Marcas</Text>
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
                    const { nom_marca, descripcion,id_marca } = marca
                    return <Card.Content style={styles.carta} key={key}>
                        <Title style={styles.letras} >{nom_marca} </Title>
                        <Image style={styles.foto} source={require('../assets/IMG/GarnierLogo.png')} />
                        <Paragraph style={styles.letras}>Descripcion: {descripcion} </Paragraph>
                        <Paragraph style={styles.letras}>Id:{id_marca} </Paragraph>
                        <Button onPress={() => { visitarModificar(); setDatosid(id_marca) }}
                            style={styles.btnAgregar}  color='#F1C40F' 
                        > Modificar</Button>
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
        marginVertical: 10,
        backgroundColor:'#000000'
    },
    letraultima: {
        color: '#000000',
        textAlign: 'center',
        marginVertical: 20

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



})

export default ListaMarcas
