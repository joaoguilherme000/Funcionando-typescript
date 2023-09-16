import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Imagem from "./foto.jpg";

export default function Pagina1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>clique na foto</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Resultados")}
      >
        <Image source={Imagem} style={styles.buttonImage} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonImage: {
    borderRadius: 15,
    width: 350, // tamanho da imagem
    height: 350,
  },
});
