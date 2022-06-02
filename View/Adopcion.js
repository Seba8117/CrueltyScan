import React, { useState } from 'react'
import { Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';


const Adopcion = () => {
    return (
        <ScrollView>
            <Card>
                <Card.Content style={styles.carta} >
                    <View style={styles.centro} >
                        <Image style={styles.foto} source={require('../assets/IMG/adopta1.jpg')} />
                    </View>
                    <Paragraph style={styles.letras}>Nombre: sin asignar</Paragraph>
                    <Paragraph style={styles.letras}>Color: Café</Paragraph>
                    <Paragraph style={styles.letras}>Tamaño: Pequeño</Paragraph>
                    <Paragraph style={styles.letras}>Edad: 3 meses aprox</Paragraph>
                    <View style={styles.letraultima} >
                        <Title style={styles.letras} >Contacto</Title>
                        <Paragraph style={styles.letras}>Celular contacto: +56950093679</Paragraph>
                        <Paragraph style={styles.letras}>Telefono: 229316092</Paragraph>
                    </View>

                </Card.Content>
                <Card.Content style={styles.carta} >
                    <View style={styles.centro} >
                        <Image style={styles.foto} source={require('../assets/IMG/adopta2.jpg')} />
                    </View>
                    <Paragraph style={styles.letras}>Nombre: sin asignar</Paragraph>
                    <Paragraph style={styles.letras}>Color: Café</Paragraph>
                    <Paragraph style={styles.letras}>Tamaño: Mediano</Paragraph>
                    <Paragraph style={styles.letras}>Edad: 2 años</Paragraph>
                    <View style={styles.letraultima} >
                        <Title style={styles.letras} >Contacto</Title>
                        <Paragraph style={styles.letras}>Celular contacto: +56995374558 </Paragraph>
                        <Paragraph style={styles.letras}>Telefono: 225545080</Paragraph>
                    </View>

                </Card.Content>
            </Card>
        </ScrollView>



    )
}


const styles = StyleSheet.create({
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
    centro: {
        textAlign: 'center',
        alignItems: 'center',
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

export default Adopcion
