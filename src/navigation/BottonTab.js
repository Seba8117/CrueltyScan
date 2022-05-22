import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Inicio from '../../View/Inicio';
import MiCuenta from '../../View/MiCuenta';
import Favoritos from '../../View/Favoritos';
import Adopcion from '../../View/Adopcion';
import EscanearCodigo from '../../View/EscanearCodigo';
import Categorias from '../../View/Categorias';
import Icon from 'react-native-vector-icons/Ionicons';


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
                        case 'Inicio':
                            // iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'MiCuenta':
                            // iconName = focused ? 'person-circle' : 'person-circle-outline';
                            break;
                        case 'Favoritos':
                            // iconName = focused ? 'star' : 'star-outline';
                            break;
                        case 'Adopcion':
                            // iconName = focused ? 'heart' : 'heart-circle-outline';
                            break;
                        case 'EscanearCodigo':
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


            <Tab.Screen name='Inicio' component={Inicio} />
            <Tab.Screen name='Mi Cuenta' component={MiCuenta} />
            <Tab.Screen name='Favoritos' component={Favoritos} />
            <Tab.Screen name='Adopcion' component={Adopcion} />
            <Tab.Screen name='Escanear Codigo' component={EscanearCodigo} />
            <Tab.Screen name='Categorias' component={Categorias} />


        </Tab.Navigator>
    )
}
