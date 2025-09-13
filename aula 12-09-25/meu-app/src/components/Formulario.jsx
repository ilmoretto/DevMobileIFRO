import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from '../styles/globalStyles';

export default function Formulario() {
    //states
    const [nome, setNome] = useState('');
    const [nomeError, setNomeError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');


    // actions
    const validateForm = () => {
        let isValid = true;

        if (!nome.trim()) {//
            setNomeError('O nome é obrigatório.');
            isValid = false;
        } else {
            setNomeError('');
        }
        return isValid;
    }

    const validateEmail = (email) => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {//
            setEmailError('O email é obrigatório.');
            isValid = false;
        } else {
            setEmailError('');
        }
        return isValid;
    }

    const handleSubmit = () => {

        if (validateForm()) {
            const dados = { nome };
            console.log("Dados do formulário válidos:", dados);
            Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
            alert("Sucesso!!!");

            // Limpar o formulário
            setNome('');

        } else {
            Alert.alert('Erro', 'Formulário enviado com erro!');
            alert("Algum campo vazio PORRAAAAAAAA222!!!");

        }
    };
    const handleEmailChange = (text) => {
        if (!validateEmail(text)) {
            const dados = { email };
            console.log("Dados do formulário válidos", dados);
            Alert.alert('Sucesso', 'Email enviado com sucesso!');
            alert("Sucesso!!!");

            // Limpar o formulário
            setEmail(text);
        } else {
            Alert.alert('Erro', 'Formulário enviado com erro!');
            alert("Algum campo vazio PORRAAAAAAAA!!!");
        }

    }





    // visualizacao
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.scrollContent}>
                <Text style={globalStyles.title}>Formulário</Text>
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomeError && globalStyles.inputError]}
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}

                    ></TextInput>
                    {nomeError ? <Text style={globalStyles.errorText}>{nomeError}</Text> : null}

                </View>
                <View>
                    <TextInput
                        style={[globalStyles.input, emailError && globalStyles.inputError]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}


                    ></TextInput>
                    {emailError ? <Text style={globalStyles.errorText}>{emailError}</Text> : null}
                </View>
                <TouchableOpacity style={globalStyles.button} onPress={[handleSubmit, handleEmailChange]}>
                    <Text style={globalStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>



            </View>

        </View>
    );
}