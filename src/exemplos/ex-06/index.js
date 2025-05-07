import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Exemplo6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    function mensagemImc(imc) {
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Obesidade Grau I';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Obesidade Grau II';
        } else if (imc >= 40) {
            return 'Obesidade Grau III';
        } else {
            return 'Valores inseridos de forma incorreta!';
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>



            <Botao calcular={calculaImc}>Calcular</Botao>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagemImc(imc)}</Text>
        </View>
    )
}
