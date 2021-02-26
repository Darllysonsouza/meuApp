import React, { userEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-Text';

export default function App() {
  const [state, setState] = React.useState(0);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <view>
      <Text style={styles.title}>Academia em Casa</Text>
      <Text style={styles.label}>De segunda a quarta (braço e antebraço) </Text>
      <TextInputMask
        style={styles.textInput}
        type={'custom'}
        options={{
        Mask: '(99)' ,
     }}

/>
 <view style={styles.box}>
   <Text style={style.textBox}>
   Para cuidar da saude algumas das maneiras sao: praticando exercicios fisicos, se alimentando bem,
   bebendo agua e dormindo !!

   </Text>
   
   </view>

 <Text style={styles.label}>De quinta a sábado (perna e panturrilha) </Text>
      <StatusBar style="auto" />
      </view>
      </TouchableWithoutFeedback>
    </View>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: '16',
    marginVertical: '40',
  },
  title:{
    fontSize:40,
    fontWeight: 'bold',
    color: '#3C5E45',
  },
  label: { marginTop: 20, fontSize: 18, color: '#515753'},
  textBox: { margin: 20, fontSize: 18, color:'#515753' },
  box: { backgroundColor: '#EBFBEF', marginTop: 20},
  textInput: 40,
    height: 40,
    width: '80%',
    margin: 10,
    color: '#737A75',
    borderColor: '#515753',
    borderBottonWidth: 1,
  },
);
