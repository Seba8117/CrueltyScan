import React, { useState } from 'react'
import { Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
const Buscamarca= ({ navigation }) =>{
    
    

    return(
        
        <ScrollView>

          <View>
            <Text style={styles.textoBuscarMarca}>Buscar Marca</Text>
          </View>

        <Card>
            <Card.Content style={styles.carta} >
             <Title style={styles.letras} >Garnier</Title>
                <Image style={styles.foto} source={require('../assets/IMG/GarnierLogo.png')} />
                <Paragraph style={styles.letras}>Productos a base de ingredientes naturales para el cuidado de la piel, coloración, tintes y cuidado del cabello</Paragraph>
                <View style={styles.letraultima}>
                  
                </View>

            </Card.Content>
        </Card>
    </ScrollView>
        

    )
    

}

const styles = StyleSheet.create({
    textoBuscarMarca:{
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30,
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
        marginVertical:20

    },



})

export default Buscamarca
