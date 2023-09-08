import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import SplashComponent from "./SplashComponent";

export default function Pagina5() {
  const [isLoading, setIsLoading] = useState(true);
  const [rerunEffect, setRerunEffect] = useState(false);

  useEffect(() => {
    // Simular um carregamento demorado
    setTimeout(() => {
      setIsLoading(false);
    }, 12000); // Tempo em milissegundos
  }, [rerunEffect]);

  const again = () => {
    setIsLoading(true);
    setRerunEffect(!rerunEffect); // Atualize o estado rerunEffect para acionar o useEffect novamente
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <SplashComponent />
      ) : (
        <TouchableOpacity onPress={again}>
          <Text style={styles.mainText}>EXECUTAR DE NOVO</Text>
        </TouchableOpacity>
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
