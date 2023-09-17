import React from "react"
import { View } from "react-native";
import Nome from "./Nome";
import Preço from "./Preço";
import ImageProduto from "./ImageProduto";
import Styles from "./Styles";
import Config from "./Config";

export default function Resultados({ navigation }) {

  return (
    <View style={{ flex: 1, padding: 0 }}>
      <Config/>
      <View style={Styles.principal}>
        <ImageProduto/>
        <View style={Styles.informaçao}>
          <Nome/>
          <Preço/>
        </View>
      </View>
      <View style={Styles.horizontal}>
        <ImageProduto/>
        <View style={Styles.informaçao}>
          <Nome/>
          <Preço/>
        </View>
      </View>
      <View style={Styles.horizontal}>
        <ImageProduto/>
        <View style={Styles.informaçao}>
          <Nome/>
          <Preço/>
        </View>
      </View>
      <View style={Styles.horizontal}>
        <ImageProduto/>
        <View style={Styles.informaçao}>
          <Nome/>
          <Preço/>
        </View>
      </View>
      <View style={[Styles.horizontal, Styles.vermelho]}>
        <ImageProduto/>
        <View style={Styles.informaçao}>
          <Nome/>
          <Preço/>
        </View>
      </View>
    </View>
  );
}
