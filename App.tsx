import Home from "./src/components/Home";
import FotoPage from "./src/components/FotoPage";
import { StyleSheet } from "react-native";
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
          headerStyle: { backgroundColor: "#262626" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#f4a100" },
          cardStyleInterpolator: deslizar,
          headerTitleAlign: "center",
        }}
        initialRouteName="HomeComponent"
      >
        <Stack.Screen
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}
          name="Pagina inicial"
          component={Home}
        />
        <Stack.Screen name="FotoPage" component={FotoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
