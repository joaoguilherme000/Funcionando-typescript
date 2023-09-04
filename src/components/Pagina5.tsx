import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Imagem from "./foto.jpg";
import Botao from "./Botao";

export default function Pagina5({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>clique na foto</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("FotoPage")}
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
    width: 350, // Defina o tamanho da imagem conforme necessário
    height: 350, // Defina o tamanho da imagem conforme necessário
  },
});
