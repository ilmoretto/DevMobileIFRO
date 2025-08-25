import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function EspelharTexto({placeholder, label = 'Você digitou: '}){
    const [texto, setTexto] = useState("");

    return(
        <View>
            <TextInput
                placeholder={placeholder}
                value={texto}
                onChangeText={setTexto}
            />
            <Text>
                {texto.length > 0 ? `${label} ${texto}` : "Nada digitado ainda.."}
            </Text>
            <Button title="Limpar" onPress={() => setTexto("")} />
        </View>
    );
};
export default EspelharTexto;
//teste