import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, ScrollView, Text, Pressable, Alert } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Title, Menu, Card } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Maquillaje = ({ navigation }) => {
  const [datosMaquillaje, setdatosMaquillaje] = useState([])
  const [rut, setvalue] = useState('');
  const [cod_barra, setCodbarra] = useState('');
  const getData = () => {
    AsyncStorage.getItem('rut')
      .then((rut) => {
        setvalue(JSON.parse(rut))
      })
  }

  const agregarFav = async () => {

    console.log("Click")
    console.log(rut)

    console.log(cod_barra)
    getData();
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "cod_barra": cod_barra,
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
      Alert.alert('Alerta', 'Se añadio un producto a favorito', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }



  }
  
  useEffect(() => {
    const llamarBdMaquillaje = async () => {
      const requestOptions = {
        method: 'GET',
       
      };
      let respuesta
      try {
        respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/buscar/productos/idcategoria/1", requestOptions)
      } catch (error) {
        Alert.alert('Alerta', 'Error en el sistema', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
      }
      if (respuesta.status === 200) {
        const body = await respuesta.json();
        setdatosMaquillaje(body)
      }
    }

    llamarBdMaquillaje()
  }, [])


  return (
    <ScrollView >
      <View>
        <Text style={styles.textoMaquillaje}>Maquillaje</Text>
      </View>



      <Card>
        {datosMaquillaje.map((maquillaje, key) => {
          const { nom_producto,nom_marca,cod_barra } = maquillaje

          return  <Card.Content style={styles.carta} key={key}>
            <Title style={styles.letras} > {nom_producto} </Title>
            <Paragraph style={styles.letras}> {cod_barra} </Paragraph>
            <Paragraph style={styles.letras}> {nom_marca} </Paragraph>
            <Image style={styles.foto} source={require('../assets/IMG/MascaraPestaña_catrice.jpg')} />

            <Button onPress={() => { agregarFav(); setCodbarra(cod_barra) }}
              style={styles.btnAgregar} color='#F1C40F' icon={require('../assets/IMG/star.png')}
            > Agregar a favoritos</Button>

          </Card.Content>

        })}
      </Card>
    </ScrollView>



  )
}

const styles = StyleSheet.create({
  textoMaquillaje: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
    color: '#0F0E0E'

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

  btnAgregar: {
    marginHorizontal: 30,
    marginVertical: 10
  },



})
export default Maquillaje
