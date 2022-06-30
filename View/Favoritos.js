import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favoritos = ({ navigation }) => {
  
  const [datosFav, setDatosfav] = useState([])
  const [codBarra, setCodbarra] = useState('')

  const getData = () => {
      AsyncStorage.getItem('rut')
        .then((rut) => {
          setvalue(JSON.parse(rut))
        })

  } 
  const [rut, setvalue] = useState(null);
  getData();
  console.log(rut)
  console.log(codBarra)

  useEffect(() => {
    
    const llamarBdFav = async () => {
      
      const myHeadars = new Headers();
      const requestOptions = {
        method: 'GET',

      };
      let respuesta
      try {
        respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/producto-favorito/${rut}`, requestOptions)
      } catch (error) {
        Alert.alert('Alerta', 'Error en el sistema', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
      }
      if (respuesta.status === 200) {
        const body = await respuesta.json();
        setDatosfav(body)
      }
    }
    
    llamarBdFav()
  }, [rut])
  
  const eliminarFav = async () => {
    console.log("Click")
    const requestOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "cod_barra": codBarra,
        "rut": rut
      })
    };
    let respuesta = ''
    try {
      respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/producto-favorito", requestOptions)
    } catch (error) {
      Alert.alert('Alerta', 'Error en el sistema', [  
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

    if (respuesta.status === 200) {
      navigation.navigate('Inicio')
      Alert.alert('Alerta', 'Se eliminó un producto a favorito', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }



  }


  return (
    <ScrollView >
      <Text style={styles.textoFavorito}>Favoritos</Text>

      <Card>
        {datosFav.map((favorito, key) => {
          const { nom_producto, cod_barra} = favorito
          return <Card.Content style={styles.carta} key={key}>
            <Title style={styles.letras} >{nom_producto} </Title>
            <Title style={styles.letras} >{cod_barra} </Title>
            <Paragraph style={styles.letras}>Paleta de sombras 9 colores</Paragraph>
            <Image style={styles.foto} source={require('../assets/IMG/maquillaje9colores.png')} />
            <View style={styles.centro}>

              <Button onPress={() =>{eliminarFav(); setCodbarra(cod_barra)}}
                style={styles.btnEliminar} color='#0F0E0E' icon={require('../assets/IMG/tarro.png')}
              >Eliminar</Button>

            </View>

          </Card.Content>
        })}
      </Card>
    </ScrollView>



  )
}
const styles = StyleSheet.create({
  textoFavorito: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
    color: '#0F0E0E'

  },

  centro: {
    textAlign: 'center',
    alignItems: 'center'
  },
  foto: {
    height: 190,
    width: 190,
    marginTop: 30,
    marginHorizontal: 90,
    marginVertical: 20
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
