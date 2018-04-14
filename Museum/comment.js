import React, { Component } from 'react';
import{
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
    ScrollView
}from 'react-native';
import StarScore from './star.js';
import { StackNavigator } from 'react-navigation';
import Little_star from './liitle_star.js';
import Show from './show_comment';
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names:null,
            currentScore:null,
            star:[
               2,5 ,3
            ],
            cnt_man:807289,
            ave_score:9.1,
            data:{

            },
        };
    }
    _myview(){
        // alert("我也参与")
        const { params } = this.props.navigation.state;
        this.props.navigation.navigate('my_comment', {
            username:global.username,
            id:params.data.id,
            name_museum:params.data.name,
        });
    }
    render(){
        const {params} = this.props.navigation.state;
        return(
        <ScrollView>
            <View style={[styles.container,styles.common,{}]}>
                <View style={[styles.header,{marginBottom: 20,marginTop: 20,flexDirection:"row",}]}>
                    <View style={{width: ScreenWidth * 11 / 36,height: 150,}}>
                        <View style={{ width: ScreenWidth * 11 / 36, height: 150/4, backgroundColor: "white", }}>
                            <Text style={{fontSize: 18,fontWeight: 'bold',color:"black"}}>
                                游客热评
                            </Text>
                        </View>
                        <View style={{ width: ScreenWidth * 11 / 36, height: 150/2,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{fontSize: 40,fontWeight: 'bold',color:"black"}}>
                                   {this.state.data.avgtotal}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', width: ScreenWidth * 11 / 36, height: 150 / 4, justifyContent: "center", alignItems: "center"  }}>
                            <Text style={{ fontSize: 15, }}>
                                {this.state.data.people}人
                            </Text>
                            <TouchableOpacity
                                style={{marginLeft: 5,}}
                            >
                                <Image
                                    style={styles.image}
                                    source={require('./../Image/triangle.png')}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: ScreenWidth * 22 / 36, height: 150, }}>
                        <View style={{ flexDirection:"row-reverse",width: ScreenWidth * 22 / 36, height: 150/2.5, }}>
                            <View style={[styles.bnt_comment,{}]}>
								<TouchableOpacity 
                                        style={{ backgroundColor:"#696969",height:40,justifyContent : "center",alignItems :"center",}}
									onPress={()=>this._myview()}
								>
									<Text style={{color:"white",fontSize:15,fontWeight: 'bold',}}>
										写评论{/*global.id*/}
									</Text>
								</TouchableOpacity>
							</View>
                        </View>
                        <View style={{ flexDirection: "row", width: ScreenWidth * 22 / 36, height: 150-150/2.5,  }}>
                            <View style={{ marginLeft: 60, height: 150 - 150 / 2.5, width: ScreenWidth * 22 / 36 - 60}}>
                                <View style={{ flexDirection: 'row', height: (150 - 150 / 2.5) / 3, width: ScreenWidth * 22 / 36 - 60,   alignItems: "center",}}>
                                    <Text>
                                        游玩评分:
                                    </Text>
                                    <Little_star value={this.state.data.avgplay}/>
                                </View>
                                <View style={{ flexDirection: 'row', height: (150 - 150 / 2.5) / 3, width: ScreenWidth * 22 / 36 - 60,   alignItems: "center",}}>
                                    <Text>
                                        服务评分:
                                    </Text>
                                    <Little_star value={this.state.data.avgserver}/>
                                </View>
                                <View style={{ flexDirection: 'row', height: (150 - 150 / 2.5) / 3, width: ScreenWidth * 22 / 36 - 60,   alignItems: "center",}}>
                                    <Text>      
                                        环境评分:
                                    </Text>
                                    <Little_star value={this.state.data.avgenvir}/>
                                </View>
                            </View>    
                        </View>
                    </View>
                </View>
                    
            </View>
                <Show id={params.data.id} />  
            </ScrollView>

      );
    }
    componentWillMount() {
        this.setState({names:global.username});
        this._getdata();
    }
    _getdata(){
        const { params } = this.props.navigation.state;
        let s = params.data.id
         //alert(s);
        let formData = new FormData();
        // formData.append("user_id", 7);
        //let url = "http://39.106.168.133:8080/api/getstar/" + s;
        let url = global.getfetch.url + `getscore/id${s}`;
        fetch(url, {
            method: 'GET',
        }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
                // alert(json[0].loginname)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
var styles = StyleSheet.create({
    container: {
        // height:Screen
        backgroundColor: "white",
    },
    header:{
        width:ScreenWidth*11/12,
        height:150,
        // backgroundColor:"red",

    },
    block:{
        width: ScreenWidth, 
        height: ScreenHeight*5/24,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text:{
        fontSize:20,
        color:"white",
    },
    bnt_comment: {
        width:80,
        borderWidth: 1,
        borderRadius: 100,
        overflow: "hidden",
        // backgroundColor: "#f1ebeb",
        borderColor: "#2f3c30",
        height: 40,
    },
});