import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Exemplos() {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplos</Text>

      <TouchableOpacity>
        <Text style={styles.botao}>Exemplo 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 2</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 3</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 4</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 5</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 6</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 7</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.botao}>Exemplo 8</Text>
      </TouchableOpacity>
    </View>
  )
}
