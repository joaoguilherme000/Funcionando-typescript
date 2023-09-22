import Lista from '../view/Lista';
import { TouchableOpacity,  } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import CameraComponent from "../components/CameraComponent";
import { useNavigation } from '@react-navigation/native';


export default function TelaCamera() {
  const navigation = useNavigation()

  return (
    <>
        <CameraComponent/>
        <TouchableOpacity style={{ position: 'absolute', bottom: 140, left: 20, padding: 11}}
                        onPress={() => {
                            navigation.navigate('Resultados'); // Navega para a tela "Resultados"
                        }}>
                        <FontAwesome name="info" size={25} color='#000' />
                    </TouchableOpacity>
        <Lista/>
    </>
  );
}
