import React from "react"
import { SafeAreaView, } from "react-native";
import Items from "./Items";
import Config from "./Config";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Resultados() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: insets.top, }}>
      {/* O botão de ordenar abaixo se chama config e os items sao os que aparecem na tela com foto e tudo mais*/}
      <Config/>
      <Items/>
    </SafeAreaView>
  );
}
