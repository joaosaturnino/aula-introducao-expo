import { View, Text, Image} from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';
import img1 from '../../../assets/imagem1.jpg';
import img2 from '../../../assets/imagem2.png';
import img3 from '../../../assets/imagem3.png';
import img4 from '../../../assets/imagem4.jpg';
import Card from './card';

function Atividade2 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Atividade 2</Text>
                <Image source={img} style={styles.imagem} />

                <Card
                camiseta={img1}
                titulo={'Camiseta Tradicional Malwee Masculino'}
                mensagem={'R$44,90'}/>


                <Card
                camiseta={img2}
                titulo={'Oversized - Jesus Is King'}
                mensagem={'R$ 97,90'}/>

                <Card
                camiseta={img3}
                titulo={'Camiseta Modal tecnológica Básica, confortável e durável.'}
                mensagem={'R$ 94,90'}/>

                <Card
                imagem={img4}
                titulo={'Camiseta No Coffee.'}
                mensagem={'R$ 39,90'}/>
        </View>
    );


}


export default Atividade2;
