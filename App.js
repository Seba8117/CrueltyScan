import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Button,
  useColorScheme,
  SafeAreaView
} from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

//Importar Componentes
import Login from './View/Login';
import CrearCuenta from './View/CrearCuenta';
import RecupContr from './View/RecupContr';
import Inicio from './View/Inicio';
import BarraSuperior from './Component/ul/Barra';
import MiCuenta from './View/MiCuenta';
import Favoritos from './View/Favoritos';
import Adopcion from './View/Adopcion';
import EscanearCodigo from './View/EscanearCodigo';
import ResultadoScan from './View/ResultadoScan';
import Categorias from './View/Categorias';
import MenuAdmin from './View/MenuAdmin';
import Maquillaje from './View/Maquillaje';
import CuidadoCapilar from './View/CuidadoCapilar';
import ArticulosHigiene from './View/ArticulosHigiene';
import CuidadoPersonal from './View/CuidadoPersonal';
import RegistroRescatado from './View/RegistroRescatado';
import MenuAdopcion from './View/MenuAdopcion';
import RegistroMarca from './View/RegistroMarca';
import EliminarMarcas from './View/EliminarMarcas';
import ListadoRescatados from './View/ListadoRescatados';
import ModificarRescatado from './View/ModificarRescatado';
import BuscarMarcaAdmin from './View/BuscarMarcaAdmin';
import RegistroProducto from './View/RegistroProducto';
import EliminarProductos from './View/EliminarProductos';
import Buscamarca from './View/Buscamarca';





//Crear Modo Stack

const Stack = createStackNavigator();

const App = () => {


  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          
          <Stack.Navigator
            initialRouteName='CuidadoPersonal' //Cambiar pagina 
          >
            <Stack.Screen
              name="Buscamarca"
              component={Buscamarca}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                padding: 50,
                headerStyle: {
                  backgroundColor: '#c1f4c5'

                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}



            />
            <Stack.Screen
              name="EliminarProductos"
              component={EliminarProductos}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                padding: 50,
                headerStyle: {
                  backgroundColor: '#c1f4c5'

                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}



            />


            <Stack.Screen
              name="RegistroProducto"
              component={RegistroProducto}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen
              name="BuscarMarcaAdmin"
              component={BuscarMarcaAdmin}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />

            <Stack.Screen
              name="CrearCuenta"
              component={CrearCuenta}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                padding: 50,
                headerStyle: {
                  backgroundColor: '#c1f4c5'

                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}



            />

            <Stack.Screen
              name="RecupContr"
              component={RecupContr}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />


            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />


            <Stack.Screen
              name="MiCuenta"
              component={MiCuenta}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="Favoritos"
              component={Favoritos}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="Adopcion"
              component={Adopcion}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="EscanearCodigo"
              component={EscanearCodigo}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />


            <Stack.Screen
              name="ResultadoScan"
              component={ResultadoScan}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />







            <Stack.Screen
              name="Categorias"
              component={Categorias}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="MenuAdmin"
              component={MenuAdmin}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />


            <Stack.Screen
              name="Maquillaje"
              component={Maquillaje}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="CuidadoCapilar"
              component={CuidadoCapilar}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />
            <Stack.Screen
              name="ArticulosHigiene"
              component={ArticulosHigiene}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />


            <Stack.Screen
              name="CuidadoPersonal"
              component={CuidadoPersonal}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="RegistroRescatado"
              component={RegistroRescatado}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}



            />

            <Stack.Screen
              name="MenuAdopcion"
              component={MenuAdopcion}
              options={{
                title: 'Crueltly Scan',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="RegistroMarca"
              component={RegistroMarca}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />


            <Stack.Screen
              name="EliminarMarcas"
              component={EliminarMarcas}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="ListadoRescatados"
              component={ListadoRescatados}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="ModificarRescatado"
              component={ModificarRescatado}
              options={{
                title: 'Admin',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#c1f4c5'
                },
                headerTintColor: '#0F0E0E',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
