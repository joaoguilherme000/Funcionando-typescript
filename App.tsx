import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import * as Location from 'expo-location';
import { getDatabase, ref, set } from 'firebase/database';

import Home from "./src/view/home";
import Result from "./src/view/result";

function localizacao(){
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const locationResult = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = locationResult.coords;

          // Enviar dados para o Firebase Realtime Database
          const database = getDatabase();
          const localizacaoRef = ref(database, 'localizacao');
          set(localizacaoRef, { latitude, longitude });
        } else {
          console.log('Permissão de localização negada');
        }
      } catch (error) {
        console.error(error);
      }
    };

    getLocation();
  }, []);

  return null; // ou qualquer componente ou null se você não precisar de renderização
}

const Stack = createStackNavigator();

export default function App() {
  localizacao()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
