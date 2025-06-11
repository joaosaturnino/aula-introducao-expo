import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Atividades() {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades</Text>

      <TouchableOpacity>
        <Text style={styles.botao}>Atividade 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 2</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 3</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 4</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 5</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 6</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Atividade 8</Text>
      </TouchableOpacity>
    </View>
  )
}
