import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Category {
  key: string;
  category: string;
}

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
  const renderCategoryChips = ({ item }: { item: Category }) => {
    return (
    <TouchableOpacity>
        <View style={styles.chip}>
            <Text style={styles.texto}>{item.category}</Text>
        </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderCategoryChips}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.flatListStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
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
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatListStyle: {

  },
});

export default Lista;
