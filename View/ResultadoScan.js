import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';


const ResultadoScan = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.logoLibre}
                    source={require('../assets/IMG/libre.png')} />
            </View>


            <View style={styles.resultado}>
                <Image style={styles.imageResult}
                    source={require('../assets/IMG/garnier.png')} />

                <View style={styles.contenedorTexto}>
                    <Text style={styles.textoMarca}>Marca de producto</Text>
                    <Text style={styles.textoProducto}>Nombre de producto</Text>
                </View>
            </View>


            <View style={styles.fondoColor}>
                <Text style={styles.textoFondo}>Esta marca es libre de crueldad animal! No prueba en animales</Text>
            </View>


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
        flexDirection: 'row'
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
        marginBottom: 5

    },
    textoProducto: {
        fontSize: 20

    },
    textoFondo: {
        fontWeight: '800',
        marginHorizontal: 10

    },
    fondoColor: {
        backgroundColor: '#8fea5b',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10


    },
})
export default ResultadoScan
