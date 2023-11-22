import React, { useEffect, useState } from 'react';
import { Image, Text, ActivityIndicator, ScrollView, View, TouchableOpacity } from 'react-native';


import { ref, get } from 'firebase/database';
import { db } from './../../../firebaseConfig';

import { useNavigation } from '@react-navigation/native';

import Style from './Style';

// Defina o tipo de dados para uma imagem
type ImageData = {
  categoria: string;
  preco: number;
  url: string;
};

function Result({ route }: any) {
  const { categoria, uriDaImagem, preco } = route.params;
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack(); // Navegue de volta à tela anterior
  };

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imagensRef = ref(db, 'imagens');
        const dataSnapshot = await get(imagensRef);

        if (dataSnapshot.exists()) {
          const data = dataSnapshot.val();
          const imageDataArray: ImageData[] = [];

          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              const imageInfo = data[key] as ImageData;
              imageDataArray.push(imageInfo);
            }
          }

          setImageData(imageDataArray);
        } else {
          console.log('Nenhum dado encontrado');
        }
      } catch (error) {
        console.error('Erro ao recuperar os dados das imagens:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [categoria]);

  // Filtra as imagens com base na categoria especificada
  const filteredImages = imageData.filter((imageInfo) => imageInfo.categoria === categoria);

  return (
    <View style={Style.container}>
      <View style={Style.topBar}>
        <TouchableOpacity onPress={handleVoltar} style={Style.voltar}>
          <Text style={Style.backButton}>Voltar</Text>
        </TouchableOpacity>
        <Text>Categoria: {categoria}</Text>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : filteredImages.length > 0 ? (
        <ScrollView>
          {filteredImages.map((imageInfo, index) => (
            <View key={index} style={Style.userBox}>
              <Image source={{ uri: imageInfo.url }} style={{ width: 100, height: 100 }} />
              <View style={Style.informacaoUser}>
                <Text style={Style.textoUser}>Preço: R$ {imageInfo.preco}</Text>
                <Text style={Style.textoUser}>Localização: Etec irmã agostina</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Nenhuma imagem encontrada</Text>
      )}
    </View>
  );
}

export default Result;