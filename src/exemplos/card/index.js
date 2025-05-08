import { View, Text, Image} from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';
import img1 from '../../../assets/imagem1.jpg';
import img2 from '../../../assets/imagem2.png';
import img3 from '../../../assets/imagem3.png';
import img4 from '../../../assets/imagem4.jpg';
import Mensagem from './mensagem';

function Exemplo2 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Atividade 2</Text>
                <Image source={img} style={styles.imagem} />

                <Image source={img1} style={styles.imagem} />
                <Mensagem titulo={'Camiseta Tradicional Malwee Masculino'} mensagem={'R$44,90'}/>

                <Image source={img2} style={styles.imagem} />
                <Mensagem
                imagem={img1}
                titulo={'Oversized - Jesus Is King'}
                mensagem={'R$ 97,90'}/>

                <Image source={img3} style={styles.imagem} />
                <Mensagem titulo={'Camiseta Modal tecnológica Básica, confortável e durável.'} mensagem={'R$ 94,90'}/>

                <Image source={img4} style={styles.imagem} />
                <Mensagem titulo={'Camiseta No Coffee.'} mensagem={'R$ 39,90'}/>
        </View>
    );


}


export default Exemplo2;
