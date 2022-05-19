import React, { useState } from 'react'
import { Image, View, StyleSheet, ScrollView, Text, Img } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';


const Maquillaje = () => {
  return (
    <ScrollView >
    <Card>
      <Card.Content style={styles.carta} >
        <Title style={styles.letras} >Paleta Maquillaje Mac</Title>
        <Paragraph style={styles.letras}>Paleta de sombras 9 colores</Paragraph>
        <Image style={styles.foto} source={require('../assets/IMG/maquillaje9colores.png')} />
      </Card.Content>
      <Card.Content style={styles.carta} >
        <Title style={styles.letras} >Paleta Maquillaje Cake</Title>
        <Paragraph style={styles.letras}>Paleta de sombras 16 colores</Paragraph>
        <Image style={styles.foto} source={require('../assets/IMG/sombra.png')} />
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
    marginVertical:20
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
 


})
export default Maquillaje
