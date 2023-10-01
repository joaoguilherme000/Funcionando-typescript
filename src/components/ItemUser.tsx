import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Styles from "../view/Styles";
import { useRoute } from '@react-navigation/native';

export default function ItemUser () {
    
    const route = useRoute();
    const selectedCategory = route.params?.selectedCategory;
    const uriDaImagem = route.params?.uriDaImagem;

    return (
        <View style={Styles.container}>
            <Image source={{ uri: uriDaImagem }} style={{ width:"100%", height: 500 }} />
        </View>
    );
}