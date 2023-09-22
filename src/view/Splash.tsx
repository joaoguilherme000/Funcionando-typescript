import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TelaCamera from './TelaCamera';

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
        }, 3000);
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
        <Image
          source={require('../assets/logo.jpg')} // Substitua pelo caminho correto para a sua imagem ou animação
          style={styles.image}
        />
      </View>
    );
  }

  // Quando a aplicação estiver pronta, exibe o conteúdo
  return (
    <TelaCamera/>
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
    height: 500,
    width: 500, // ajuste o tamanho
  },
});

export default Splash;