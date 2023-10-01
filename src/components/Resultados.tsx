import { SafeAreaView,Text, FlatList, View,Image } from "react-native";
import Items from "./Items";
import Config from "./Config";
import ItemUser from "./ItemUser";

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from "react";

import Styles from "../view/Styles";
import ImageProduto from "../view/ImageProduto";

export default function Resultados() {
  interface Produto {
    id: string;
    nome: string;
    preço: number;
  }

  const [data, setData] = useState<Produto[]>([
    { id: "1", nome: "Coca Cola", preço: 25 },
    { id: "2", nome: "Pepsi", preço: 20 },
    { id: "3", nome: "Guarana", preço: 15 },
    { id: "4", nome: "Cerveja", preço: 30 },
    { id: "5", nome: "Vodka", preço: 8 },
    { id: "6", nome: "nome 6", preço: 9 },
    { id: "7", nome: "nome 7", preço: 1 },
    { id: "8", nome: "nome 8", preço: 2 },
    { id: "9", nome: "nome 9", preço: 3 },
    { id: "10", nome: "nome 10", preço: 4 },
    { id: "11", nome: "nome 11", preço: 5 },
    { id: "12", nome: "nome 12", preço: 6 },
    { id: "13", nome: "nome 13", preço: 88 },
    { id: "14", nome: "nome 14", preço: 99 },
    { id: "15", nome: "nome 15", preço: 14 },
    // Adicione outros
  ]);

  const handleOrdenarPorChange = (novaOrdem) => {
    // Faça o que for necessário com a nova ordem selecionada, por exemplo, atualize o estado ou a lista de produtos
    console.log('Ordem selecionada:', novaOrdem);
  };

  const insets = useSafeAreaInsets();

  const route = useRoute();
  const selectedCategory = route.params?.selectedCategory;
  const uriDaImagem = route.params?.uriDaImagem;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top, }}>
      <Config onOrdenarPorChange={handleOrdenarPorChange}/>
      <Image source={{ uri: route.params.uriDaImagem }} style={{ width: 100, height: 100 }} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
          <View style={Styles.horizontal}>
              <ImageProduto/>
              <View style={Styles.informacao}>
                  <Text style={Styles.texto}>PRODUTO: {selectedCategory}</Text>
                  <Text style={Styles.texto}>PREÇO: R$ {item.preço}</Text>
              </View>
          </View>
          );
        }}
      />
    </SafeAreaView>
  );
}   
        