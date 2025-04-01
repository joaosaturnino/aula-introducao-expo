import { View, Text, Button } from 'react-native';

import styles from './styles';

function Exemplo3 () {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 3</Text>
      <Text style={styles.texto}>Variáveis vs State</Text>
      <Button
      onPress={() => {}}
      title="Alerta"
      color="deepskyblue"
      accessibilityLabel="Mensagem de alerta"
      />
    </View>
  )
}

export default Exemplo3;
