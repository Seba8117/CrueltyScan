import React, {useState} from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Title, Menu,Card} from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';

const Maquillaje = () => {
  return (
    <Card>
     <Card.Content>
       <Title>Paleta Maquillaje Mac</Title>
       <Paragraph>Paleta de sombras 9 colores</Paragraph>
      </Card.Content>
    <Card.Cover style={styles.foto}  source={{ uri: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/01/13/15789131658415.png' }} icon={require('../assets/IMG/star.png')}/>
    
  </Card>

  )
}

const styles = StyleSheet.create({
    foto:{
        height: 190,
        width: 190,
        marginTop: 30
    }
  })
export default Maquillaje
