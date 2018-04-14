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
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchBar from './SearchBar';
import News_Item from './Item';
import Util from './Util';
import Detail from './Detail';
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
 class Home_list extends Component{
	constructor(props) {
	  super(props);
	var ds = new ListView.DataSource({
		rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
	    });
	  this.state = {
	  		show:false,
	  		dataSource:ds,
	  		keywords:"旅游",
	  };
	}
	getData(){
		this.setState({
			show:false
		});
		var that = this; 
		var url = global.getfetch.url + 'news/getnews/'
		Util.getRequest(url,function(data){
				if(!data || data.length==0)
				{
					return alert("未查询到相关信息")
				}
				//设置下载状态和下载数据源	
			var ds = new ListView.DataSource({//创建datasource对象
				rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
			})
			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(data)
			})
		},function(error){
			alert(error);
		}) 
	}
	_search(){
		let url = global.getfetch.url + `getnews/keyword=${this.state.keywords}`;
		var that=this;
		let ops={
			method:"get",
		}
		fetch(url,ops)
		.then((response)=>{
			return response.json();
		})
		.then((responseData)=>{
			var ds=new ListView.DataSource({
				rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
			})
			this.setState({dataSource:ds.cloneWithRows(responseData)})
		})
		.catch((error)=>{
			alert(error);
		})
	}
	render(){
		return(
			<View style={{flexDirection:"row",}}>
				<ImageBackground
					style={{width:ScreenWidth,height:ScreenHeight}}
              		source={require('./../Image/user.jpg')}	
				>
					<View style={{}}>
						<View style={[{},{flexDirection:"row",height:ScreenHeight/10,width:ScreenWidth,}]}>
							<View style={{alignItems: 'center',borderWidth:1,borderRadius:10,},{margin:10,flexDirection:"row",width:ScreenWidth/1.2,}}>
								<TouchableOpacity
									onPress={()=>this._search()}
								>
									<Image
										source={require('./../Image/search.png')} 
										style={{margin:10,}}
									/>
								</TouchableOpacity>
								<SearchBar
									placeholder="输入新闻信息"
									onPress={()=>this._searchPress(this.state.keywords)}	
									onChangeText={(text) => this.setState({keywords:text})}	
								/>
							</View>
						</View>
						<View style={{backgroundColor:"silver",height:1}}>
						</View>
						{
							this.state.show?
							<ListView
								dataSource={this.state.dataSource}
								initialListSize={20}
								renderRow={
									(book)=><News_Item 
												book={book}  
												onPress={()=>{
					 								this.props.navigation.navigate('Profile',{newsID:book.id})
					 							}
					 						}/>
								}
								renderSeperator={this._renderSeperator}
							/>
							:Util.loading
						}
					</View>
				</ImageBackground>
			</View>
		);
	}
	_renderSeperator(sectionID:number,rowID:number){
		var style={
			height:1,
			backgroundColor:"#CCCCCC"
		}
		return <View style={style} key={sectionID+rowID}/>
	}
	componentDidMount(){
		this.getData();
	}
}
const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

const ModalStack = StackNavigator({
 Home: {
    screen: Home_list,
    navigationOptions: {
      	headervisible:false,
      	header:null
    },
    StackNavigatorConfig:{
    	headerMode:'float',
    }
  },
  Profile: {
    screen: Detail,
    navigationOptions: {
      	headerTitle: ''
    }
  }
   
});
export default ModalStack;