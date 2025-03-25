import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card (props) {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text style={styles.texto}>{props.mensagem}</Text>
                <Image source={props.camiseta} style={styles.imagem}></Image>

        </View>
    );
}

export default Card;
