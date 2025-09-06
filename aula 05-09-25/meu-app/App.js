import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaViewCom from './components/SafeAreaViewCom';
import ImageComponent from './components/ImageComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageComponent />
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
