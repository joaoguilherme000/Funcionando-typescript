import Splash from "./src/view/Splash";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Resultados from "./src/components/Resultados";
import CameraComponent from "./src/components/CameraComponent";
import TelaCamera from "./src/view/TelaCamera";
import Pagina1 from "./src/teste/Pagina1"
import Pagina2 from "./src/teste/Pagina2"
import ItemUser from "./src/components/ItemUser";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaCamera"
          component={TelaCamera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemUser"
          component={ItemUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resultados"
          component={Resultados}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
