import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function EspelharTexto({placeholder, label = 'Você digitou: '}){
    const [texto, setTexto] = useState("");
        // placeholder texto que aparece dentro do TextInput quando vazio
        // label prefixo para o texto exibido após digitar, default = "Você digitou: "
    return(
        <View>
            <TextInput
                placeholder={placeholder} // texto mostrado dentro da caixa quando vazia
                value={texto} // valor controlado pelo estado "texto"
                onChangeText={setTexto} // atualiza o estado sempre que o usuário digita
            />
            <Text>
                {texto.length > 0 ? `${label} ${texto}` : "Nada digitado ainda.."}
            </Text>
            <Button title="Limpar" onPress={() => setTexto("")} />
        </View>
    );
};
export default EspelharTexto;
// a caixinha de digitar está ficando invisível no browser, e não sei o porquê