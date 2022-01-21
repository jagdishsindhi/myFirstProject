import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={{color: '#fff'}}> Registration Page</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput placeholderTextColor={'black'} placeholder='username' backgroundColor='white'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:90,
  },
});