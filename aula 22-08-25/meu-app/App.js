import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EspelharTexto from "./components/EspelharTexto";

export default function App() {
  return (
    <View style={styles.container}>

        <EspelharTexto></EspelharTexto>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
