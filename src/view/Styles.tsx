// pagina de styles para mudar o design
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  // container para todos
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f4a100',
    alignSelf: 'center',
    height: '7%', 
    width: "90%",
    borderRadius: 99,
  },
  // CONFIG PAGE
  buttonConfig: {
    backgroundColor: "#b6b6b6",
    width: '30%',
    height: 33,
    padding: 3,
    borderRadius: 26,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  config:{
    fontSize: 15,
  },
  ordenado: {
    padding: 7,
    flex: 2,
  },

  // RESULT PAGE
  informacao: {
    paddingTop: 15,
  },
  image: {
    width: '25%',
    height: 100, 
  },
  texto: {
    fontSize: 20,
  },
  horizontal:{
    flexDirection: 'row',
    marginTop: "2%",
  },
  principal:{
    backgroundColor: "#75ff75",
    flexDirection: 'row',
    marginTop: "2%",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  vermelho: {
    backgroundColor: "#ff7a7a",
  },

  // Informações que o usuario vai passar
  userBox: {
    flexDirection: 'row',
  },
  informacaoUser: {
    padding: "5%",
  },
  textoUser:{
    fontSize: 20,
  },

});

export default Styles;
