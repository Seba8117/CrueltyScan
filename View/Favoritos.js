import React, {useState} from 'react'
import {Image, View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card} from 'react-native-paper';
import globalStyles from '../style/global';


const Favoritos = ({navigation}) => {
  const eliminarFav = () => {
    Alert.alert('Alerta', 'Se ha eliminado el producto de favoritos', [
      { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
    ])
    navigation.navigate('Inicio')
  }
  return (
    <ScrollView >
    
    <View>
      <Text style={styles.textoFavorito}>Favoritos</Text>
    </View>
      

    <Card>
      <Card.Content style={styles.carta} >
        <Title style={styles.letras} >Paleta Maquillaje Mac</Title>
        <Paragraph style={styles.letras}>Paleta de sombras 9 colores</Paragraph>
        <Image style={styles.foto} source={require('../assets/IMG/maquillaje9colores.png')} />
        <View style={styles.centro}>
        
        <Button onPress={() => eliminarFav()}
          style={styles.btnEliminar} color='#0F0E0E' icon={require('../assets/IMG/tarro.png')}
        >Eliminar</Button>
        
        </View>

      </Card.Content>
    </Card>
    </ScrollView> 
  
    

  )
}
const styles = StyleSheet.create({

  textoFavorito:{
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
    color: '#0F0E0E'

  },

  centro:{
    textAlign:'center',
    alignItems:'center'
  },
  
  foto: {
    height: 190,
    width: 190,
    marginTop: 30,
    marginHorizontal: 90,
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
  btnEliminar: {
    marginVertical: 14,
    backgroundColor: '#FF3939',
    marginTop: 10,
    borderRadius: 5,
    fontSize: 24,
    borderColor: '#0F0E0E',
    borderWidth: 1,
    width: 160,
    height: 40,

  },
 


})

export default Favoritos
