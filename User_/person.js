import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
export default class Person extends Component<Props> {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title_container}>
					我的
				</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
     	height :55,
		backgroundColor:"silver",
		justifyContent : "center",
		alignItems :"center",
		padding:15
  },
  title_container:{
		flex:1,
		justifyContent : "center",
		alignItems :"center",
		fontSize:20,
	},
});