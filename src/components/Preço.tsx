import * as react from "react";
import { Text } from "react-native";
import Styles from "./Styles";

export default function Preço() {
    const preço: number = 25; // Valor do preço
    const moeda: string = 'R$';
    return <Text style={Styles.text}>PREÇO: {moeda} {preço}</Text>
};
