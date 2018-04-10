import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Input,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Search extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input} {...this.props} />  
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container:{
    flexDirection :'row',
    justifyContent : 'flex-end',
    alignItems : 'center',
    height:44,
    marginTop:10
  },
  inputContainer:{
    flex:1,
    marginLeft:20,
    marginRight:20
  },
  input:{
    flex:1,
    height:44,
    borderWidth:1,
    borderRadius : 4,
    borderColor:"#CCC",
    paddingLeft : 5
  },
  
});