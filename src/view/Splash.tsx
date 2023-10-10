import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './Home';
import Outro from './Outro';

const Splash = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Inicialização da aplicação
    async function initializeApp() {
      try {
        // Simule o carregamento da inicialização
        await performInitialization();

        // Marca o aplicativo como pronto após um atraso de 3 segundos (ajuste conforme necessário)
        setTimeout(() => {
          setAppIsReady(true);
        }, 100);
      } catch (error) {
        console.error(error);
      }
    }

    initializeApp();
  }, []);

  const performInitialization = async () => {
    // Coloque aqui seu código de inicialização, como carregar dados iniciais, configurar autenticação, etc.
    // Por exemplo:
    // await loadInitialData();
    // await configureAuthentication();
  };

  if (appIsReady === false) {
    // Exibe a imagem da splash screen enquanto a aplicação está carregando
    return (
      <View style={styles.container}>
        <StatusBar style="dark" backgroundColor="#252525"/> 
        <Image
          source={require('../assets/logo.jpg')} // Substitua pelo caminho correto para a sua imagem ou animação
          style={styles.image}
        />
      </View>
    );
  }

  // Quando a aplicação estiver pronta, exibe o conteúdo
  return (
    <Outro/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#252525",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400, // ajuste o tamanho
  },
});

export default Splash;