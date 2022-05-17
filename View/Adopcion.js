import React, { useState } from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { Headline, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';


const Adopcion = () => {
    return (
        <ScrollView >
            <View style={styles.fondo} >
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Listado de Mascotas </Text>
            </View>
            <View>



            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 40

    },
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
    


})

export default Adopcion
