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
    ScrollView,
    TextInput
} from 'react-native';
//import RNRestart from 'react-native-restart';
import StarScore from './../Museum/star';
import { StackNavigator } from 'react-navigation';
import Icon from './../User_/Icon_Back.js'
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class Food_Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texts:"",
            names: null,
            Score0: 0,
            Score1: 0,
            Score2: 0,
            currentScore:0,
            data:{
                
            },
        };
    }
    _getavg(v1,v2,v3){
        var num = (v1 + v2+ v3) / 3;
        return 2*num.toFixed(1);
    }
    _selectIndex0(count) {
        this.setState({
            Score0: count ,
            currentScore: this._getavg(count,this.state.Score1,this.state.Score2)
        });
    }
    _selectIndex1(count) {
        this.setState({ 
            Score1 : count ,
            currentScore: this._getavg(this.state.Score0, count, this.state.Score2)
        });
    }
    _selectIndex2(count) {
        this.setState({ 
            Score2 : count ,
            currentScore: this._getavg(this.state.Score0, this.state.Score1, count)
        });
    }
    _submit(){
        //alert("成功提交")
        this._getdata();
        //RNRestart.Restart();
    }
    _clear(){
        //alert("清空")
        this.setState({
            texts:"  ",
        })
    }
    _back() {
        this.props.navigation.goBack();
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
        <ScrollView>
                <View style={{backgroundColor:"white", flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this._back()}
                        >
                            <Icon />
                        </TouchableOpacity>
                        <View style={{marginLeft:20,borderLeftWidth: 2,height:17}}>
                        </View>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            {params.name_museum}
                        </Text>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this._submit()}
                        >
                            <Image
                                style={styles.image}
                                source={require('./../Image/submit.png')}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            <View style={[ styles.container,{backgroundColor:"white",}]}>

                <View style={[styles.common,{ height: 80 ,}]}>
                    <Text style={{ color:"#707070",fontSize: 15,}}>
                        {/* {params.username}{params.name_museum} */}
                        我的评分 {this.state.currentScore}分
                    </Text>
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:'auto',flexDirection: 'row',}}>
                        <Text style={{fontSize: 20,}}>
                            环境评分:
                        </Text>
                        <StarScore
                            selectIndex={this._selectIndex0.bind(this)}
                            value={0}
                        />
                    </View>
                    {/* <View style={{width:ScreenWidth/2}}>
                        <StarScore
                            selectIndex={this._selectIndex0.bind(this)}
                            value={0}
                        />
                    </View> */}
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:'auto',flexDirection: 'row',}}>
                        <Text style={{fontSize: 20,}}>
                            服务评分:
                        </Text>
                        <StarScore
                            selectIndex={this._selectIndex1.bind(this)}
                            value={1}
                        />
                    </View>
                    <View style={{width:ScreenWidth*2/3,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-start'}}>
                        {/* <StarScore
                            selectIndex={this._selectIndex1.bind(this)}
                            value={1}
                        /> */}
                    </View>
                </View>

                <View style={[{width:ScreenWidth,flexDirection: 'row',}]}>
                    <View style={{width:'auto',flexDirection: 'row',}}>
                        <Text style={{fontSize: 20,}}>
                            味道评分:
                        </Text>
                        <StarScore
                            selectIndex={this._selectIndex2.bind(this)}
                            value={2}
                        />
                    </View>
                    <View style={{width:ScreenWidth*2/3}}>
                        {/* <StarScore
                            selectIndex={this._selectIndex2.bind(this)}
                            value={2}
                        /> */}
                    </View>
                </View>
                <View style={{width:ScreenWidth,backgroundColor:"black",height:0.5,marginTop: 25,}}></View>
                <View style={[styles.input,{width:ScreenWidth}]}>
                    <TextInput
                        underlineColorAndroid='transparent' 
                        onChangeText={(text) => {this.setState({texts: text})}}
                        value={this.state.texts}
                        multiline={true}
                        placeholder='请在此输入评论'
                        textAlignVertical='top'
                        style={{width:ScreenWidth}}
                    />
                    
                </View>
                <View style={{flexDirection: 'row-reverse',}}>
                    <TouchableOpacity
                        style={{ marginLeft: 5, }}
                        onPress={() =>this._clear()}
                    >
                        <Image
                            style={styles.image}
                            source={require('./../Image/rubish.png')}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>        
        );
    }
    componentDidMount() {
        this.setState({ names: global.username });
    }
    _getdata() {
        const { params } = this.props.navigation.state;
        let formData = new FormData();
        //formData.append("coption", 1);
        if(!global.id){
            alert("请先登录！");
        }
        else{
            //alert(params.id);
            formData.append("userid", global.id);
            formData.append("foodshop_id", params.id);
            formData.append("foodshop_name",params.shop_name);
            formData.append("loginname",global.username);
            formData.append("markContent", this.state.texts);
            formData.append("envirScore",this.state.Score0);
            formData.append("serveScore",this.state.Score1);
            formData.append("tasteScore",this.state.Score2);
            
            let url = global.getfetch.url + 'foodshop_estimate/writebyUser/';
            
            fetch(url, {
                    method: 'POST',
                    headers: {},
                    body: formData,
                }
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((json) => {
                    alert("提交成功！");
                    this.setState({ data: json });
                })
                .catch((error) => {
                    console.error(error);
                });
                this._back();
        }
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    input:{
        height:110,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        // alignItems:"center",
    }
});
