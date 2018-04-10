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
export default class show_comment extends Component<Props> {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	statement:false,
	  	user:"",
	  	id:"",//相应新闻的评论
	  	show:false,
	  	dataSource:null,
	  };
	}
	
	render(){
		return(
			<View>
				<Text>
					hellow
				</Text>
			</View>
		);
	}
}