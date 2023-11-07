import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Text, Button, Modal, TextInput, Alert} from 'react-native';
import { CameraType, Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

import Styles from './Style';
import StylesDados from './StyleDados';

import { ref as firebaseRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as databaseRef, push, set } from 'firebase/database';
import { db, storage } from "../../../firebaseConfig";


export default function Home () {
    // DADOS ---------
    const [categoria, setCategoria] = useState<string>("");
    const [preco, setPreco] = useState<string>(""); 
    

    const navigation = useNavigation();

    const [open, setOpen] = useState(false); // Estado para controlar a abertura do modal

    const precoMuda = (inputText: string) => {
        // Verifique se o texto inserido segue o formato desejado (9999.99)
        const regex = /^\d+(\,\d{0,2})?$/;
        if (regex.test(inputText) || inputText === '') {
        setPreco(inputText);
        }
    };

    const categoriaMuda = (inputText: string) => {
        setCategoria(inputText);
    };

    const fechar = () =>{
        setOpen(false);
    };

    // CAMERA --------

    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [imageData, setImageData] = useState<string>(''); // uri para mostrar a imagem

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== 'granted') {
        Alert.alert('Por favor, conceda permissão para acessar a câmera.');
        }
    };

    if (camRef.current != null) { 
        return(
            <View style={Styles.container}>
            <Text style={{fontSize: 20, color:'black'}}>Carregando Camera...</Text>
            <ActivityIndicator size={'large'}/>
            </View>
        );
    }

    const tiraFoto = async () => {
        if (camRef.current) {
        const photo = await camRef.current.takePictureAsync();
        const response = await fetch(`file://${photo.path}`);
        const blob = await response.blob();

        // Crie um nome de pasta único com base no timestamp atual
        const timestamp = new Date().getTime();
        const folderName = `imagens/${categoria}/${timestamp}`;
    
        const storageRef = firebaseRef(storage, folderName); // Use a pasta única como referência
        const uploadTask = uploadBytesResumable(storageRef, blob);
    
        uploadTask.then(async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('URL da imagem:', downloadURL);
    
            // Salve a URL da imagem no Realtime Database
            const database = getDatabase();
            const imagensRef = databaseRef(database, 'imagens');
            const novaImagemRef = push(imagensRef); // Gera uma nova chave única para a imagem
    
            set(novaImagemRef, {
            url: downloadURL,
            createdAt: timestamp,
            categoria: categoria, // Salva "categoria" data
            preco: preco, // Salva "preco" data
            });
    
            console.log('URL da imagem salva no Realtime Database com chave:', novaImagemRef.key);
    
            setImageData(photo.uri);
        }).catch((error: any) => {
            console.error('Erro no upload:', error);
        });
        navigation.navigate('Result', { categoria });
        }
    };

    return (
        <View style={{flex: 1, flexDirection: 'column',gap: 5}}>
        <Camera
            ref={camRef}
            style={Styles.camera}
            type={type}
        />
        <TouchableOpacity style={Styles.button} onPress={tiraFoto}>
            <Text style={{fontSize: 20, color:'black'}}>Tirar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ position: 'absolute', bottom: "15%", left: 20, padding: 11, backgroundColor: "#000", borderRadius:5,}} 
            onPress={() => {
            setOpen(true);
            }}>
            <Text style={{fontSize: 20, color:'white', fontWeight:'bold'}}>i</Text>
        </TouchableOpacity>
        <Modal
            animationType="none"
            transparent={true}
            visible={open}
            onRequestClose={() => {
            setOpen(false);
            }}
        >
            <View style={StylesDados.modalContainer}>
                <View style={StylesDados.modalContent}>
                    <Text style={StylesDados.mensagem}>Digite o Preço e a categoria do produto</Text>
                    <View style={{flex: 0.5, flexDirection: 'row', gap: 5, marginBottom: "1%"}}>
                        <Text style={StylesDados.moeda}>R$</Text>
                        <TextInput
                            style={StylesDados.preco}
                            onChangeText={precoMuda}
                            value={preco}
                            keyboardType="numeric"
                            placeholder="Agora ipreço..."
                        />
                    </View>
                    <TextInput
                        style={StylesDados.categoria}
                        onChangeText={categoriaMuda}
                        value={categoria}
                        keyboardType="default"
                        placeholder="Categoria..."
                    />
                    <Button title="Fechar" onPress={fechar}/>
                </View>
            </View>
        </Modal>
        </View>
    )
    };
