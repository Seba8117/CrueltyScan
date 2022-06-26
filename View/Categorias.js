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
          <Button style={styles.btnMa1} onPress={() => {maquillajeyBelleza()}}>Maquillaje y Belleza</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/cepillo.png')}/>
          <Button style={styles.btnMa2} onPress={() => {cuidadoCapilar()}}>Cuidado Capilar</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/articulos.png')}/>
          <Button style={styles.btnMa3} onPress={() => {articulosHigiene()}}>Articulos de Higiene</Button> 
        </Card>
      </View>

      <View>
        <Card style={styles.fondo}>
          <Image style={styles.foto} source={require('../assets/IMG/personal.png')}/>
          <Button style={styles.btnMa4} onPress={() => {cuidadoPersonal()}}>Cuidado Personal</Button> 
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
    width: 390,
    marginVertical: 5 ,
    paddingVertical: 10,
    marginHorizontal: 10

  },

  texto1:{
    textAlign: 'center',
    marginTop: 25, 
    fontSize: 30,
    color: '#0F0E0E',
    padding: -30
  },

  foto: {
    width: 100,
    height: 100,
    marginHorizontal:20
  },

  btnMa1:{
    marginTop: -60,
    right: -50
  },

  btnMa2:{
    marginTop: -60,
    right: -30
  },

  btnMa3:{
    marginTop: -60,
    right: -48
  },

  btnMa4:{
    marginTop: -60,
    right: -38
  },

});

export default Categorias
