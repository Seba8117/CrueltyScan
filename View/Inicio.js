import React, { useState } from 'react'
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu, Searchbar,Card,Title } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';

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

  // const admin = () => {
  //   navigation.navigate('MenuAdmin')
  // }

  return (

    <ScrollView>
      <View>
        <View>
          <Paragraph style={styles.texto}>Marcas no testeadas en animales </Paragraph>
        </View>

        <View >
          <Card>
            <Card.Content>
              <Title>BioGar</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG. BioGar es una empresa de productos de limpieza,
                en donde encontraras diversidades de productos de detergentes.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.instagram.com/biogarchile/</Paragraph>
            </Card.Content>
            <Image style={styles.MarcaBiogar} source={require('../assets/IMG/Biogar.jpg')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>CityColor</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                CityColor es una empresa de productos de belleza, en donde
                encontraras diversidadesde productos.
                Si queires conocer más de esta marca y sus productos ingresa en el
                siguiente link: https://citycolorcosmetics.com
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaCity} source={require('../assets/IMG/CityColor.png')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Cuccio</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Cuccio es una empresa de productos de belleza, en donde
                encontraras diversidadesde productos.
                Si queires conocer más de esta marca y sus productos ingresa en el
                siguiente link: https://www.facebook.com/cucciochile/
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaCuccio} source={require('../assets/IMG/Cuccio.jpeg')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Dove</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Dove es una empresa de productos de cuidado personal, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.dove.com/cl/home.html
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaDove} source={require('../assets/IMG/DOVE.jpg')} />
          </Card>

          {/* <Card>
            <Card.Content>
              <Title>Garnier</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Garnier es una empresa de productos de cuidado capilar y piel, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.garnier.cl/
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaGarnier} source={require('../assets/IMG/Garnier.png')} />
          </Card> */}

          <Card>
            <Card.Content>
              <Title>Gosh</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Gosh es una empresa de productos de belleza, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://goshcopenhagen.com/
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaGosh} source={require('../assets/IMG/Gosh.jpg')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Hask</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Hask es una empresa de cuidado capilar, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://hask.cl/
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaHask} source={require('../assets/IMG/Hask.png')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Natura</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Natura es una empresa de productos de belleza y cuidado personal, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.natura.cl/
              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaNatura} source={require('../assets/IMG/Natura.jpg')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Orlane</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Orlane es una empresa de cuidado personal, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.orlane.com/

              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaOrlane} source={require('../assets/IMG/Orlane.jpg')} />
          </Card>

          <Card>
            <Card.Content>
              <Title>Sedal</Title>
              <Paragraph>Marca libre de testeo animal, recomendada por la ONG.
                Sedal es una empresa de cuidado capilar, en donde
                cuenta con diversos productos para el uso diario de cada persona.
                Si quieres conocer más sobre esta marca y sus productos ingresa en el
                siguiente link: https://www.sedal.cl/home.html

              </Paragraph>
            </Card.Content>
            <Image style={styles.MarcaSedal} source={require('../assets/IMG/Sedal.png')} />
          </Card>

        </View>
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  texto: {
    fontWeight: 'bold',
    color: '#0F0E0E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    fontSize: 20

  },

  MarcaBiogar: {

    height: 190,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaCity: {

    height: 190,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaCuccio: {

    height: 50,
    width: 225,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaDove: {

    height: 190,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaGarnier: {

    height: 50,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },


  MarcaGosh: {

    height: 190,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaHask: {

    height: 50,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaNatura: {

    height: 190,
    width: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaOrlane: {

    height: 70,
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  MarcaSedal: {

    height: 180,
    width: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
  },



})
export default Inicio
