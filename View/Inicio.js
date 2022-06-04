import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';
import Buscamarca from './Buscamarca';

const Inicio = ({ navigation }) => {

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
  const Buscamarca = () => {
    navigation.navigate('Buscamarca')
  }
  const Salir = () => {
    navigation.navigate('Login')
  }



  return (

    <View style={styles.fondo}>
      <View style={styles.searchbar}>
        <Searchbar
          onPress={() => Buscamarca()}
          placeholder="Buscar Marca"
          backgroundColor="transparent"
          theme={{
            colors: {
              text: '#FFF',
              backgroundColor:'transparent'
            }
          }}

        />

      </View>

      <View style={{ flex: 1 }}>
        <Menu.Item icon={require('../assets/IMG/codigo.png')} onPress={() => { escanner() }} title="Escanear Codigo"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />





        <Menu.Item icon={require('../assets/IMG/adopción.png')} onPress={() => { adop() }} title="Adopcion"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />



        <Menu.Item icon={require('../assets/IMG/opciones.png')} onPress={() => { categ() }} title="Categorias"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />
        <Menu.Item icon={require('../assets/IMG/star.png')} onPress={() => { favoritousu() }} title="Favoritos"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />
        <Menu.Item icon={require('../assets/IMG/micuenta.png')} onPress={() => { editarCuenta() }} title="Mi Cuenta"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />
        <Menu.Item icon={require('../assets/IMG/salir.png')} onPress={() => { Salir() }} title="Cerrar sesión"
          theme={{
            colors: {
              text: '#000000',
            }
          }} />

      </View>
    </View>

  );

}

const styles = StyleSheet.create({

  fondo: {
    backgroundColor: 'transparent',
    flex: 1,

  },
  searchbar:{
    marginTop:10,
    marginVertical:20,
    marginHorizontal:10

  },




});

export default Inicio
