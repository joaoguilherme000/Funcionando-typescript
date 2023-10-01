import Lista from '../components/Lista';
import CameraComponent from "../components/CameraComponent";
import { useNavigation } from '@react-navigation/native';


export default function TelaCamera() {
  const navigation = useNavigation()

  return (
    <>
        <CameraComponent/>
        <Lista/>
    </>
  );
}
