import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Soma() {
  const conta = parseInt(num1) + parseInt(num2);
  setTotal(conta.toString());
}
function Exemplo5 () {
  const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);



  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 5</Text>

      <Text style={styles.txtSaida}> Calculadora Básica </Text>

      <Text style={styles.textLabel}>1º número </Text>
      <TextInput
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setNum1(entrada) }
      value={num1.toString()}
      />

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.textLabel}>2º número </Text>
      <TextInput
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setNum2(entrada) }
      value={num2.toString()} />

      <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

      <Text style={styles.textLabel}> Total </Text>
      <TextInput
      style={styles.txtEntrada}
      editable={false}
      value={total} />

      <TouchableOpacity style={styles.button} onPress={() => Soma()}>
        <Text style={styles.textButton}> + </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Exemplo5;
