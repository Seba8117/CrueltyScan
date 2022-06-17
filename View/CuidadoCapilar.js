import React, { useState,useEffect } from 'react'
import { View, StyleSheet, ScrollView,Image, Text } from 'react-native';
import { TextInput, Headline,Card,Title, Button, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';


const CuidadoCapilar = () => {
  const [datosCuidado, setdatosCuidado] = useState([])
  
  useEffect(() => {
    const llamarBdCuidado = async () => {
      const requestOptions = {
        method: 'GET',
       
      };
      let respuesta
      try {
        respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/buscar/productos/idcategoria/2", requestOptions)
      } catch (error) {
        Alert.alert('Alerta', 'Error en el sistema', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
      }
      if (respuesta.status === 200) {
        const body = await respuesta.json();
        setdatosCuidado(body)
      }
    }

    llamarBdCuidado()
  }, [])



  const agregarFav = () => {
    Alert.alert('Alerta', 'Se agregó el producto a favoritos', [
      { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
    ])
  }
  return (
    <ScrollView >
      <View>
        <Text style={styles.textoMaquillaje}>Cuidado Capilar</Text>
      </View>



      <Card>
        {datosCuidado.map((cuidado, key) => {
          const { nom_producto,nom_marca } = cuidado

          return  <Card.Content style={styles.carta} key={key}>
            <Title style={styles.letras} > {nom_producto} </Title>
            <Paragraph style={styles.letras}> {nom_marca} </Paragraph>
            <Image style={styles.foto} source={require('../assets/IMG/maquillaje9colores.png')} />

            <Button onPress={() => agregarFav()}
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
export default CuidadoCapilar