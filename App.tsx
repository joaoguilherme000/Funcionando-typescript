import Home from "./src/components/Home";
import Resultados from "./src/components/Resultados";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
