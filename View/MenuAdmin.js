import React from 'react'
import {Text,View, StyleSheet, Pressable, ScrollView, Image} from 'react-native'
import {Button, Card} from 'react-native-paper';
import icon from 'react-native-vector-icons'
import BuscarMarcaAdmin from './BuscarMarcaAdmin'

const MenuAdmin = ({ navigation }) => {

    const visitarRegistroMarca = () => {
        navigation.navigate('RegistroMarca')
    }
    const visitarEliminarMarcas = () => {
        navigation.navigate('EliminarMarcas')
    }
    const visitarListadoRescatados = () => {
        navigation.navigate('ListadoRescatados')
    }
    const visitarBuscarMarcaAdmin = () => {
        navigation.navigate('BuscarMarcaAdmin')
    }
    const visitarRegistroProducto = () => {
        navigation.navigate('RegistroProducto')
    }
    const visitarCerrarSesion = () => {
        navigation.navigate('Login')
    }
    
    


    return (
        <ScrollView >
            <View style={styles.centro}>
               <Image style={styles.logo}
                 source={require('../assets/IMG/Logo.png')}/>
               <Text style={styles.titulo}>Cruelty Scan</Text>
            </View>

            <View style={styles.fondo}>
                <Text style={styles.texto}>Bienvenido Administrador!</Text>
            </View>

            

            <View>

                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/nube.png')}/>
                    <Button style={styles.btnMa1} onPress={() => visitarBuscarMarcaAdmin()}>Encuentra una marca</Button> 
                </Card>
                </View>

                <View>
                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/registro-en-linea.png')}/>
                    <Button style={styles.btnMa2} onPress={() => visitarRegistroMarca()} >Registrar Marca</Button> 
                </Card>
                </View>

                <View>
                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/actualizar.png')}/>
                    <Button style={styles.btnMa3} onPress={() => visitarEliminarMarcas()}>Modificar Marca</Button> 
                </Card>
                </View>

                <View>
                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/registrado.png')}/>
                    <Button style={styles.btnMa4} onPress={() => visitarRegistroProducto()}>Registrar Productos</Button> 
                </Card>
                </View>

                <View>
                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/adopcion.png')}/>
                    <Button style={styles.btnMa5}  onPress={() => visitarListadoRescatados()}>Administrar Adopciones</Button> 
                </Card>
                </View>


                <View>
                <Card style={styles.fondo}>
                    <Image style={styles.foto} source={require('../assets/IMG/salir.png')}/>
                    <Button style={styles.btnMa6} onPress={() => visitarCerrarSesion()}>Cerrar Sesión</Button> 
                </Card>
                </View>

              <View>
            </View>
        </ScrollView>

    )


}

const styles = StyleSheet.create({
    logo: {
        height: 80,
        width: 80,
        marginTop: 5,
        marginHorizontal: 170
      },
    botoncerrar: {
        backgroundColor: '#D9D7F1',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
       
    },
    titulo: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        color: '#000000',
        fontWeight: '600',
    },
   
    texto: {
        color: '#000000',
        marginTop: 10,
        fontSize: 25,
        textAlign: 'center'
      

    },
    

    fondo: {
        backgroundColor: 'transparent',
        flex: 1,
        margin:1 ,
        height:60,
        width: 390,
        marginVertical: 5 ,
        paddingVertical: 10,
        marginHorizontal: 10
    
      },
    
      foto: {
        width: 45,
        height: 45,
        marginHorizontal:40
      },
    
      btnMa1:{
        marginTop: -45,
        left: 15
      },
    
      btnMa2:{
        marginTop: -45,
        left: -7
      },
    
      btnMa3:{
        marginTop: -45,
        left: -12
      },
    
      btnMa4:{
        marginTop: -45,
        left: 5
      },
    
      
      btnMa5:{
        marginTop: -45,
        left: 20
      },
    
      btnMa6:{
        marginTop: -45,
        left: -20
      },
    
    

})


export default MenuAdmin
