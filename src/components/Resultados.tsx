import React from "react"
import { SafeAreaView, View } from "react-native";
import Items from "./Items";
import Config from "./Config";

export default function Resultados() {

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 29 }}>
      {/* O botão de ordenar abaixo se chama config e os items sao os que aparecem na tela com foto e tudo mais*/}
      <Config/>
      <Items/>
    </SafeAreaView>
  );
}
