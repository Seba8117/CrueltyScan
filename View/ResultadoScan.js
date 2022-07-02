import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';
import ObtenerImagenMarca from './utils/ObtenerImagenMarca'

const ResultadoScan = ({ route, navigation }) => {
    const { barcode } = route.params;
    const [data, setData] = useState(false)
    const [noEncontrado, setnoEncontrado] = useState(false)
    const getData = () => {
        AsyncStorage.getItem('rut')
            .then((rut) => {
                setvalue(JSON.parse(rut))
            })
    }

    useEffect(() => {
        const buscarProducto = async () => {
            const requestOptions = {
                method: 'GET'
            };
            let respuesta
            try {
                respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/productos/${barcode}`, requestOptions)
            } catch (error) {
                console.log(error)
            }

            const body = await respuesta.json();
            if (body.length > 0) {
                setData(body[0])
            } else {
                setnoEncontrado(true)
            }


        }

        buscarProducto()
    }, [])

    return (
        <View>
            {
                data && data.test === 1 && <View style={styles.container}>
                    <Image style={styles.logoLibre}
                        source={require('../assets/IMG/crueldad.png')} />
                </View>
            }
            {
                data && data.test === 0 && <View style={styles.container}>
                    <Image style={styles.logoLibre}
                        source={require('../assets/IMG/libre.png')} />
                </View>
            }
            {data && data.nom_marca && data.nom_producto &&
                <View style={styles.resultado}>
                    <Image style={styles.imageResult}
                        source={ObtenerImagenMarca(data.nom_marca)}
                    />
                    <View style={styles.contenedorTexto}>

                        <Text style={styles.textoMarca}>{data.nom_marca}</Text>
                        <Text style={styles.textoProducto}>{data.nom_producto}</Text>
                    </View>

                </View>}

            {
                data && data.test === 1 && <View style={styles.fondoColorTesteo}>
                    <Text style={styles.textoFondoTesteo}>Esta marca testea en animales!!</Text>
                </View>
            }

            {
                data && data.test === 0 && <View style={styles.fondoColorNoTesteo}>
                    <Text style={styles.textoFondoNoTesteo}>Esta marca es libre de crueldad animal! No prueba en animales</Text>
                </View>
            }

            {noEncontrado && <View style={styles.fondoColorTesteo}>
                <Text style={styles.textoFondoNoTesteo}>Producto no encontrado</Text>
            </View>}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c1f4c5',
        height: 200,
        alignItems: "center",
        textAlign: "center"

    },
    logoLibre: {
        height: 300,
        width: 300,
        marginTop: 10,

    },


    //css resultado de producto

    resultado: {
        marginTop: 70,
        flexDirection: 'row',
        marginHorizontal: 20
    },

    imageResult: {
        height: 100,
        width: 100

    },
    contenedorTexto: {
        padding: 30

    },
    textoMarca: {
        fontWeight: '900',
        fontSize: 20,
        marginBottom: 5,
        color: '#000000'

    },
    textoProducto: {
        fontSize: 20,
        color: '#000000'
    },
    textoFondoNoTesteo: {
        fontWeight: '600',
        marginHorizontal: 10
    },
    textoFondoTesteo: {
        fontWeight: '800',
        color: '#fff',
        marginHorizontal: 10

    },
    fondoColorNoTesteo: {
        backgroundColor: '#8fea5b',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    fondoColorTesteo: {
        backgroundColor: 'red',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
})
export default ResultadoScan
