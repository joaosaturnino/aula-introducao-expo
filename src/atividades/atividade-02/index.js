import { View, Text, Image } from 'react-native';

import styles from './styles';

import Card from './card';

import img1 from '../../../assets/imagem1.jpg';
import img2 from '../../../assets/imagem2.png';
import img3 from '../../../assets/imagem3.png';
import img4 from '../../../assets/imagem4.jpg';


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Path Store</Text>
            <Card titulo={'Camiseta Branca'} img={img1} valor={'50,00'}>Camisa lisa branca.</Card>
            <Card titulo={'Camiseta Azul'} img={img2} valor={'90,00'}>Camisa lisa azul.</Card>
            <Card titulo={'Camiseta Vermelha'} img={img3} valor={'70,00'}>Camisa lisa vermelha.</Card>
            <Card titulo={'Camiseta Verde Musgo'} img={img4} valor={'60,00'}>Camisa lisa verde musgo.</Card>
        </View>
    );
}

export default Atividade2;
