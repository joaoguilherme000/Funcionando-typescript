import React from "react"
import { View } from "react-native";
import Items from "./Items";
import Config from "./Config";

export default function Resultados({ navigation }) {

  return (
    <View style={{ flex: 1, padding: 0 }}>
      {/* O botão de ordenar abaixo se chama config e os items sao os que aparecem na tela com foto e tudo mais*/}
      <Config/>
      <Items/>
    </View>
  );
}
