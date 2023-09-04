import { Text, SafeAreaView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import SplashComponent from "./SplashComponent";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular um carregamento demorado
    setTimeout(() => {
      setIsLoading(false);
    }, 12000); // Tempo em milissegundos
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <SplashComponent />
      ) : (
        <Text style={styles.mainText}>Seu conteúdo principal aqui</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  mainText: {
    justifyContent: "center",
    fontSize: 20,
    alignSelf: "center",
  },
});
