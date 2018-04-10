import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,  
  TouchableOpacity
} from 'react-native';

export default class BookItem extends Component{
	constructor(props) {

	  super(props);
	}
	render(){
		var book = this.props.book;
		return(
			<TouchableOpacity style={styles.item} {...this.props}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{uri:book.img_url}}/>
				</View>

				<View style={styles.contentContainer}>
					<View style={styles.textContainer}>
						<Text numberOfLine={1}>{book.title}</Text>
					</View>		
					<View style={styles.textContainer}>
						<Text style={styles.publisher_author}>{book.release_time}</Text>
					</View>	
					<View style={styles.textContainer}>
						<Text tyle={styles.publisher_author}>{book.author}</Text>
					</View>	
					<View style={{flexDirection :"row",flex:1,alignItems : "center"}}>
						<Text>{book.price}</Text>
						<Text>{book.pages}</Text>
					</View>							
				</View>
			</TouchableOpacity>

			);
	}
}

var styles=StyleSheet.create({
	item:{
		flexDirection :"row",
	    height :120,
	    padding :10
  	},
  	imageContainer:{
	    justifyContent :"center",
	    alignItems : "center"
  	},
  	image:{
	    width:80,
	    height :100,
	},
	contentContainer:{
    	flex:1,
    	marginLeft:15
  	},
  	textContainer:{
  		flex:1,
  		justifyContent :"center",
  	},
  	publisher_author:{
  		color:"#A3A3A3",
  		fontSize:13
  	},
  	price:{
  		color:"#2BB2A3",
  		fontSize:16
  	},
  	pages:{
  		marginLeft:10,
  		color:"#A7A0A0"
  	}

});