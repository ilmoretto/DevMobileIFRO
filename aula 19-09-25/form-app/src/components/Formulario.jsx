import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from '../styles/globalStyles';

export default function Formulario() {
    //states
    const [nome, setNome] = useState('');
    const [nomeError, setNomeError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [dataNasc, setDataNasc] = useState('')
    const [dataNascError, setDataNascError] = useState('')
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [telefoneFixo, setTelefoneFixo] = useState('');
    const [telefoneFixoError, setTelefoneFixoError] = useState('');
    const [celular, setCelular] = useState('');
    const [celularError, setCelularError] = useState('');
    const [nomePai, setNomePai] = useState('');
    const [nomePaiError, setNomePaiError] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [nomeMaeError, setNomeMaeError] = useState('');

    // Endereço
    const [cep, setCep] = useState('');
    const [cepError, setCepError] = useState('');
    const [endereco, setEndereco] = useState('');
    const [enderecoError, setEnderecoError] = useState('');
    const [numero, setNumero] = useState('');
    const [numeroError, setNumeroError] = useState('');
    const [complemento, setComplemento] = useState('');
    const [complementoError, setComplementoError] = useState('');
    const [cidade, setCidade] = useState('');
    const [cidadeError, setCidadeError] = useState('');
    const [estado, setEstado] = useState('');
    const [estadoError, setEstadoError] = useState('');

    // Informações da Conta
    const [emailConta, setEmailConta] = useState('');
    const [emailContaError, setEmailContaError] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaError, setSenhaError] = useState('');




    // actions
    const validateForm = () => {
        let isValid = true;

        // Nome
        if (!nome.trim()) {
            setNomeError('O nome é obrigatório.');
            isValid = false;
        } else {
            setNomeError('');
        }

        // Email
        if (!email.trim()) {
            setEmailError('O email é obrigatório.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Data de Nascimento
        if (!dataNasc.trim()) {
            setDataNascError('A data de nascimento é obrigatória.');
            isValid = false;
        } else {
            setDataNascError('');
        }

        // CPF
        if (!cpf.trim()) {
            setCpfError('O CPF é obrigatório.');
            isValid = false;
        } else {
            setCpfError('');
        }

        // Telefone Fixo
        if (!telefoneFixo.trim()) {
            setTelefoneFixoError('O telefone fixo é obrigatório.');
            isValid = false;
        } else {
            setTelefoneFixoError('');
        }

        // Celular
        if (!celular.trim()) {
            setCelularError('O celular é obrigatório.');
            isValid = false;
        } else {
            setCelularError('');
        }

        // Nome do Pai
        if (!nomePai.trim()) {
            setNomePaiError('O nome do pai é obrigatório.');
            isValid = false;
        } else {
            setNomePaiError('');
        }

        // Nome da Mãe
        if (!nomeMae.trim()) {
            setNomeMaeError('O nome da mãe é obrigatório.');
            isValid = false;
        } else {
            setNomeMaeError('');
        }

        // CEP
        if (!cep.trim()) {
            setCepError('O CEP é obrigatório.');
            isValid = false;
        } else {
            setCepError('');
        }

        // Endereço
        if (!endereco.trim()) {
            setEnderecoError('O endereço é obrigatório.');
            isValid = false;
        } else {
            setEnderecoError('');
        }

        // Número
        if (!numero.trim()) {
            setNumeroError('O número é obrigatório.');
            isValid = false;
        } else {
            setNumeroError('');
        }

        // Complemento (opcional) → não valida

        // Cidade
        if (!cidade.trim()) {
            setCidadeError('A cidade é obrigatória.');
            isValid = false;
        } else {
            setCidadeError('');
        }

        // Estado
        if (!estado.trim()) {
            setEstadoError('O estado é obrigatório.');
            isValid = false;
        } else {
            setEstadoError('');
        }

        // Email da Conta
        if (!emailConta.trim()) {
            setEmailContaError('O email da conta é obrigatório.');
            isValid = false;
        } else {
            setEmailContaError('');
        }

        // Senha
        if (!senha.trim()) {
            setSenhaError('A senha é obrigatória.');
            isValid = false;
        } else {
            setSenhaError('');
        }

        return isValid;
    };


    const handleSubmit = () => {
        if (validateForm()) {
            const dados = {
                nome,
                email,
                dataNasc,
                cpf,
                telefoneFixo,
                celular,
                nomePai,
                nomeMae,
                cep,
                endereco,
                numero,
                complemento,
                cidade,
                estado,
                emailConta,
                senha,
            };

            console.log("Dados do formulário válidos:", dados);
            Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
            alert("Sucesso!!!"); // Opcional: já usamos Alert

            // Limpar o formulário
            setNome('');
            setEmail('');
            setDataNasc('');
            setCpf('');
            setTelefoneFixo('');
            setCelular('');
            setNomePai('');
            setNomeMae('');
            setCep('');
            setEndereco('');
            setNumero('');
            setComplemento('');
            setCidade('');
            setEstado('');
            setEmailConta('');
            setSenha('');

            // Limpar também os erros
            setNomeError('');
            setEmailError('');
            setDataNascError('');
            setCpfError('');
            setTelefoneFixoError('');
            setCelularError('');
            setNomePaiError('');
            setNomeMaeError('');
            setCepError('');
            setEnderecoError('');
            setNumeroError('');
            setComplementoError('');
            setCidadeError('');
            setEstadoError('');
            setEmailContaError('');
            setSenhaError('');

        } else {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios corretamente!');
            alert("Algum campo vazio ou inválido!"); // Opcional
        }
    };

    // visualizacao
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.scrollContent}>
                <Text style={globalStyles.title}>Formulário</Text>

                {/* Nome */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomeError && globalStyles.inputError]}
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}
                    />
                    {nomeError ? <Text style={globalStyles.errorText}>{nomeError}</Text> : null}
                </View>

                {/* Data de Nascimento */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, dataNascError && globalStyles.inputError]}
                        placeholder="Data de Nascimento"
                        value={dataNasc}
                        onChangeText={setDataNasc}
                    />
                    {dataNascError ? <Text style={globalStyles.errorText}>{dataNascError}</Text> : null}
                </View>

                {/* CPF */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cpfError && globalStyles.inputError]}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                    {cpfError ? <Text style={globalStyles.errorText}>{cpfError}</Text> : null}
                </View>

                {/* Telefone Fixo */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, telefoneFixoError && globalStyles.inputError]}
                        placeholder="Telefone Fixo"
                        value={telefoneFixo}
                        onChangeText={setTelefoneFixo}
                    />
                    {telefoneFixoError ? <Text style={globalStyles.errorText}>{telefoneFixoError}</Text> : null}
                </View>

                {/* Celular */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, celularError && globalStyles.inputError]}
                        placeholder="Celular"
                        value={celular}
                        onChangeText={setCelular}
                    />
                    {celularError ? <Text style={globalStyles.errorText}>{celularError}</Text> : null}
                </View>

                {/* Nome do Pai */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomePaiError && globalStyles.inputError]}
                        placeholder="Nome do Pai"
                        value={nomePai}
                        onChangeText={setNomePai}
                    />
                    {nomePaiError ? <Text style={globalStyles.errorText}>{nomePaiError}</Text> : null}
                </View>

                {/* Nome da Mãe */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomeMaeError && globalStyles.inputError]}
                        placeholder="Nome da Mãe"
                        value={nomeMae}
                        onChangeText={setNomeMae}
                    />
                    {nomeMaeError ? <Text style={globalStyles.errorText}>{nomeMaeError}</Text> : null}
                </View>

                {/* CEP */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cepError && globalStyles.inputError]}
                        placeholder="CEP"
                        value={cep}
                        onChangeText={setCep}
                    />
                    {cepError ? <Text style={globalStyles.errorText}>{cepError}</Text> : null}
                </View>

                {/* Endereço */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, enderecoError && globalStyles.inputError]}
                        placeholder="Endereço"
                        value={endereco}
                        onChangeText={setEndereco}
                    />
                    {enderecoError ? <Text style={globalStyles.errorText}>{enderecoError}</Text> : null}
                </View>

                {/* Número */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, numeroError && globalStyles.inputError]}
                        placeholder="Número"
                        value={numero}
                        onChangeText={setNumero}
                    />
                    {numeroError ? <Text style={globalStyles.errorText}>{numeroError}</Text> : null}
                </View>

                {/* Complemento */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, complementoError && globalStyles.inputError]}
                        placeholder="Complemento (opcional)"
                        value={complemento}
                        onChangeText={setComplemento}
                    />
                    {complementoError ? <Text style={globalStyles.errorText}>{complementoError}</Text> : null}
                </View>

                {/* Cidade */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cidadeError && globalStyles.inputError]}
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={setCidade}
                    />
                    {cidadeError ? <Text style={globalStyles.errorText}>{cidadeError}</Text> : null}
                </View>

                {/* Estado */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, estadoError && globalStyles.inputError]}
                        placeholder="Estado"
                        value={estado}
                        onChangeText={setEstado}
                    />
                    {estadoError ? <Text style={globalStyles.errorText}>{estadoError}</Text> : null}
                </View>

                {/* Email da Conta */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, emailContaError && globalStyles.inputError]}
                        placeholder="Email da Conta"
                        value={emailConta}
                        onChangeText={setEmailConta}
                    />
                    {emailContaError ? <Text style={globalStyles.errorText}>{emailContaError}</Text> : null}
                </View>

                {/* Senha */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, senhaError && globalStyles.inputError]}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    {senhaError ? <Text style={globalStyles.errorText}>{senhaError}</Text> : null}
                </View>

                {/* Botão Enviar */}
                <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                    <Text style={globalStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}