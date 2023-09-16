import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Imagem from "./foto.jpg";

export default function Resultados({ navigation }) {
  const [preco, setPreco] = useState<number>(25.55); // Corrigi o valor do preço
  const moeda: string = 'R$'; // Não é necessário usar useState para a moeda

  return (
    <View style={{ flex: 1 }}>
      <Image source={Imagem} style={{ width: "25%", height: 100 }} />
      <Text>NOME DO PRODUTO</Text>
      <Text>PREÇO: {moeda} {preco}</Text>
    </View>
  );
}
