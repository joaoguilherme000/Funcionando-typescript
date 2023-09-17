import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function Home({ navigation }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("Resultados")}
      >
        <Text>Resultados</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
