import React, {useState} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu,Searchbar} from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';

const Inicio = ({navigation}) => {

  const editarCuenta = () => {
    navigation.navigate('MiCuenta')
  }

  const favoritousu = () => {
    navigation.navigate('Favoritos')
  }

  const adop = () => {
    navigation.navigate('MenuAdopcion')
  }

  const escanner = () => {
    navigation.navigate('EscanearCodigo')
  }

  const categ = () => {
    navigation.navigate('Categorias')
  }

  // const admin = () => {
  //   navigation.navigate('MenuAdmin')
  // }
  
  return (
    
  <View style={styles.fondo}>
    <View>
      <Searchbar
        placeholder="Buscar Marca"
      />
      
    </View>

    <View style={{ flex: 1 }}>
      <Menu.Item icon={require('../assets/IMG/micuenta.png')} onPress={() => {editarCuenta()}} title="Mi Cuenta" />
      <Menu.Item icon={require('../assets/IMG/star.png')} onPress={() => {favoritousu()}} title="Favoritos" />
      <Menu.Item icon={require('../assets/IMG/adopción.png')} onPress={() => {adop()}} title="Adopcion"  />
      <Menu.Item icon={require('../assets/IMG/codigo.png')} onPress={() => {escanner()}} title="Escanear Codigo"  />
      <Menu.Item icon={require('../assets/IMG/opciones.png')} onPress={() => {categ()}} title="Categorias" />
      {/* <Menu.Item icon={require('../assets/IMG/clave.png')} onPress={() => {admin()}} title="Administrador" /> */}
    </View>
  </View>




);
  
}
const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#ffff',
    flex:1

  },

 
})
export default Inicio
