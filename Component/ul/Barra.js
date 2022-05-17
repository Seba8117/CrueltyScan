import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {Button} from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {

  const handlePress = () => {
    navigation.navigate("Login")
  }

  return (
    <Button icon="plus-circle" color="#0F030E" onPress={() => handlePress()}>
      Devolver     
    </Button>
  )
}

export default BarraSuperior
