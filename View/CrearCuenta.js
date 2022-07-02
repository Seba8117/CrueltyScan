import React, { useState, useEffect } from 'react'
import { TextInput, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../style/global';
import DropDownPicker from 'react-native-dropdown-picker';


const CrearCuenta = ({ navigation }) => {
  //Campos formulario
  const [rut, guardarRut] = useState('');
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [apellidoMaterno, guardarApellidoMaterno] = useState('');
  const [email, guardarEmail] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [contraseña, guardarContraseña] = useState('');


  const [abrirRegiones, setAbrirRegiones] = useState(false);
  const [abrirComunas, setAbrirComunas] = useState(false);
  const [regiones, setRegiones] = useState([])
  const [valorRegionSelect, setValorRegionSelect] = useState()
  const [comunas, setComunas] = useState([])
  const [valorComunaSelect, setValorComunaSelect] = useState()

  useEffect(() => {
    const llamarApiRegion = async () => {
      var requestOptions = {
        method: 'GET',
      };

      const respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/regiones", requestOptions)
      if (respuesta.status === 200) {
        let apiRegiones = []
        const body = await respuesta.json();
        body.forEach(region => {
          apiRegiones.push({
            label: region.nom_region,
            value: region.id_region
          })
        })
        setRegiones(apiRegiones)
      }

    }

    llamarApiRegion()
  }, [])

  useEffect(() => {
    const llamarApiComuna = async () => {
      var requestOptions = {
        method: 'GET',
      };

      const respuesta = await fetch(`https://crueltyscan.azurewebsites.net/api/comunas/${valorRegionSelect}`, requestOptions)
      if (respuesta.status === 200) {
        let apiComunas = []
        const body = await respuesta.json();
        body.forEach(region => {
          apiComunas.push({
            label: region.nom_comuna,
            value: region.id_comuna
          })
        })
        setComunas(apiComunas)
      }

    }
    if (valorRegionSelect) {
      llamarApiComuna()
    }
  }, [valorRegionSelect])


  //Almacena al usuario en la base de datos 
  const registrarseUsuario = async () => {
    //Validar
    if (rut === '' || nombre === '' || apellido === '' || email === '' ||
      contraseña === '' || telefono === '' || apellidoMaterno === '') {
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
        "rut": rut,
        "id_comuna": valorComunaSelect,
        "nombre_cliente": nombre,
        "apellido_pa": apellido,
        "apellido_ma": apellidoMaterno,
        "correo": email,
        "celular": telefono,
        "contra": contraseña
      })
    };
    let respuesta = ''
    console.log(valorComunaSelect)
    console.log(requestOptions)
    try {
      respuesta = await fetch("https://crueltyscan.azurewebsites.net/api/cliente", requestOptions)
      console.log(respuesta)
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
          maxLength={10}
          value={rut}

        />

        <TextInput
          placeholder='Nombre'
          placeholderTextColor={'#666'}
          style={styles.input}
          onChangeText={texto => guardarNombre(texto)}
          maxLength={30}
          value={nombre}
        />

        <TextInput
          onChangeText={texto => guardarApellido(texto)}
          value={apellido}
          style={styles.input}
          placeholder='Apellido Paterno'
          maxLength={30}
          placeholderTextColor={'#666'}
        />
        <TextInput
          onChangeText={texto => guardarApellidoMaterno(texto)}
          value={apellidoMaterno}
          style={styles.input}
          placeholder='Apellido Materno'
          maxLength={30}
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarEmail(texto)}
          value={email}
          style={styles.input}
          placeholder='Correo'
          maxLength={45}
          placeholderTextColor={'#666'}
        />

        <TextInput
          onChangeText={texto => guardarContraseña(texto)}
          value={contraseña}
          secureTextEntry
          style={styles.input}
          placeholder='Contraseña'
          maxLength={15}
          placeholderTextColor={'#666'}
        // right={<TextInput.Icon name="eye" />}
        />


        <TextInput
          onChangeText={texto => guardarTelefono(texto)}
          value={telefono}
          style={styles.input}
          placeholder='Telefono'
          maxLength={9}
          placeholderTextColor={'#666'}
        />

        <DropDownPicker
          open={abrirRegiones}
          value={valorRegionSelect}
          items={regiones}
          setOpen={setAbrirRegiones}
          setValue={setValorRegionSelect}
          placeholder='Region'
          placeholderTextColor={'#666'}
          style={styles.input}
          closeAfterSelecting={true}
          closeOnBackPressed={true}
          itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "#caca"
          }}
          listMode="SCROLLVIEW"
          modalProps={{
            animationType: "fade"
          }}
        />

        <DropDownPicker
          open={abrirComunas}
          value={valorComunaSelect}
          items={comunas}
          setOpen={setAbrirComunas}
          setValue={setValorComunaSelect}
          placeholder='Comuna'
          placeholderTextColor={'#666'}
          style={styles.input}
          closeAfterSelecting={true}
          closeOnBackPressed={true}
          itemSeparator={true}
          selectedItemContainerStyle={{
            backgroundColor: "#caca"
          }}
          listMode="SCROLLVIEW"
          modalProps={{
            animationType: "fade"
          }}
          disabled={comunas.length > 0 ? false : true}
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
