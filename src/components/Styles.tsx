// pagina de styles para mudar o design
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
  principal:{
    backgroundColor: "#00f8006a",
    flexDirection: 'row',
    marginTop: "2%",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  horizontal:{
    flexDirection: 'row',
    marginTop: "2%",
  },
});

export default Styles;
