import * as react from "react";
import { Text } from "react-native";

export default function Preço() {
    const preço: number = 25; // Valor do preço
    const moeda: string = 'R$';
    return <Text>PREÇO: {moeda} {preço}</Text>
};
