// pagina de styles para mudar o design
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "5%",
        backgroundColor: "#fff",
    },
    topBar: {
        height: "6%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 180,
    },
    backButton: {
        padding: "2%",
        backgroundColor: "#f4a100",
        borderRadius: 3,
        color: "black",
    },
    userBox: {
        flexDirection: 'row',
        margin: 5,
    },
    informacaoUser: {
        padding: "4%",
    },
    textoUser:{
        fontSize: 15,
        color: "black",
    },
    voltar: {
        padding: 5,
    },
});

export default Style;