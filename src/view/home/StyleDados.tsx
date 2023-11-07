import { StyleSheet } from 'react-native';

const StylesDados = StyleSheet.create({
chip: {
    flex: 1,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  mensagem: {
    fontSize: 17,
  },
  preco: {
    fontSize: 17,
    alignSelf: 'center',
    width: "85%",
  },
  moeda: {
    fontSize: 17,
    alignSelf: 'center',
    marginLeft: "2%"
  },
  categoria: {
    fontSize: 17,
    alignSelf: 'center',
    width: "96%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    height: 300,
    elevation: 5,
    gap: 10,
  },
  texto: {
    fontSize: 16,
  },
  viewButton: {
    width: "90%",
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
  },
  fotoButton: {
    backgroundColor: "red",
    alignSelf: 'center',
  }

});

export default StylesDados;