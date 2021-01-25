import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button, TouchableOpacity,  TextInput} from 'react-native';

export default function App() {
  state={
    text:"",
    todo:[]
  }
  addTodo=()=>{
    var newTodo=this.state.text;
    var arr=this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr,text:""});
  }
  deleteTodo=(t)=>{
    var arr=this.state.todo;
    var pos=arr.indexOf(t);
    arr.slice(pos,1);
    this.setState({todo:arr});
    
  }
  return (
    <View style={styles.container}>
      <Text>hi</Text>
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
