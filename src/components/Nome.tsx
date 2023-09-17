import * as react from "react";
import { Text } from "react-native";
import Styles from "./Styles";

export default function Nome () {
    const nome: string = 'Coca Cola';
    return <Text style={Styles.text}>PRODUTO: {nome}</Text>
}