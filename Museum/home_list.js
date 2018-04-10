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
	ListView,
	Picker,
} from 'react-native';
import './../globalcontent.js'
import { StackNavigator } from 'react-navigation';
import Museum_Introduction from './Museum_Introduction.js';
import Collect from './Collection.js';
import SearchBar from './SearchBar';
import News_Item from './Museum_Item.js';
import Util from './../News/Util';
import Detail from './Detail';
import User_comment from './comment.js';
import My_comment from './my_comment.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class Home_list extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged: (oldRow, newRow) => oldRow !== newRow
		});
		this.state = {
			show: false,
			dataSource: ds,
			keywords: "故宫博物院",
			statement:global.statement,
			place:'北京',
		};
		
	}
	componentWillUpdate(){
		// this.state.statement = global.statement;
	}
	getData() {
		this.setState({
			show: false
		});
		var that = this;
		var url = global.getfetch.url + "getscenic/";
		url = url + `place${this.state.place}`;
		Util.getRequest(url, function (data) {
			if (!data || data.length == 0) {
				return alert("未查询到相关信息")
			}
			//设置下载状态和下载数据源	
			var ds = new ListView.DataSource({//创建datasource对象
				rowHasChanged: (oldRow, newRow) => oldRow !== newRow
			})
			that.setState({
				show: true,
				dataSource: ds.cloneWithRows(data)
			})
		}, function (error) {
			alert(error);
		})
	}
	_search() {

	}

	_update = (place) =>{
		let opts={
			method:"GET",
		}
		let url = global.getfetch.url + "getscenic/";
		url += `place${this.state.place}`
		Util.getRequest(url, function (data) {
			if (!data || data.length == 0) {
				return alert("未查询到相关信息")
			}
			//设置下载状态和下载数据源	
			var ds = new ListView.DataSource({//创建datasource对象
				rowHasChanged: (oldRow, newRow) => oldRow !== newRow
			})
			that.setState({
				show: true,
				dataSource: ds.cloneWithRows(data)
			})
		}, function (error) {
			alert(error);
		})
	}

	render() {
		return (
			<ScrollView>
				<View style={{ flexDirection: "row", }}>
					<ImageBackground
						style={{ width: ScreenWidth, height: ScreenHeight }}
						source={require('./../Image/user.jpg')}
					>
						<View style={{}}>
							<View style={[{}, { flexDirection: "row", height: ScreenHeight / 10, width: ScreenWidth, }]}>
								<View style={{ alignItems: 'center', borderWidth: 1, borderRadius: 10, } , {margin: 10,flexDirection:"row",width:ScreenWidth/1.2,}}>
									<View style={{height:ScreenHeight/10,width:ScreenWidth/5}}>
										<Picker
											selectedValue={this.state.place}
											onValueChange={(place) => {this._update(place)}}
											mode="dropdown"
											style={styles.pickerstyle}
										>
											<Picker.Item label="北京" value="北京"/>
											<Picker.Item label="上海" value="上海"/>
											<Picker.Item label="天津" value="天津"/>
											<Picker.Item label="济南" value="济南"/>
											<Picker.Item label="石家庄" value="石家庄"/>
										</Picker>
									</View>

									<View style={styles.titleView}>
										<Text style={styles.title}>旅游景区</Text>
									</View>
								</View>
							</View>
						
							<View style={{ backgroundColor: "silver", height: 1 }}></View>
							{
								this.state.show ?
									<ListView
										dataSource={this.state.dataSource}
										contentContainerStyle={styles.contentViewStyle}
										renderRow={
											(book) => <News_Item
												book={book}
												onPress={() => {
													this.props.navigation.navigate('Profile', { 
															scenicID: book.id, 
													}
												)}}/>
										}
										renderSeperator={this._renderSeperator}
									/>
									: Util.loading
							}
						</View>
					</ImageBackground> 
				</View>
			</ScrollView >
		);
	}
	_renderSeperator(sectionID: number, rowID: number) {
		var style = {
			height: 3,
			backgroundColor: "red"
		}
		return <View style={style} key={sectionID + rowID} />
	}
	componentDidMount() {
		this.getData();
	}
}
const styles = StyleSheet.create({
	base: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentViewStyle: {
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap'
    },
	pickerstyle:{
		width:ScreenWidth,
	},
	titleView:{
		justifyContent:'center',
		alignItems:'center',
	},
	placename:{
		fontSize:25,
		textAlign:'center',
		fontStyle:'italic',
		fontWeight:('bold', '700')
	},
	title:{
		fontSize:30,
		textAlign:'auto',
		alignItems:'center',
		fontStyle:'italic',
		fontWeight:('bold', '700'),
		fontFamily:'Georgia',
		letterSpacing:10,
  
	},
});

const ModalStack = StackNavigator({
	Home: {
		screen: Home_list,
		navigationOptions: {
			headervisible: false,
			header: null
		},
		StackNavigatorConfig: {
			headerMode: 'float',
		}
	},
	Profile: {
		screen: Detail,
		navigationOptions: {
			headerTitle: '',
			header:null
		}
	},
	message:{
		screen: Museum_Introduction,
		navigationOptions: {
			headerTitle: '',
		
		}
	},
	exhibition:{
		screen: Collect,
		navigationOptions: {
			headerTitle: '',

		}
	},
	comment:{
		screen: User_comment,
		navigationOptions: {
			headerTitle: '',

		}
	},
	my_comment:{
		screen: My_comment,
		navigationOptions: {
			headerTitle: '',
			header:null
		}
	},
});
export default ModalStack;