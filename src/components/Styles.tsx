// pagina de styles para mudar o design
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonConfig: {
    backgroundColor: "#b6b6b6",
    width: '30%',
    height: 33,
    padding: 3,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  config:{
    fontSize: 15,
  },
  informaçao: {
    paddingTop: 15,
  },
  image: {
    width: '25%',
    height: 100, 
  },
  text: {
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
});

export default Styles;
