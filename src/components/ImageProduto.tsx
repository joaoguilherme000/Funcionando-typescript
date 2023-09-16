import * as react from "react";
import { Image } from "react-native";
import Imagem from "./coca.jpg";

export default function ImageProduto() {
    return <Image source={Imagem} style={{ width: "25%", height: 100, resizeMode: 'center' }} />
}
