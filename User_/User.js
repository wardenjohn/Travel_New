import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	ActivityIndicator,
	StatusBar,
	ART,
	TouchableOpacity,
	PixelRatio,
	ImageBackground,
	LinearGradient,
} from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';
import Personal_set from './../Personal_page/Personal_set.js';
import { StackNavigator } from 'react-navigation';
const {Surface, Group, Shape} = ART;
// import Fresh from './../refresh';
import Diarydetail from './Detail'
import Header from './Header';
import Person from './person';
import Icon from './Icon';
import Login from './login';
import MyComment from './comment';
import MyLike from './like';
import Regiter from './register';
import Write from './writeDiary';
import Diary from './diary';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
class User extends Component { //<Props>
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		statement:false,
			  name:"",
			  list:null,
	  };
	  
	}
	componentWillMount()
	{
		global.statement = false;
		this.setState({statement:false})
	}

	getData(){
		let url = global.getfetch.url + `mark/userid${global.id}`;
		let ops={
		  method:"get",
		}
		fetch(url,ops)
		.then((response)=>{
		  return response.json()
		})
		.then((responseData)=>{
		  //alert(responseData[0].scenicname);
		  this.setState({list:responseData});
		})
		.catch((error)=>{
		  alert(error);
		})
	}

	_coments(){
		this.getData()
		if(this.state.statement == false)
			this.props.navigation.navigate('Profile',{callBack:(data)=>{this.setState({name:data,statement:true})}});
		else
			this.props.navigation.navigate('Comment',{name:this.state.name,list:this.state.list});
	}
	_write(){
		if(this.state.statement == false)
			this.props.navigation.navigate('Profile',{callBack:(data)=>{this.setState({name:data,statement:true})}});
		else
			this.props.navigation.navigate('WriteDiary',{name:this.state.name});
	}

	_checkDiary(){
		if(this.state.statement == false)
			this.props.navigation.navigate('Profile',{callBack:(data)=>{this.setState({name:data,statement:true})}});
		else
			this.props.navigation.navigate('Diary',{name:this.state.name})
	}

	_exit(){
		global.statement = false;
		global.username="";
		this.setState({statement:false})
		this.componentWillMount()
	}
	_s(){
		if (this.state.statement == false)
			alert('请先登录');
		else
			this.props.navigation.navigate('Set', { name: this.state.name });
	}
	render(){
		 const  {navigate} = this.props.navigation;
		return(
			<View style={{flexDirection:"row",}}> 
				<ImageBackground
					style={{width:ScreenWidth,height:ScreenHeight}}
              		// source={require('')}	
				>
					
					<View style={{}}>

						<View style={styles.head}>
							<View style={{ width: ScreenWidth  / 6, marginLeft:ScreenWidth*5/12}}>
								<Text style={styles.font}>
									我的
								</Text>
							</View>
							<View style={{height:35,marginLeft:ScreenWidth/4,width:ScreenWidth/6,alignItems:"center"}}>
								<TouchableOpacity
									onPress={() => this._s()}
								>
									<Image
										style={{height:35,width:35}}
										source={require('./../Image/set.png')} />
								</TouchableOpacity>
							</View>							
						</View>
						<View style={[styles.seperator,{ height: 2}]}></View>
						<View style={[styles.middle, { backgroundColor:"#32cd32"}]}>
							<View style={[styles.person_name,{justifyContent : "center",alignItems :"center",}]}>
								<Image
									style={{width:ScreenWidth/7,height:ScreenHeight/10}}
									source={require('./../Image/head.png')}
								>
								</Image>
							</View>
							<View style={{width:ScreenWidth/5}}></View>
								{
									!this.state.statement?
									<View style={[styles.login,{width:ScreenWidth/2}]}>
										<TouchableOpacity 
											style={{height:50,justifyContent : "center",alignItems :"center",}}
											onPress={()=>{this.props.navigation.navigate('Profile',{callBack:(data)=>{this.setState({name:data,statement:true})}})}}
										>
											{/* <LinearGradient colors={['#FFD801', '#FF8040', '#F75D59']} style={styles.linearGradient}>
												<Text style={{fontSize:20, color: '#fff' }}>
													登陆/注册
  												</Text>
											</LinearGradient> */}
											<Text style={{ fontSize: 20, color:"#f6f5f5"}}>
												登录/注册
											</Text>
										</TouchableOpacity>
									</View>
									:
									<Text style={styles.Name}>
										{this.state.name}
									</Text>
								}
							
						</View>

						<View style={[ { height: 10 }]}></View>
						
						<View style={{height:ScreenHeight/2,backgroundColor:"silver"}}>
							<View style={[styles.func, { backgroundColor: "#e0ffff" }]}>
								<View style={{ left: 0 }}>
									<TouchableOpacity
										style={[styles.func, { paddingLeft: 0, paddingRight: 0 }]}
										onPress={() => this._coments()}
									>
										<View style={{ width: ScreenWidth / 2, flexDirection: "row", }}>
											<View style={{ marginLeft: 20 }}>
												<Image
													style={styles.image}
													source={require('./../Image/recom.png')}
												>
												</Image>
											</View>
											<Text style={{ fontSize: 20, marginLeft: 20 }}>
												我的评论
										</Text>
										</View>
										<View style={{ width: ScreenWidth / 3 }}></View>
										<View style={styles.icon}>
											<View >
												<Icon />
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>

							<View style={styles.seperator}></View>

							<View style={[styles.func, { backgroundColor: "#e0ffff" }]}>
								<View style={{ left: 0 }}>
									<TouchableOpacity
										style={[styles.func, { paddingLeft: 0, paddingRight: 0 }]}
										onPress={() => this._write()}
									>
										<View style={{ width: ScreenWidth / 2, flexDirection: "row", }}>
											<View style={{ marginLeft: 20 }}>
												<Image
													style={styles.image}
													source={require('./../Image/like.png')}
												>
												</Image>
											</View>
											<Text style={{ fontSize: 20, marginLeft: 20 }}>
												写日记
										</Text>
										</View>
										<View style={{ width: ScreenWidth / 3 }}></View>
										<View style={styles.icon}>
											<View >
												<Icon />
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>

							<View style={styles.seperator}></View>

							<View style={[styles.func, { backgroundColor: "#e0ffff" }]}>
								<View style={{ left: 0 }}>
									<TouchableOpacity
										style={[styles.func, { paddingLeft: 0, paddingRight: 0 }]}
										onPress={() => this._checkDiary()}
									>
										<View style={{ width: ScreenWidth / 2, flexDirection: "row", }}>
											<View style={{ marginLeft: 20 }}>
												<Image
													style={styles.image}
													source={require('./../Image/book.png')}
												>
												</Image>
											</View>
											<Text style={{ fontSize: 20, marginLeft: 20 }}>
												旅行日记
										</Text>
										</View>
										<View style={{ width: ScreenWidth / 3 }}></View>
										<View style={styles.icon}>
											<View >
												<Icon />
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>

							<View style={[ { height: 19 }]}></View>

							<View style={[styles.func, { backgroundColor: "#e0ffff" }]}>
								<View style={{ left: 0 }}>
									<TouchableOpacity
										style={[styles.func, { paddingLeft: 0, paddingRight: 0 }]}
										onPress={() => this._coments()}
									>
										<View style={{ width: ScreenWidth / 2, flexDirection: "row", }}>
											<View style={{ marginLeft: 20 }}>
												<Image
													style={styles.image}
													source={require('./../Image/video.png')}
												>
												</Image>
											</View>
											<Text style={{ fontSize: 20, marginLeft: 20 }}>
												音频/视频
										</Text>
										</View>
										<View style={{ width: ScreenWidth / 3 }}></View>
										<View style={styles.icon}>
											<View >
												<Icon />
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>

							<View style={styles.seperator}></View>

							<View style={[styles.func, { backgroundColor: "#e0ffff" }]}>
								<View style={{ left: 0 }}>
									<TouchableOpacity
										style={[styles.func, { paddingLeft: 0, paddingRight: 0 }]}
										onPress={() => alert("张永德/刘海涛/刘陆航 Copyright © 2018 BUCT Computer Science and Engineering")}
									>
										<View style={{ width: ScreenWidth / 2, flexDirection: "row", }}>
											<View style={{ marginLeft: 20 }}>
												<Image
													style={styles.image}
													source={require('./../Image/circle.png')}
												>
												</Image>
											</View>
											<Text style={{ fontSize: 20, marginLeft: 20 }}>
												版权声明
										</Text>
										</View>
										<View style={{ width: ScreenWidth / 3 }}></View>
										<View style={styles.icon}>
											<View >
												<Icon />
											</View>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={{height:15,justifyContent : "center",alignItems :"center"}}></View>
							{
								this.state.statement?
								<View style={[styles.logout,{margin:10}]}>
									<TouchableOpacity 
										style={{height:50,justifyContent : "center",alignItems :"center",}}
										onPress={()=>this._exit()}
									>
										<Text style={{fontSize:20}}>
											退出登录
										</Text>
									</TouchableOpacity>
								</View>
								:
								<View style={{ height: 50, justifyContent: "center", alignItems: "center",}}>
									<Text style={{ fontSize: 25,}}>
										请登录！！！
									</Text>
								</View>
							}
						
					</View>
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  	container: {
     	flex: 1,
    	backgroundColor: '#F5FCFF',
	},
	seperator:{
		backgroundColor:"#292828",
		opacity: 0.5,
		height:1
	},
	Name:{
		color: "#420840", 
		fontSize: 32, 
		fontFamily: "serif", 
		fontStyle: "italic",
	},
	head:{
		flexDirection: "row", 
		backgroundColor: "#f0fff0", 
		height: 50, 
		// justifyContent: "center", 
		alignItems: "center",
	},
  	title_container:{
		flex:1,
		justifyContent : "center",
		alignItems :"center",
		fontSize:20,
	},
	font: {
		color: 'black',
		fontSize: 25,
		fontWeight: 'bold',
		textShadowColor: '#C0C0C0',
		textShadowRadius: 2,
		textShadowOffset: { width: 2, height: 2 },
	},
	image:{
		width:25,
		height:25,
	},
	middle:
	{
		height:110,
		flexDirection:"row",
		alignItems :"center",
	},
   	person_name:{
		width:80,
		height:80,
		borderWidth:2,
		borderRadius:10,
		borderColor:"silver",
		marginLeft:20,
   },
  	func:{
		height:45,
		flexDirection:"row",
		alignItems :"center",
		width:ScreenWidth,
   },
	icon:{
		height: 60,
		width: ScreenWidth / 6, 
		// backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
   	login:{
   		borderWidth:2,
   		borderRadius:10,
   		overflow:"hidden",
		backgroundColor: "#32cd32", // #00B51D
		borderColor:"white",
		height:50,
   },
   	logout:{
	   borderWidth: 2,
	   borderRadius: 10,
	   overflow: "hidden",
	   backgroundColor: "#f1ebeb",
	   borderColor: "#2f3c30",
	   height: 50,
   },
   	text_:{
		textShadowColor:'#000000',
		textShadowRadius:2,
		textShadowOffset:{width:2,height:2},
		fontSize :30,
  },
});
const ModalStack = StackNavigator({
 	Home: {
		screen: User,
		navigationOptions: {
			headerTitle: 
			'我的',
			header:null
    	}
  	},
	Profile: {
		screen: Login,
		navigationOptions: {
			headerTitle:"",
			// header:null
		}
 	},
	Comment: {
		screen:MyComment,
		navigationOptions: {
			headerTitle:
			''
		}
  	},
	MyLike:{
		screen:MyLike,
		navigationOptions: {
			headerTitle:
			''
    	}
  	},
	Reg:{
		screen:Regiter,
		navigationOptions: {
			headerTitle:
			''
		}
	},
	Set:{
		screen: Personal_set,
		navigationOptions: {
			headerTitle:'',
			header:null
		}
	},
	WriteDiary:{
		screen:Write,
		navigationOptions:{
			headerTitle:'写日记',
			
		}
	},
	Diary:{
		screen:Diary,
		navigationOptions:{
			headerTitle:'看日记',
		}
	},
	DiaryDetail:{
		screen:Diarydetail,
		navigationOptions:{
			headerTitle:'详细内容',
		}
	}
});
export default ModalStack;