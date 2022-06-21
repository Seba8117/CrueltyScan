import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { TextInput, Headline, Button,  Card, Portal, Menu, Searchbar } from 'react-native-paper';
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

<ScrollView>
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
    </View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/codigo.png')}/>
    <Button style={styles.btnMa} onPress={() => { escanner() }}>Escanear Codigo</Button> 
  </Card>
</View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/adopción.png')}/>
    <Button style={styles.btnMa} onPress={() => { adop() }}>Adopción</Button> 
  </Card>
</View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/opciones.png')}/>
    <Button style={styles.btnMa} onPress={() => { categ() }}>Categorias</Button> 
  </Card>
</View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/star.png')}/>
    <Button style={styles.btnMa} onPress={() => { favoritousu() }}>Favoritos</Button> 
  </Card>
</View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/micuenta.png')}/>
    <Button style={styles.btnMa} onPress={() => { editarCuenta() }}>Mi Cuenta</Button> 
  </Card>
</View>

<View>
  <Card style={styles.fondo}>
    <Image style={styles.foto} source={require('../assets/IMG/salir.png')}/>
    <Button style={styles.btnMa} onPress={() => { Salir() }}>Cerrar Sesión</Button> 
  </Card>
</View>

<View>



</View>

</ScrollView>

  );

}

const styles = StyleSheet.create({

  fondo: {
    backgroundColor: 'transparent',
    flex: 1,
    margin: 2,
    height:70,
    width: 390,
    marginVertical: 5 ,
    paddingVertical: 10,
    marginHorizontal: 10

  },

  searchbar:{
    marginTop:10,
    marginVertical:20,
    marginHorizontal:10

  },

  texto1:{
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
    color: '#0F0E0E',
    padding: -20
  },

  foto: {
    width: 50,
    height: 50,
    marginHorizontal:10
  },

  btnMa:{
    marginTop: -45,
    left: -20
  }




});

export default Inicio
