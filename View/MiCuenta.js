import React, {useState} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';
import {TextInput, Headline, Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import globalStyles from '../style/global';

const MiCuenta = () => {
  
    //Campos formulario
    const [nombre, guardarNombre] = useState('');
    const [apellido, guardarApellido] = useState('');
    const [email, guardarEmail] = useState('');
    const [contraseña, guardarContraseña] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [direccion, guardarDireccion] = useState('');
    const [region,  guardarRegión] = useState('');
    const [comuna,  guardarComuna] = useState('');
   // const [alerta, guardarAlerta] = useState('false');
   
    
  
    //Almacena al usuario en la base de datos 
    const editarCuenta = () => {
      //Validar
      if(nombre === '' || apellido === '' || email === '' ||
         contraseña === '' || telefono === '' || direccion === ''
         || region === ''  || comuna === ''){
          //  guardarAlerta(true)
            return;
         }
  
      //Generar Registro 
      const registro = {nombre, apellido, email, contraseña, telefono, direccion, region, comuna};
  
      //Guardar Usuario
  
      //Redireccionar
  
      //Limpiar form 
  
     
    }
    
     
  
    
    return (
    <ScrollView>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}> Mis Datos</Headline>
  
        <TextInput
           label="Nombre"
           onChangeText={texto => guardarNombre(texto)}
           value={nombre}
           style={styles.input}
           
        />
  
        <TextInput
           label="Apellido"
           onChangeText={texto => guardarApellido(texto)}
           value={apellido}
           style={styles.input}
        />
  
        <TextInput
           label="Email"
           onChangeText={texto => guardarEmail(texto)}
           value={email}
           style={styles.input}
        />
        
        <TextInput
           label="Contraseña"
           onChangeText={texto => guardarContraseña(texto)}
           value={contraseña}
           secureTextEntry
           style={styles.input}
           right={<TextInput.Icon name="eye" />}
        />
        
      
      <TextInput
           label="Teléfono"
           onChangeText={texto => guardarTelefono(texto)}
           value={telefono}
           style={styles.input}
        />
      
      <TextInput
           label="Dirección"
           onChangeText={texto => guardarDireccion(texto)}
           value={direccion}
           style={styles.input}
        />
  
       <TextInput
           label="Región"
           onChangeText={texto => guardarRegión(texto)}
           value={region}
           style={styles.input}
        />
  
        
       <TextInput
           label="Comuna"
           onChangeText={texto => guardarComuna(texto)}
           value={comuna}
           style={styles.input}
        />
  
     
  
  
  
        <Button color='#0F0E0E' style={styles.btneditarMiCuenta}  onPress={() => editarCuenta()}>
          Modificar
        </Button>
     
       
     
     
        
      
      </View>
      </ScrollView>  
  
    
    )
  }
  
  const styles = StyleSheet.create({
    input:{
      marginBottom: 20,
      backgroundColor: 'transparent',
      color: '#0F0E0E'
    },
  
    btneditarMiCuenta:{
      marginVertical: 14,
      backgroundColor: '#d9d7f1',
      paddingVertical: 5,
      marginHorizontal: 80,
      marginTop:8,
      borderRadius: 5,
      fontSize: 24, 
      borderColor: '#0F0E0E',
      borderWidth: 1
    }
  })
  
  export default MiCuenta
  