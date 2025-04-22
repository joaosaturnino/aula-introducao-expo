import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import { parse } from '@babel/core';

function Exemplo5 () {

  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 5</Text>

      <Text style={styles.txtSaida}> Calculadora Básica </Text>

      <Text style={styles.textLabel}>1º número </Text>
      <TextInput
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setNum1(entrada) }
      value={num1}
      />

      <Text style={styles.txtSaida}> + </Text>

      <Text style={styles.textLabel}>2º número </Text>
      <TextInput
      style={styles.txtEntrada}
      onChangeText={ (entrada) => setNum2(entrada) }
      value={num2} />

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
