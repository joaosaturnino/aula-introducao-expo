import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useState } from "react";

import styles from "./styles";



function Atividade4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtInserido2, setTxtInserido2] = useState('');
  const[txtExibido, setTxtExibido] = useState('');

  return (

    <View style={styles.container}>


      <Text style={styles.titulo}>Atividade 4</Text>
      <Text styles={styles.texto}> NOME </Text>
      <TextInput style={styles.input}
        onChangeText={(valor) =>setTxtInserido(valor)}
        value={txtInserido}
        />

      <Text styles={styles.texto}> SOBRENOME </Text>
      <TextInput style={styles.input}
        onChangeText={(valor) =>setTxtInserido2(valor)}
        value={txtInserido2}
        />

      <Text styles={styles.texto}> {txtExibido} </Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido + ' ' + txtInserido2);
          setTxtInserido('');
          setTxtInserido2('');
        }}>
        <Text style={styles.txtBotao}>Exibir nome completo
        </Text>

        </TouchableOpacity>

    </View>

  );
}

export default Atividade4;
