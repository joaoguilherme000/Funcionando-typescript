import { Image } from "react-native";
import Imagem from "../assets/coca.jpg"; 


export default function ImageProduto() {
    
    return <Image source={Imagem} style={{ width: "25%", height: 100, resizeMode: 'center' }} />
}
