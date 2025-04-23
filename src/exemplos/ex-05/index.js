import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js

import { useState } from "react"; // Importando o hook useState do react

function Exemplo5() {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular() {
    setResultado(parseInt(n1) + parseInt(n2));
    // setResultado(resultado.toString());
  }

  function deletar() {
    setResultado(parseInt(n1) - parseInt(n2));
    // setResultado(resultado.toString());
  }

  function multiplicar() {
    setResultado(parseInt(n1) * parseInt(n2));
    // setResultado(resultado.toString());
  }

  function dividir() {
    setResultado(parseInt(n1) / parseInt(n2));
    // setResultado(resultado.toString());
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Exemplo 5</Text>

      <Text style={styles.txtsaida}>calculadora basica</Text>

      <Text style={styles.txtLabel}>Digite o primeiro número</Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={(entrada) => setN1(entrada)}
        value={n1.toString()}
        KeyboardType='numeric'
      />

      <Text style={styles.txtsaida}>+</Text>

      <Text style={styles.txtLabel}>Digite o segundo número</Text>
      <TextInput style={styles.txtEntrada}
        KeyboardType='numeric'
        onChangeText={(entrada) => setN2(entrada)}
        value={n2.toString()} />

      <Text style={[styles.txtsaida, { margin: 0 }]}>=</Text>

      <Text style={styles.txtLabel}>Resultado</Text>
      <TextInput style={styles.txtEntrada}
        editable={false}
        value={resultado.toString()}
        KeyboardType='numeric'/>


      <TouchableOpacity style={styles.botao} onPress={() => calcular()}>
        <Text style={styles.txtBotao}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => deletar()}>
        <Text style={styles.txtBotao}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => multiplicar()}>
        <Text style={styles.txtBotao}>*</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => dividir()}>
        <Text style={styles.txtBotao}>/</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}
  onPress={() => {
    setN1(''); // Zera o primeiro número
    setN2(''); // Zera o segundo número
    setResultado(''); // Zera o resultado
  }}>
  <Text style={styles.txtBotao}>Zerar</Text>
</TouchableOpacity>








    </View>

  );
}

export default Exemplo5; // Exportando o componente Exemplo1
