import React, {useState} from "react";
import { Button, View, Text } from "react-native";

function Contador(){
    const[contador, setContador] = useState(0)

    const incrementar = ()=>{
        setContador(contador +1);

    }
    const decrementar = ()=>{
        setContador(contador -1);

    }
    return(
        <View>
            <Text>CONTADOR: {contador}</Text>
            <Button onPress={incrementar} title="incrementar">AQUI</Button>
            <Button onPress={decrementar} title="decrementar">AQUI</Button>

        </View>
    );
}
export default Contador;