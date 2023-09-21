import { Image } from "react-native";
import foto from "../assets/coca.jpg"

export default function ImageProduto() {
    
    return <Image source={foto} style={{ width: "25%", height: 100, resizeMode: 'center' }} />
}
