import React from 'react'
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {Menu, Avatar, Card, Button} from 'react-native-paper';
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
<ScrollView>

      <View>
       <Text style={styles.texto1}>Menú</Text>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/maquillaje.png')}/>
          <Button style={styles.btnMa} onPress={() => {maquillajeyBelleza()}}>Maquillaje y Belleza</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/cepillo.png')}/>
          <Button style={styles.btnMa} onPress={() => {cuidadoCapilar()}}>Cuidado Capilar</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/articulos.png')}/>
          <Button style={styles.btnMa} onPress={() => {articulosHigiene()}}>Articulos de Higiene</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/personal.png')}/>
          <Button style={styles.btnMa} onPress={() => {cuidadoPersonal()}}>Cuidado Personal</Button> 
        </Card>
      </View>

      <View>



</View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({

  fondo: {
    backgroundColor: 'transparent',
    flex: 1,
    margin: 2,
    height:120,
    width: 403,
    marginVertical: 5 ,
    paddingVertical: 10,
    marginHorizontal: 10

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
    width: 100,
    height: 100,
    marginHorizontal:10
  },

  btnMa:{
    marginTop: -45,
    right: -50
  }

});

export default Categorias
