import React, {useState} from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity,Modal, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


interface Category {
  key: string;
  category: string;
}

import Styles from '../view/Styles';

const data: Category[] = [
    { key: '1', category: 'Comida' },
    { key: '2', category: 'Bebida' },
    { key: '3', category: 'Produtos de Limpeza' },
    { key: '4', category: 'Cuidados Pessoais' },
    { key: '5', category: 'Higiene Doméstica' },
    { key: '6', category: 'Roupas' },
    { key: '7', category: 'Eletrônicos' },
    { key: '8', category: 'Móveis' },
    { key: '9', category: 'Brinquedos' },
    { key: '10', category: 'Material de Escritório' },
    { key: '11', category: 'Ferramentas' },
    { key: '12', category: 'Produtos para Animais de Estimação' },
  ];

  const Lista = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [uriDaImagem, setUriDaImagem] = useState<string | null>(null); // Estado para armazenar a URI da imagem

    const navigation = useNavigation();
  
    const renderCategoryChips = ({ item }: { item: Category }) => {
      return (
        <TouchableOpacity
          onPress={async () => {
            setSelectedCategory(item.category);
            setIsModalVisible(true);
          }}
        >
          <View style={styles.chip}>
            <Text style={styles.texto}>{item.category}</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ position: 'absolute', bottom: 130, left: 20, padding: 11}}
            onPress={() => {
              navigation.navigate('Resultados', {selectedCategory, uriDaImagem});
            }}>
            <FontAwesome name="info" size={25} color='#000' />
        </TouchableOpacity>
        <FlatList
          data={data}
          horizontal
          renderItem={renderCategoryChips}
          keyExtractor={(item) => item.key}
        />
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={Styles.texto}>Você escolheu a categoria: {selectedCategory}</Text>
              <Button title="Fechar" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 1,
      flex: 0.5,
      backgroundColor: '#ffffff',
      width: '100%',
    },
    chip: {
      flex: 1,
      backgroundColor: '#007bff',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginHorizontal: 5,
    },
    texto: {
      color: '#fff',
      fontWeight: 'bold',
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
      height: 150,
      elevation: 5,
    },
  });
  
  export default Lista;
