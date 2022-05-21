import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../../../../View/Inicio';
import ProfileScreen from '../../../../View/MiCuenta';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../../../../View/Favoritos';
import AdopcionScreen from '../../../../View/Adopcion';
import EscanearScreen from '../../../../View/EscanearCodigo';
import CategoriasScreen from '../../../../View/Categorias'


const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) =>
            ({
                //tabBarActiveTintColor: 'red',
                //tabBarActiveBackgroundColor: 'grey',
                //tabBarInactiveBackgroundColor: 'orange',
                tabBarIcon: ({ focused, size }) => {

                    let iconName = ' ';
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Mi Cuenta':
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                            break;
                        case 'Favoritos':
                            iconName = focused ? 'star' : 'star-outline';
                            break;
                        case 'Adopcion':
                            iconName = focused ? 'heart' : 'heart-circle-outline';
                            break;
                        case 'Codigo Barras':
                            iconName = focused ? 'barcode' : 'barcode-outline';
                            break;
                        case 'Categorias':
                            iconName = focused ? 'grid' : 'grid-outline';
                            break;


                    }
                    return <Icon name={iconName} color={'#F32424'} size={size} />
                }

            })


            }
        >


            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Mi Cuenta' component={ProfileScreen} />
            <Tab.Screen name='Favoritos' component={SettingScreen} />
            <Tab.Screen name='Adopcion' component={AdopcionScreen} />
            <Tab.Screen name='Codigo Barras' component={EscanearScreen} />
            <Tab.Screen name='Categorias' component={CategoriasScreen} />


        </Tab.Navigator>
    )
}
