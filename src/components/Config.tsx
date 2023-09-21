import { View,Text, TouchableOpacity } from "react-native";
import Styles from "../view/Styles";

export default function Config () {
    return (
        <View style={{margin: 5, flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.buttonConfig}>
                <Text style={Styles.config}>Ordenar Por</Text>
            </TouchableOpacity>
            <View style={Styles.ordenado}>
                <Text style={{fontSize: 15, alignSelf: 'flex-end'}}>Mais Barato</Text>
            </View>
        </View>
    );
}