import React, {useState} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import globalStyles from '../style/global';


const Favoritos = (navigate) => {
  return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}> Productos Favoritos</Headline>
        </View>
      </ScrollView>  
  
    

  )
}

export default Favoritos
