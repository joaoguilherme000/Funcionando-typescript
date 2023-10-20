import { SafeAreaView,Text, FlatList, View,Image } from "react-native";
import Config from "./Config";

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import React, { useState} from "react";

import Styles from "../view/Styles";
import ImageProduto from "../view/ImageProduto";

export default function Resultados({ route }) {
  const { categoria, uriDaImagem, preco,} = route.params;

  interface Produto {
    id: string;
    nome: string;
    preço: number;
  }

  const [data, setData] = useState<Produto[]>([
    { id: "1", nome: "Nome", preço: 25 },
    { id: "2", nome: "Nome", preço: 22 },
    { id: "3", nome: "Nome", preço: 25 },
    { id: "4", nome: "Nome", preço: 25 },
    { id: "5", nome: "Nome", preço: 25 },
    { id: "6", nome: "Nome", preço: 25 },
    { id: "7", nome: "Nome", preço: 25 },
    { id: "8", nome: "Nome", preço: 25 },
    { id: "9", nome: "Nome", preço: 25 },
    { id: "10", nome: "Nome", preço: 25 },
    { id: "11", nome: "Nome", preço: 25 },
    { id: "12", nome: "Nome", preço: 25 },
    { id: "13", nome: "Nome", preço: 25 },
    { id: "14", nome: "Nome", preço: 25 },
    { id: "15", nome: "Nome", preço: 25 },
    { id: "16", nome: "Nome", preço: 25 },
    { id: "17", nome: "Nome", preço: 25 },
    { id: "18", nome: "Nome", preço: 25 },
    { id: "19", nome: "Nome", preço: 25 },
    // Adicione outros
  ]);

  const Ordenar = (novaOrdem: string) => {
    // Faça o que for necessário com a nova ordem selecionada, por exemplo, atualize o estado ou a lista de produtos
    console.log('Ordem selecionada:', novaOrdem);
  };

  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top, }}>
      <Config onOrdenarPorChange={Ordenar}/>
      <View style={Styles.userBox}>
      <Image source={{ uri: uriDaImagem }} style={{ width: 100, height: 100}} />
              <View style={Styles.informacaoUser}>
                  <Text style={Styles.textoUser}>PRODUTO: {categoria}</Text>
                  <Text style={Styles.textoUser}>PREÇO: R$ {preco}</Text>
              </View>
          </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
          <View style={Styles.horizontal}>
              <ImageProduto/>
              <View style={Styles.informacao}>
                  <Text style={Styles.texto}>PRODUTO: {categoria}</Text>
                  <Text style={Styles.texto}>PREÇO: R$ {preco}</Text>
              </View>
          </View>
          );
        }}
      />
    </SafeAreaView>
  );
}   
        