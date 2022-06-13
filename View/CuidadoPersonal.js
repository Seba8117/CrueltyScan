import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import globalStyles from '../style/global';



const CuidadoPersonal = () => {
  return (
    <View>
      <Text style={styles.textoCuidadoPersonal}>Cuidado Personal</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  textoCuidadoPersonal: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 30,
    color: '#0F0E0E'

  }

})

export default CuidadoPersonal
