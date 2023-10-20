import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import foto from '../assets/coca.jpg';

export default function ImageProduto() {

  return (
      <Image source={foto} style={{ width: '25%', height: 100, resizeMode: 'center' }} />
  );
}

export function TelaImagem() {
  const route = useRoute();
  const imagemUrl = route.params?.imagemUrl || ''; // a URL da imagem passada como parâmetro

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemUrl }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajuste o modo de redimensionamento conforme necessário
  },
});
