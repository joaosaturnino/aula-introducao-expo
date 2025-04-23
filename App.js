import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';

import Constants from 'expo-constants';

// Exemplos
import Exemplo1 from './src/exemplos/ex-01'
import Atividade1 from './src/atividades/atividade-01';
import Exemplo2 from './src/exemplos/ex-02';
import Camiseta from './src/exemplos/card';
import Atividade2 from './src/atividades/atividade-02/index';
import Exemplo3 from './src/exemplos/ex-03';
import Atividade3 from './src/atividades/atividade-03';
import Exemplo4 from './src/exemplos/ex-04';
import Atividade4 from './src/atividades/atividade-04';
import Exemplo5 from './src/exemplos/ex-05';

// Atividades

export default function App() {

  return (
    <View style={styles.container}>
      <Exemplo5/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight || 8,
  },
});
