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
    color: "#f4a100",
    fontWeight: "bold",
  },
  preco: {
    fontSize: 17,
    alignSelf: 'center',
    width: "85%",
    color: "#f4a100",
  },
  moeda: {
    fontSize: 17,
    alignSelf: 'center',
    marginLeft: "2%",
    color: "#f4a100",
  },
  categoria: {
    fontSize: 17,
    alignSelf: 'center',
    width: "96%",
    color: "#f4a100",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    width: '85%',
    height: 280,
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
  },
});

export default StylesDados;