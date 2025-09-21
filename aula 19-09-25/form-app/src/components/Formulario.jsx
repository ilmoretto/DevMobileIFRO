import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Alert, ScrollViewBase, KeyboardAvoidingView,
    ScrollView
} from "react-native";
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
    const [confirmarsenha, setConfirmarSenha] = useState('');
    const [confirmarsenhaError, setConfirmarsenhaError] = useState('');

    // actions
    const validateForm = () => {
        let isValid = true;
        // Nome
        if (!nome.trim()) {
            setNomeError('O nome é obrigatório.');
            isValid = false;
        } else {
            const regexNome = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/
            const nomeValido = nome.trim().replace(/\s+/g, ' ');

            if (!regexNome.test(nomeValido)) {
                setNomeError('Informe um nome completo válido.');
                isValid = false;
            } else {
                setNomeError('');
            }
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
            const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
            const dataValida = regexData.test(dataNasc.trim());
            if (!dataValida) {
                setDataNascError('Informe uma data válida (DD/MM/AAAA).');
                isValid = false;
            } else {
                setDataNascError('');
            }
        }
        // CPF
        if (!cpf.trim()) {
            setCpfError('O CPF é obrigatório.');
            isValid = false;
        } else {
            const cleanCpf = cpf.replace(/\D/g, '');
            if (!validarCPF(cleanCpf)) {
                setCpfError('tomar no cool, acerta essa porra de cpf.');
                isValid = false;
            } else {
                setCpfError('');
            }
        }
        // Telefone Fixo
        if (!telefoneFixo.trim()) {
            setTelefoneFixoError('O telefone fixo é obrigatório.');
            isValid = false;
        } else {
            const regexTelefone = /^\(\d{2}\)\s\d{4}-\d{4}$/
            const telefoneValido = regexTelefone.test(telefoneFixo.trim());
            if (!telefoneValido) {
                setTelefoneFixoError('Informe um telefone fixo válido. (XX) XXXX-XXXX');
                isValid = false;
            } else {
                setTelefoneFixoError('');
            }

        }
        // Celular
        if (!celular.trim()) {
            setCelularError('O celular é obrigatório.');
            isValid = false;
        } else {
            const regexCelular = /^\(\d{2}\)\s\d{5}-\d{4}$/
            const celularValido = regexCelular.test(celular.trim());
            if (!celularValido) {
                setCelularError('Informe um celular válido. (XX) XXXXX-XXXX');
                isValid = false;
            } else {
                setCelularError('');
            }

        }
        // Nome do Pai
        if (!nomePai.trim()) {
            setNomePaiError('O nome do pai é obrigatório.');
            isValid = false;
        } else {
            const regexNomePai = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/
            const nomePaiValido = nomePai.trim().replace(/\s+/g, ' ');

            if (!regexNomePai.test(nomePaiValido)) {
                setNomePaiError('Informe um nome completo válido.');
                isValid = false;
            } else {
                setNomePaiError('');
            }
        }
        // Nome da Mãe
        if (!nomeMae.trim()) {
            setNomeMaeError('O nome da mãe é obrigatório.');
            isValid = false;
        } else {
            const regexNomeMae = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/
            const nomeMaeValido = nomeMae.trim().replace(/\s+/g, ' ');

            if (!regexNomeMae.test(nomeMaeValido)) {
                setNomeMaeError('Informe um nome completo válido.');
                isValid = false;
            } else {
                setNomeMaeError('');
            }
        }
        // CEP
        if (!cep.trim()) {
            setCepError('O CEP é obrigatório.');
            isValid = false;
        } else {
            const regexCep = /^\d{5}-\d{3}$/
            const cepValido = regexCep.test(cep.trim());
            if (!cepValido) {
                setCepError('Informe um CEP válido. XXXXX-XXX');
                isValid = false;
            } else {
                setCepError('');
            }
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
        // Confirmar Senha
        if (!confirmarsenha.trim()) {
            setConfirmarsenhaError('A confirmação de senha é obrigatória.');
            isValid = false;
        } else if (confirmarsenha !== senha) {
            setConfirmarsenhaError('As senhas não coincidem.');
            isValid = false;
        }

        return isValid;
    };


    const handleSubmit = () => {
        if (validateForm()) {
            const dados = {
                nome, email, dataNasc, cpf, telefoneFixo, celular, nomePai,
                nomeMae, cep, endereco, numero, complemento, cidade, estado,
                emailConta, senha,
            };

            console.log("Dados do formulário válidos:", dados);
            Alert.alert('Sucesso', 'Formulário enviado com sucesso!');
            alert("Sucesso!!!"); // Opcional: já usamos Alert

            // Limpar o formulário
            setNome(''); setEmail(''); setDataNasc(''); setCpf(''); setTelefoneFixo('');
            setCelular(''); setNomePai(''); setNomeMae(''); setCep(''); setEndereco('');
            setNumero(''); setComplemento(''); setCidade(''); setEstado(''); setEmailConta('');
            setSenha('');

            // Limpar também os erros
            setNomeError(''); setEmailError(''); setDataNascError(''); setCpfError('');
            setTelefoneFixoError(''); setCelularError(''); setNomePaiError(''); setNomeMaeError('');
            setCepError(''); setEnderecoError(''); setNumeroError(''); setComplementoError('');
            setCidadeError(''); setEstadoError(''); setEmailContaError(''); setSenhaError('');

        } else {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios corretamente!');
            // alert("Algum campo vazio ou inválido!"); // Opcional
        }
    };

    // funcoes

    // Validação de CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf === '') return false;

        // Elimina CPFs inválidos conhecidos
        if (
            cpf.length !== 11 ||
            cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999"
        ) {
            return false;
        }

        // Valida 1º dígito
        let add = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i), 10) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(9), 10)) return false;

        // Valida 2º dígito
        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i), 10) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) rev = 0;
        if (rev !== parseInt(cpf.charAt(10), 10)) return false;

        return true;
    }

    // MASKARAS

    //maskara de cpf
    function maskaraCPF(cpf) {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
    }

    //maskara de telefone
    function maskaraTelefone(telefone) {
        telefone = telefone.replace(/\D/g, "");
        telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
        telefone = telefone.replace(/(\d{4})(\d)/, "$1-$2");
        telefone = telefone.replace(/(\d{4})-(\d)(\d{4})$/, "$1$2-$3");
        return telefone;
    }
    // maskara celular
    function maskaraCelular(celular) {
        celular = celular.replace(/\D/g, "");
        celular = celular.replace(/(\d{2})(\d)/, "($1) $2");
        celular = celular.replace(/(\d{5})(\d)/, "$1-$2");
        celular = celular.replace(/(\d{5})-(\d)(\d{4})$/, "$1$2-$3");
        return celular;
    }
    //maskara data
    function maskaraData(data) {
        data = data.replace(/\D/g, "");
        data = data.replace(/(\d{2})(\d)/, "$1/$2");
        data = data.replace(/(\d{2})(\d)/, "$1/$2");
        return data;
    }
    //maskara cep
    function maskaraCEP(cep) {
        cep = cep.replace(/\D/g, "");
        cep = cep.replace(/(\d{5})(\d)/, "$1-$2");
        return cep;
    }


    // visualizacao
    return (

        <View style={globalStyles.container}>
            <ScrollView contentContainerStyle={globalStyles.scrollContainer}>

                <Text style={globalStyles.title}>ah vao se foder porra</Text>

                {/* Nome */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomeError && globalStyles.inputError]}
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={(text) => {
                            setNome(String(text));
                        }}
                    />
                    {nomeError && <Text style={globalStyles.errorText}>{nomeError}</Text>}
                </View>


                {/* Data de Nascimento */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, dataNascError && globalStyles.inputError]}
                        placeholder="Data de Nascimento"
                        value={dataNasc}
                        onChangeText={(text) => setDataNasc(maskaraData(text))}
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    {dataNascError ? <Text style={globalStyles.errorText}>{dataNascError}</Text> : null}
                </View>

                {/* CPF */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cpfError && globalStyles.inputError]}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={(text) => setCpf(maskaraCPF(text))}
                        keyboardType="numeric"
                        maxLength={14}
                    />
                    {cpfError ? <Text style={globalStyles.errorText}>{cpfError}</Text> : null}
                </View>

                {/* Telefone Fixo */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, telefoneFixoError && globalStyles.inputError]}
                        placeholder="Telefone Fixo"
                        value={telefoneFixo}
                        onChangeText={(text) => setTelefoneFixo(maskaraTelefone(text))}
                        keyboardType="numeric"
                        maxLength={14}
                    />
                    {telefoneFixoError && <Text style={globalStyles.errorText}>{telefoneFixoError}</Text>}
                </View>

                {/* Celular */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, celularError && globalStyles.inputError]}
                        placeholder="Celular"
                        value={celular}
                        onChangeText={(text) => setCelular(maskaraCelular(text))}
                        keyboardType="numeric"
                        maxLength={15}
                    />
                    {celularError && <Text style={globalStyles.errorText}>{celularError}</Text>}
                </View>

                {/* Nome do Pai */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomePaiError && globalStyles.inputError]}
                        placeholder="Nome do Pai"
                        value={nomePai}
                        onChangeText={setNomePai}
                    />
                    {nomePaiError && <Text style={globalStyles.errorText}>{nomePaiError}</Text>}
                </View>

                {/* Nome da Mãe */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, nomeMaeError && globalStyles.inputError]}
                        placeholder="Nome da Mãe"
                        value={nomeMae}
                        onChangeText={setNomeMae}
                    />
                    {nomeMaeError && <Text style={globalStyles.errorText}>{nomeMaeError}</Text>}
                </View>

                {/* CEP */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cepError && globalStyles.inputError]}
                        placeholder="CEP"
                        value={cep}
                        onChangeText={(text) => setCep(maskaraCEP(text))}
                        keyboardType="numeric"
                        maxLength={9}
                    />
                    {cepError && <Text style={globalStyles.errorText}>{cepError}</Text>}
                </View>

                {/* Endereço */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, enderecoError && globalStyles.inputError]}
                        placeholder="Endereço"
                        value={endereco}
                        onChangeText={setEndereco}
                    />
                    {enderecoError && <Text style={globalStyles.errorText}>{enderecoError}</Text>}
                </View>

                {/* Número */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, numeroError && globalStyles.inputError]}
                        placeholder="Número"
                        value={numero}
                        onChangeText={setNumero}
                        keyboardType="numeric"
                        maxLength={10}

                    />
                    {numeroError && <Text style={globalStyles.errorText}>{numeroError}</Text>}
                </View>

                {/* Complemento */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, complementoError && globalStyles.inputError]}
                        placeholder="Complemento (opcional)"
                        value={complemento}
                        onChangeText={setComplemento}
                    />
                    {complementoError && <Text style={globalStyles.errorText}>{complementoError}</Text>}
                </View>

                {/* Cidade */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, cidadeError && globalStyles.inputError]}
                        placeholder="Cidade"
                        value={cidade}
                        onChangeText={setCidade}
                    />
                    {cidadeError && <Text style={globalStyles.errorText}>{cidadeError}</Text>}
                </View>

                {/* Estado */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, estadoError && globalStyles.inputError]}
                        placeholder="Estado"
                        value={estado}
                        onChangeText={setEstado}
                    />
                    {estadoError && <Text style={globalStyles.errorText}>{estadoError}</Text>}
                </View>

                {/* Email da Conta */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, emailContaError && globalStyles.inputError]}
                        placeholder="Email da Conta"
                        value={emailConta}
                        onChangeText={setEmailConta}
                    />
                    {emailContaError && <Text style={globalStyles.errorText}>{emailContaError}</Text>}
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
                    {senhaError && <Text style={globalStyles.errorText}>{senhaError}</Text>}
                </View>

                {/* Confirmar Senha */}
                <View style={globalStyles.inputContainer}>
                    <TextInput
                        style={[globalStyles.input, confirmarsenhaError && globalStyles.inputError]}
                        placeholder="Confirmar senha"
                        secureTextEntry={true}
                        value={confirmarsenha}
                        onChangeText={setConfirmarSenha}
                    />
                    {confirmarsenhaError && <Text style={globalStyles.errorText}>{confirmarsenhaError}</Text>}
                </View>

                {/* Botão Enviar */}
                <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                    <Text style={globalStyles.buttonText}>Enviar</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    );


}