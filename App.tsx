import Home from "./src/components/Home";
import Resultados from "./src/components/Resultados";
import Pagina1 from "./src/components/Pagina1";
import Pagina2 from "./src/components/Pagina2";
import Pagina3 from "./src/components/Pagina3";
import Pagina4 from "./src/components/Pagina4";
import Pagina5 from "./src/components/Pagina5";

import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const deslizar = ({ current, next, layouts }) => {
  const translateX = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [layouts.screen.width, 0],
  });

  const slideFromRight = { transform: [{ translateX }] };

  return {
    cardStyle: slideFromRight,
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          cardStyleInterpolator: deslizar,
          headerTitleAlign: "center",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Pagina inicial" component={Home} />
        <Stack.Screen name="Resultados" component={Resultados} />
        <Stack.Screen name="Pagina1" component={Pagina1} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="Pagina3" component={Pagina3} />
        <Stack.Screen name="Pagina4" component={Pagina4} />
        <Stack.Screen name="Pagina5" component={Pagina5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
