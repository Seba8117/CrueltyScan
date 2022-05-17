import React, {useState} from 'react'
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu,Searchbar} from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';

const Categorias = ({navigation}) => {
    const maquillajeyBelleza = () => {
        navigation.navigate('Maquillaje')
      }
    
      const cuidadoCapilar = () => {
        navigation.navigate('CuidadoCapilar')
      }
    
      const articulosHigiene = () => {
        navigation.navigate('ArticulosHigiene')
      }
    
      const cuidadoPersonal = () => {
        navigation.navigate('CuidadoPersonal')
      }
     
      
  return (

    <View style={{ flex: 1 }}>
      <Menu.Item icon={require('../assets/IMG/maquillaje.png')} onPress={() => {maquillajeyBelleza()}} title="Maquillaje y Belleza" />
      <Menu.Item icon={require('../assets/IMG/cepillo.png')} onPress={() => {cuidadoCapilar()}} title="Cuidado Capilar" />
      <Menu.Item icon={require('../assets/IMG/articulos.png')} onPress={() => {articulosHigiene()}} title="Articulos de Higiene"  />
      <Menu.Item icon={require('../assets/IMG/personal.png')} onPress={() => {cuidadoPersonal()}} title="Cuidado Personal"  />
    </View>
  
  )
}

export default Categorias
