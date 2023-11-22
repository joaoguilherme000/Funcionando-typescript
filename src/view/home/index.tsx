import { useState, useEffect, useRef } from 'react';
import { Button, View, Text,TouchableOpacity, Modal, TextInput} from 'react-native';
import { CameraType, Camera } from 'expo-camera';

import Styles from "./Style";
import StylesDados from "./StyleDados";

import * as Location from 'expo-location';

import { db } from './../../../firebaseConfig'; 

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// banco de dados imports
import { ref as firebaseRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, push, set } from 'firebase/database';
import { storage } from './../../../firebaseConfig'; // Importe a configuração do Firebase Storage


export default function CameraComponent() {
    const [categoria, setCategoria] = useState<string>("DS");
    const [preco, setPreco] = useState<string>("");
    const [open, setOpen] = useState(false); // Estado para controlar a abertura do modal
    const navigation = useNavigation();

    const localizacao = ()=>{
      useEffect(() => {
        const getLocation = async () => {
          try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
              const locationResult = await Location.getCurrentPositionAsync({});
              const { latitude, longitude } = locationResult.coords;
    
              // Enviar dados para o Firebase Realtime Database
              const localizacaoRef = databaseRef(db, 'localizacao');
              set(localizacaoRef, { latitude, longitude });
            } else {
              console.log('Permissão de localização negada');
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        getLocation();
      }, []);
    
      return null; // ou qualquer componente ou null se você não precisar de renderização
    }

    const insets = useSafeAreaInsets();

    let downloadURL : String;

    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const [uriDaImagem, setUriDaImagem] = useState<string | null>(null); // Novo estado para a URI da imagem

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

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const fechar = () => {
      setOpen(false);
    };

    const tiraFoto = async () => {
      if (camRef.current) {
        const photo = await camRef.current.takePictureAsync();
        const response = await fetch(`file://${photo.uri}`);
        const blob = await response.blob();

        // Crie um nome de pasta único com base no timestamp atual
        const timestamp = new Date().getTime();
        const folderName = `imagens/${categoria}/${timestamp}`;
    
        const storageRef = firebaseRef(storage, folderName);
        const uploadTask = uploadBytesResumable(storageRef, blob);
    
        uploadTask.then(async () => {
          downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('URL da imagem:', downloadURL);
    

          const imagensRef = databaseRef(db, 'imagens');
          const novaImagemRef = push(imagensRef); // Gera uma nova chave única para a imagem
    
          set(novaImagemRef, {
            url: downloadURL,
            createdAt: timestamp,
            categoria: categoria, // Salva "categoria" data
            preco: preco, // Salva "preco" data
            });
    
          console.log('URL da imagem salva no Realtime Database com chave:', novaImagemRef.key);
    
          setUriDaImagem(photo.uri);
        }).catch((error: any) => {
          console.error('Erro no upload:', error);
        });

        navigation.navigate('Result', { categoria, uriDaImagem: downloadURL, preco });
        localizacao();
      }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Não tem permissão para acessar a câmera</Text>;
    }
  return (
    <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
      <Camera
        style={{ width: '100%', marginTop: insets.top, height: "87%",  }}
        type={type}
        ref={camRef}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}/>
      </Camera>
      <TouchableOpacity style={Styles.button} onPress={tiraFoto}>
        <Text style={{ fontSize: 20, color: 'black' }}>Tirar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', bottom: "15%", left: 20, padding: 11, backgroundColor: "#000", borderRadius: 5, }}
        onPress={() => {
          setOpen(true);
        }}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>i</Text>
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
            <View style={{ flex: 0.5, flexDirection: 'row', gap: 5, marginBottom: "1%" }}>
              <Text style={StylesDados.moeda}>R$</Text>
              <TextInput
                style={StylesDados.preco}
                onChangeText={precoMuda}
                value={preco}
                keyboardType="numeric"
                placeholder="iPreço..."
              />
            </View>
            <TextInput
              style={StylesDados.categoria}
              onChangeText={categoriaMuda}
              value={"DS"}
              editable={false}
              keyboardType="default"
              placeholder="Categoria..."
            />
            <Button title="Fechar" onPress={fechar} />
          </View>
        </View>
      </Modal>
    </View>
  );
}