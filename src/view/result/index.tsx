import React, { useEffect, useState } from 'react';
import { View, Image, ActivityIndicator, Text, ScrollView } from 'react-native';

import { ref, get } from 'firebase/database';
import { db } from './../../../firebaseConfig';

import Style from './Style';

// Defina o tipo de dados para uma imagem
type ImageData = {
  categoria: string;
  preco: number;
  url: string;
};

function Result({route }: any) {
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = route.params;

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
      <Text>Todas as fotos do {categoria}</Text>
      {loading ? (
        <ActivityIndicator />
      ) : filteredImages.length > 0 ? (
        <ScrollView>
          {filteredImages.map((imageInfo, index) => (
            <View key={index} style={Style.userBox}>
              <Image source={{ uri: imageInfo.url }} style={{ width: 100, height: 100 }} />
              <View style={Style.informacaoUser}>
                <Text style={Style.textoUser}>PREÇO: R$ {imageInfo.preco}</Text>
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