// pagina de styles para mudar o design
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center'
    },
    userBox: {
        flexDirection: 'row',
    },
    informacaoUser: {
        padding: "8%",
    },
    textoUser:{
        fontSize: 20,
        color: "black",
    },
});

export default Style;