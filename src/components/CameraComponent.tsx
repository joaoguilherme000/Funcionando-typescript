import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView,TouchableOpacity,Button, Image} from 'react-native';
import { CameraType, Camera } from 'expo-camera';
import Styles from "../view/Styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CameraComponent() {
    const camRef = useRef<Camera>(null);
    
    const insets = useSafeAreaInsets();

    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const [uriDaImagem, setUriDaImagem] = useState<string | null>(null); // Novo estado para a URI da imagem

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
                style={{ width: '100%', marginTop: insets.top, height: "89%",  }}
                type={type}
                ref={camRef}
            >
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}/>
            </Camera>
            <TouchableOpacity onPress={tirarFoto}>
                <Text>Tirar Foto</Text>
            </TouchableOpacity>
            {uriDaImagem && <Image source={{ uri: uriDaImagem }} style={styles.imagem} />} 
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
        width: 200, // Defina o tamanho desejado para a imagem
        height: 200, // Defina o tamanho desejado para a imagem
    },
});
