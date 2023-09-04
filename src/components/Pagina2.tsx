import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";

const Pagina2 = () => {
  return (
    <SafeAreaView style={styles.tudo}>
      <ScrollView horizontal style={styles.container1}>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
      </ScrollView>
      <View style={styles.divisa}>
        <Text>DIVISA</Text>
      </View>
      <ScrollView vertical style={styles.container2}>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
        <Text style={styles.tamanho}>Testando</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tudo: {
    marginTop: "9%",
    backgroundColor: "blue",
  },
  container1: {
    backgroundColor: "#009bc2",
    height: "30%",
  },
  container2: {
    backgroundColor: "#f78401",
    height: "70%",
  },
  tamanho: {
    fontSize: 67,
    margin: 15,
    alignSelf: "center",
  },
  divisa: {
    height: "5%",
    alignItems: "center", // horizontal
    justifyContent: "center", //vertical
    width: "100%",
    backgroundColor: "red",
  },
});

export default Pagina2;
