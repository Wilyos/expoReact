import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,{borderRadius:10}]}>
      <Text style={styles.Text}>ola ke ase REact native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35DB25',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DB2596',
    borderWidth:3

  },
  Text:{
    backgroundColor: '#DB2596',
    fontWeight:'bold',
    borderRadius:5
    

  }
});
