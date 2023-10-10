import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';
import { CameraType, Camera } from 'expo-camera';
import Styles from "../view/Styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Outro() {
    const camRef = useRef<Camera>(null);
    const insets = useSafeAreaInsets();

    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [open, setOpen] = useState(false); // Estado para controlar a abertura do modal
    const [uriDaImagem, setUriDaImagem] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const tirarFoto = async () => {
        if (camRef.current) {
            const photo = await camRef.current.takePictureAsync();
            setUriDaImagem(photo.uri);
            setOpen(true); // Abre o modal quando a foto é tirada
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={Styles.texto}>Não tem permissão para acessar a câmera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={{ width: '100%', marginTop: insets.top, height: "89%" }}
                type={type}
                ref={camRef}
            >
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }} />
            </Camera>
            <View style={{ justifyContent: 'center', width: "100%", height: 25, flexDirection: "row", gap: 50 }}>
                <TouchableOpacity onPress={tirarFoto}>
                    <Text>Tirar Foto</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                transparent={false}
                visible={open}
                style={styles.modal}
            >
                {uriDaImagem && <Image
                    source={{ uri: uriDaImagem }}
                    style={styles.imagem}
                />}
                <TouchableOpacity onPress={() => setOpen(false)}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Salvar na galeria</Text>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    imagem: {
        width: 200,
        height: 200,
    },
    modal: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
    }
});