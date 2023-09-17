import * as react from "react";
import { View,Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function Config () {
    return (
        <View style={{margin: 9,}}>
            <TouchableOpacity style={Styles.buttonConfig}>
                <Text style={Styles.config}>Ordenar Por</Text>
            </TouchableOpacity>
        </View>
    );
}