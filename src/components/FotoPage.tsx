import React from "react";
import { View, Text, Image } from "react-native";
import Imagem from "./foto.jpg";

export default function FotoPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={Imagem} style={{ width: "100%", height: "100%" }} />
    </View>
  );
}
