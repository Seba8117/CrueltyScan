import React from 'react'
import { Modal, Text, Button, View, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView } from 'react-native'
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
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Cruelty Scan</Text>
                <Text style={styles.texto}>Bienvenido administrador!</Text>
                <Pressable style={styles.boton}   onPress={() => visitarBuscarMarcaAdmin()} >
                    <Text style={styles.textoboton} >Encuentra una marca</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => visitarRegistroMarca()} style={styles.boton2}>
                    <Text style={styles.textoboton2} >Registrar Marca</Text>
                </Pressable>
            
                <Pressable style={styles.boton2} onPress={() => visitarEliminarMarcas()}>
                    <Text style={styles.textoboton2}  >Eliminar Marcas</Text>
                </Pressable>
                
                <Pressable style={styles.boton2} onPress={() => visitarRegistroProducto()}>
                    <Text style={styles.textoboton2}  > Registrar Productos</Text>
                </Pressable>
               

                <Pressable style={styles.boton2} onPress={() => visitarListadoRescatados()} >
                    <Text style={styles.textoboton2} >Administrar Adopciones</Text>
                </Pressable>
                
                <Pressable  style={styles.botoncerrar} onPress={() => visitarCerrarSesion()}>
                    <Text  style={styles.textoboton2} >Cerrar sesión</Text>
                </Pressable>
                

                
            </View>

        </ScrollView>







    )


}

const styles = StyleSheet.create({
    botoncerrar: {
        backgroundColor: '#D9D7F1',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
       




    },
    titulo: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        fontWeight: '600',
    },
    fondo: {
        backgroundColor: '#cee5d0',


    },
    texto: {
        color: '#000000',
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center'

    },
    letras: {
        color: '#000000',
        marginTop: 10,
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 20


    },
    formulario: {
        backgroundColor: '#D9D9D8',
        marginTop: 20,
        marginHorizontal: 40,

    },
    input: {
        backgroundColor: '#FFF',
        // borderRadius: 20,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 20



    },
    boton: {
        backgroundColor: '#D9D7F1',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 20,
        borderColor: '#000000',




    },
    textoboton: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'
        fontWeight: '600'
    },

    boton2: {
        backgroundColor: '#E1E1DF',
        padding: 15,
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',




    },
    textoboton2: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 18,
        //textTransform:'uppercase',
        //fontWeight:'900'

    },

})


export default MenuAdmin
