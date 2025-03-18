import { View, Text } from 'react-native';

import styles from './styles';

function Mensagem (props) {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.mensagem}</Text>

      <Mensagem titulo={'ERRO'} mensagem={'Você não clicou corretamente!'}/>
      <Mensagem titulo={'SUCESSO'} mensagem={'Acesso Permitido!'}/>
      <Mensagem titulo={'SAVISO'} mensagem={'O tempo acabou'}/>
    </View>
  )
}

export default Mensagem;
