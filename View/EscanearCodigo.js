import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal, Menu, Searchbar } from 'react-native-paper';
import { AdornmentSide } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/enums';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

import globalStyles from '../style/global';

const EscanearCodigo = ({ navigation }) => {

  onBarCodeRead = (scanResult) => {
    navigation.navigate('ResultadoScan', {
      barcode: scanResult.data
    })
  }

  return (
    <View style={styles.container}>
      <RNCamera
        style={{ flex: 1, alignItems: 'center' }}
        onBarCodeRead={onBarCodeRead}
      >
        <BarcodeMask
          width={300} height={300} showAnimatedLine={false} outerMaskOpacity={0.8}
        />
      </RNCamera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})



export default EscanearCodigo
