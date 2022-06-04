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

    <View style={styles.fondo}>
      <Menu.Item icon={require('../assets/IMG/maquillaje.png')} onPress={() => {maquillajeyBelleza()}} title="Maquillaje y Belleza" 
      theme={{
        colors: {
          text: '#000000',
        }
      }}
      />
      
      <Menu.Item icon={require('../assets/IMG/cepillo.png')} onPress={() => {cuidadoCapilar()}} title="Cuidado Capilar" 
      theme={{
        colors: {
          text: '#000000',
        }
      }}/>
      
      <Menu.Item icon={require('../assets/IMG/articulos.png')} onPress={() => {articulosHigiene()}} title="Articulos de Higiene"  
      theme={{
        colors: {
          text: '#000000',
        }
      }}/>
     
      <Menu.Item icon={require('../assets/IMG/personal.png')} onPress={() => {cuidadoPersonal()}} title="Cuidado Personal"  
      theme={{
        colors: {
          text: '#000000',
        }
      }}/>
    
    </View>
  
  )
}
const styles = StyleSheet.create({

  fondo: {
    backgroundColor: 'transparent',
    flex: 1,

  },

});

export default Categorias
