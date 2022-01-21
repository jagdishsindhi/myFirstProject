import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <TextInput secureTextEntry={true} placeholderTextColor={'black'} placeholder='password'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:50,
    textAlignVertical:'top',
  },
});