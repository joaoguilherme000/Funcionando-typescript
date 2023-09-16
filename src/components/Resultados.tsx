import React from "react"
import { View } from "react-native";
import Produto from "./Produto";
import Preço from "./Preço";
import ImageProduto from "./ImageProduto";

export default function Resultados({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <ImageProduto/>
      <Produto/>
      <Preço/>
    </View>
  );
}
