import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,  
  TouchableOpacity,
  ListView,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  Util from'./Util';
import Item from './Item';
import Comments from './../Comments/show_comment';
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
 class Detail extends Component{
	constructor (){
		super();
	var ds = new ListView.DataSource({
		rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
	});
		this.state = {
			bookData:null,
			unit:null,
		};
	}
	getData(){
		var that = this; 
		const {params} = this.props.navigation.state;
		//alert(params.newsID)
		//var url = "http://39.106.168.133:8080/api/news/search?title=" + params.bookID;
		var url = global.getfetch.url + `news/id${params.newsID}/`;
		Util.getRequest(url,function(data){
			//alert(data.title)
			that.setState({
				bookData:data
			})
		},function(error){
			alert(error);
		}) 
	}
	render(){
		return (
			<ScrollView style={styles.container}>
				{
					this.state.bookData?
						<View>
							<Image source={{uri:this.state.bookData.img_url}}/>
							<View style={styles.titleView}>
								<Text style={styles.title}>{this.state.bookData[0].title}</Text>
							</View>
							<View>
								<Text style={{fontSize:25}}>正文</Text>
								</View>
							<View style={styles.ContentBox}>
								<Text style={styles.text}>{this.state.bookData[0].content}</Text>
							</View>
							<View style={styles.ButtomBox}>
								<Text style={{fontSize:20}}>来源：</Text>
								<Text style={{fontSize:20}}>{this.state.bookData[0].author}</Text>
								</View>
							<View style={{height:55}}>
							</View>
						</View>
					:Util.loading
				}
			</ScrollView>
		);
	}
	componentDidMount(){
		this.getData();
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"white"
	},
	title:{
		fontSize:25,
		marginTop:10,
		marginLeft:10,
		marginBottom:10,
		fontWeight:"bold",
		alignItems:'center',
		alignSelf:'center',
	},
	text:{
		fontSize:20,
		marginLeft :10,
		marginRight:10,
		color:"#000D22"
	},
	common:{
		justifyContent :"center",
	    alignItems : "center"
	},
	titleView:{
		backgroundColor:'rgba(222,222,222,0.8)',
		width:ScreenWidth,
		height:'auto',
	},
	ButtomBox:{

	},
	ContentBox:{
		height:'auto',
		borderWidth:1,
		backgroundColor:'rgba(188,219,241,0.5)',
	},
	HeadBox:{
		
	}
});

export default Detail;