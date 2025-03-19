import { View, Text, Image} from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';
import img1 from '../../../assets/imagem1.jpg';
import Mensagem from './mensagem';

function Exemplo2 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Exemplo 2</Text>
                <Image source={img} style={styles.imagem} />
                <Mensagem source={img1} titulo={'Camiseta Tradicional Malwee Masculino'} mensagem={'R$44,90'}/>
                <Mensagem titulo={'SUCESSO'} mensagem={'Acesso permitido'}/>
                <Mensagem titulo={'AVISO'} mensagem={'o tempo acabou'}/>
        </View>
    );
}

export default Exemplo2;
