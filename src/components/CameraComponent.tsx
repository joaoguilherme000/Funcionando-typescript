import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView,TouchableOpacity, Image, Modal, TextInput} from 'react-native';
import { CameraType, Camera } from 'expo-camera';
import Styles from "../view/Styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function CameraComponent() {
    const [categoria, setCategoria] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    const camRef = useRef<Camera>(null);
    const [type, setType] = useState<CameraType>(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const [uriDaImagem, setUriDaImagem] = useState<string | null>(null); // Novo estado para a URI da imagem

    const precoMuda = (inputText: string) => {
        // Verifique se o texto inserido segue o formato desejado (9999.99)
        const regex = /^\d+(\,\d{0,2})?$/;
        if (regex.test(inputText) || inputText === '') {
          setCategoria(inputText);
        }
      };

      const categoriaMuda = (inputText: string) => {
        // Verifique se o texto inserido segue o formato desejado (9999.99)
        const regex = /^\d+(\,\d{0,2})?$/;
        if (regex.test(inputText) || inputText === '') {
          setCategoria(inputText);
        }
      };

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const fecharModalENavegar = () => {
        setIsModalVisible(false);
        navigation.navigate('Resultados', { categoria, uriDaImagem });
      };

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
            <TouchableOpacity style={{ position: 'absolute', bottom: 130, left: 20, padding: 11, backgroundColor: "#fff", borderRadius:5,}}
                onPress={() => {
                setIsModalVisible(true);
                }}>
            <FontAwesome name="info" size={25} color='#000' />
        </TouchableOpacity>
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
              <Text style={styles.mensagem}>Digite o Preço e a categoria do produto</Text>
              <View style={{flex: 0.5, flexDirection: 'row', gap: 5,}}>
                <Text style={styles.moeda}>R$</Text>
                <TextInput
                    style={styles.preco}
                    onChangeText={precoMuda}
                    value={preco}
                    keyboardType="numeric"
                    placeholder="Agora preço..."
                />
              </View>
              <Button title="Fechar" onPress={fecharModalENavegar} />
            </View>
          </View>
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
        width: 200, // Defina o tamanho desejado para a imagem
        height: 200, // Defina o tamanho desejado para a imagem
    },
    chip: {
        flex: 1,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
      },
      mensagem: {
        fontSize: 17,
      },
      preco: {
        fontSize: 17,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "red",
      },
      moeda: {
        fontSize: 17,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "red",
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
        height: 300,
        elevation: 5,
        gap: 10,
      },
      texto: {
        fontSize: 16,
      }
});