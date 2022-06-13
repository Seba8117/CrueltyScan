import React, { useState } from 'react'
import { TextInput, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../style/global';
import DropDownPicker from 'react-native-dropdown-picker';


const CrearCuenta = ({ navigation }) => {

  //Campos formulario
  const [rut, guardarRut] = useState('');
  const [id_comuna, guardarIdComuna] = useState(1);
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [apellidoMaterno, guardarApellidoMaterno] = useState('');
  const [email, guardarEmail] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [contraseña, guardarContraseña] = useState('');








  const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Conchali', value: 'Conchali' },
      { label: 'Renca', value: 'Renca' }
    ]);
    const [abrir, setAbrir] = useState(false);
    const [valor, setValor] = useState(null);
    const [item, setItem] = useState([
      { label: 'Metropolitana', value: 'Metropolitana' },
      { label: 'Los Lagos', value: 'LosLagos' }
    ]);



  //Almacena al usuario en la base de datos 
  const registrarseUsuario = async() => {
    

    //Validar
    if (rut === '' ||nombre === '' || apellido === '' || email === '' ||
      contraseña === '' || telefono === ''  || apellidoMaterno === '') {
      Alert.alert('Alerta', 'Hay campos vacios.', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "rut":rut,
        "id_comuna": id_comuna, 
        "nombre_cliente": nombre, 
        "apellido_pa": apellido, 
        "apellido_ma": apellidoMaterno, 
        "correo": email,
        "celular":telefono,
        "contra":contraseña

      })
    };
    let respuesta = ''
    try {
      respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/cliente", requestOptions)
    } catch (error) {
      Alert.alert('Alerta', 'Error en el sistema', [
        { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
      ])
      return;
    }

    if (respuesta.status === 200) {
        navigation.navigate('Login')
        Alert.alert('Alerta', 'Se registro usuario', [
          { text: 'Cerrar', onPress: () => console.log('se cerro la alerta') }
        ])
        return;
      }
    

  }




  return (
    <ScrollView>
      <View style={globalStyles.centro}>
        <Headline style={globalStyles.titulo}> Registro</Headline>

        <TextInput
          placeholder='Rut'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarRut(texto)}
          value={rut}

        />

        <TextInput
          placeholder='Nombre'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarNombre(texto)}
          value={nombre}

        />

        <TextInput
          onChangeText={texto => guardarApellido(texto)}
          value={apellido}
          style={styles.input}
          placeholder='Apellido Paterno'
          placeholderTextColor={'#666'}
        />
        <TextInput
          onChangeText={texto => guardarApellidoMaterno(texto)}
          value={apellidoMaterno}
          style={styles.input}
          placeholder='Apellido Materno'
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarEmail(texto)}
          value={email}
          style={styles.input}
          placeholder='Correo'
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarContraseña(texto)}
          value={contraseña}
          secureTextEntry
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor={'#666'}
        // right={<TextInput.Icon name="eye" />}
        />


        <TextInput
          onChangeText={texto => guardarTelefono(texto)}
          value={telefono}
          style={styles.input}
          placeholder='Telefono'
          placeholderTextColor={'#666'}

        />
        
        <DropDownPicker
          placeholder='Region'
          placeholderTextColor={'#666'}
          style={styles.input}
          open={abrir}
          value={valor}
          items={item}
          setValue={setValor}
          setItems={setItem}
          setOpen={setAbrir}
        />


        <DropDownPicker
          placeholder='Comuna'
          placeholderTextColor={'#666'}
          style={styles.input}
          open={open}
          value={value}
          items={items}
          setValue={setValue}
          setItems={setItems}
          setOpen={setOpen}
        />

        <Button color='#0F0E0E' style={styles.btnregistrarUsu} onPress={() => registrarseUsuario()}>
          Registrar
        </Button>

      </View>
    </ScrollView>


  )
}

const styles = StyleSheet.create({

  centro: {
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    // borderRadius: 20,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
    marginVertical: 15,
    marginRight: 60,
    marginLeft: 65,
    width: 280,
    height: 50,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,

  },


  btnregistrarUsu: {
    marginVertical: 14,
    backgroundColor: '#d9d7f1',
    paddingVertical: 5,
    marginHorizontal: 80,
    marginTop: 8,
    borderRadius: 5,
    fontSize: 24,
    borderColor: '#0F0E0E',
    borderWidth: 1
  }
})

export default CrearCuenta
