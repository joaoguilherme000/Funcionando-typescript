import * as react from "react";
import { View,Text, TouchableOpacity } from "react-native";
import Styles from "../view/Styles";

export default function Config () {
    return (
        <View style={{margin: 9, flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.buttonConfig}>
                <Text style={Styles.config}>Ordenar Por</Text>
            </TouchableOpacity>
            <Text style={Styles.ordenado}>Mais Barato</Text>
        </View>
    );
}