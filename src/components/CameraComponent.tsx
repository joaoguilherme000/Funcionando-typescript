import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView,} from 'react-native';
import { CameraType, Camera } from 'expo-camera';
import Styles from "../view/Styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CameraComponent() {
    const insets = useSafeAreaInsets();

    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        return () => {
          if (camRef.current) {
            camRef.current.pausePreview(); // Pausar a visualização da câmera
          }
        };
      }, []);
    
      useEffect(() => {
        if (hasPermission) {
          if (camRef.current) {
            camRef.current.resumePreview(); // Retomar a visualização da câmera
          }
        }
      }, [hasPermission]);

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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
});
