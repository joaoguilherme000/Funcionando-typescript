import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import foto from '../assets/coca.jpg';

export default function ImageProduto() {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navegar para a tela TelaImagem e passar a URL da imagem como parâmetro
    navigation.navigate('TelaImagem', { foto });
  };

  return (
    <TouchableOpacity onPress={handleImagePress}>
      <Image source={foto} style={{ width: '25%', height: 100, resizeMode: 'center' }} />
    </TouchableOpacity>
  );
}

export function TelaImagem() {
  const route = useRoute();
  const imagemUrl = route.params?.imagemUrl || ''; // Obtenha a URL da imagem passada como parâmetro

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemUrl }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Cor de fundo preta para tela cheia
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajuste o modo de redimensionamento conforme necessário
  },
});
