
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import BottomView from './src/BottomView';
import TopView from './src/TopView';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text  style={{color: '#fff'}}> Registration Page</Text>
    //   <Image
    //     source={{
    //       uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //     }}
    //     style={{ width: 200, height: 200 }}
    //   />
    //   <TextInput placeholderTextColor={'white'} placeholder='username' />
    // </View>
    <>
      <TopView/>
      <BottomView/>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
