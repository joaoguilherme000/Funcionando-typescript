import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { CameraType, Camera } from 'expo-camera';
import Styles from "../view/Styles";
import Resultados from './Resultados';
import { useNavigation } from '@react-navigation/native';

export default function CameraComponent() {
    const navigation = useNavigation();

    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

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
        return <Text style={Styles.texto}>Não tem permissão para acessar a câmera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={{ flex: 1, width: '100%' }}
                type={type}
                ref={camRef}
            >
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: 20, backgroundColor: "#f4a100", padding: 15, borderRadius: 99,}}
                        onPress={() => {
                            navigation.navigate('Resultados'); // Navega para a tela "Resultados"
                        }}>
                        <FontAwesome name="info" size={23} color='#000' />
                    </TouchableOpacity>
                </View>
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
