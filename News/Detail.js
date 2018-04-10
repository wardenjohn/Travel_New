import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,  
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import  Util from'./Util';
import Item from './Item';
import Comments from './../Comments/show_comment';
import './../globalcontent.js'
 class Detail extends Component{
	constructor (){
		super();
	var ds = new ListView.DataSource({
		rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
	});
		this.state = {
			bookData:null,
		};
	}
	getData(){
		var that = this; 
		const {params} = this.props.navigation.state;
		//var url = "http://39.106.168.133:8080/api/news/search?title=" + params.bookID;
		var url = global.getfetch.url + `news/id${params.newsID}/`;
		Util.getRequest(url,function(data){
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
							
							<Item book = {this.state.bookData}/>
							<View>
								<Text style={styles.title}>正文</Text>
								<Text style={styles.text}>{this.state.bookData.content}</Text>
							</View>
							<View style={{marginTop:10}}>
								<Text style={styles.title}>评论</Text>
								<Text style={styles.text}>用户:{global.username}</Text>
							</View>
							{
								global.statement==false?
									<View style={styles.common}>
										<Text>
											登录查看评论
										</Text>
									</View>
									:
									<Comments/>
							}
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
		fontSize:16,
		marginTop:10,
		marginLeft:10,
		marginBottom:10,
		fontWeight:"bold"
	},
	text:{
		marginLeft :10,
		marginRight:10,
		color:"#000D22"
	},
	common:{
		justifyContent :"center",
	    alignItems : "center"
	}
});

export default Detail;