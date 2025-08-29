import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import calculadoraStyles from '../styles/calcStyles';

const CalculadoraSimples = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const somar = () => {
        const n1 = parseFloat(numero1);
        const n2 = parseFloat(numero2);

        if (!isNaN(n1) && !isNaN(n2)) {
            setResultado(n1 + n2);
        } else {
            setResultado('Entrada inválida');
        }
    };

    return (
        <View style={calculadoraStyles.estrutura}>
            <Text style={calculadoraStyles.title}>Calculadora de Adição</Text>
            <TextInput
                style={calculadoraStyles.input}
                placeholder="1º Número" value={numero1}
                onChangeText={setNumero1}
            />
            <TextInput
                style={calculadoraStyles.input}
                placeholder="2º Número" value={numero2}
                onChangeText={setNumero2}
            />
            <Text style={calculadoraStyles.resultado}>{`Resultado: ${resultado}`}</Text>

            <View style={calculadoraStyles.button}>
                <Button title="Calcular" onPress={somar} />
                <Button title='Limpar' onPress={() => {
                    setNumero1(''); setNumero2('');
                    setResultado('');
                }} />

            </View>
        </View>
    );
};

export default CalculadoraSimples;
