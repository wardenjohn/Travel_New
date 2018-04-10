import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  TextInput,

} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Home_list extends Component<Props> {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return(
		<View style={styles.container}>
	        <View style={{margin:5}}>
	          <TextInput style={styles.input} {...this.props} />  
	        </View>
      	</View>
		);
	}

}
const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
  	fontSize:10,
	height:ScreenHeight/18,
	width:ScreenWidth/1.3,
	borderRadius:10,
	// borderWidth:1,
	color:"#6a6f77",
  }
  
});