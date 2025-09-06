import react from "react"
import {View, Image, Text} from "react-native"
import styles from "./styles"

export default function ImageComponent(){
    return(
        <View style={styles.container}>
            <Image style={styles.imagem}
            source={{uri: "https://picsum.photos/300"}}
            accessible
            accessibilityLabel="imagem de exemplo"
            
            />
        </View>
    )
}
