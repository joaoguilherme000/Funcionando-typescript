import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from "@expo/vector-icons";
import { CameraType } from 'expo-camera';
import Styles from "../view/Styles";

export default function CameraComponent() {
    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={Styles.text}>Não tem permissão para acessar a câmera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={{ flex: 6, width: '100%' }}
                type={type}
                ref={camRef}
            >
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20 }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back);
                        }}>
                        <FontAwesome name="sort" size={23} color='#FFF' />
                    </TouchableOpacity>
                </View>
            </Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
});
