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
    ImageBackground
} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import { StackNavigator } from 'react-navigation';
import Util from './../News/Util.js';
import Item from './../Museum/Museum_Item';
import Icon from './../User_/Icon_Back.js';
import './../globalcontent.js'

/**
 * Food_Detail : 
 * 该文件就是food_home_list的下一级子页面
 * 该页面展现的就是点进去了某个商家里面以后，展现的三个功能区，在该文件中我们还需要实现
 * 在该页面下的下一级页面的跳转
 * 
 * command By John
 */


class Food_Detail extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            fookData: null,
            scenicID:null,
            name:global.username,
        };
    }
    getData() {
        var that = this;
        const { params } = this.props.navigation.state;
        var url = global.getfetch.url + `getscenic/id${params.scenicID}/`;
        let ops={
            method:"get",
        }
        fetch(url,ops)
        .then((response)=>{
            return response.json()
        })
        .then((responseData) =>{
            this.setState({fookData:responseData})
            //alert(this.state.fookData[0].opentime)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    _back() {
        this.props.navigation.goBack();
    }
    _introduction(){
        this.props.navigation.navigate('food_information', {
            data: this.state.fookData[0],
        });
    }
    _gets(){
        //alert("展览");
        this.props.navigation.navigate('food_recommandish', {
            data: this.state.fookData[0],
        });
    }
    _news(){
        this.props.navigation.navigate('news', {
            data: this.state.fookData[0],
        });
    }
    _user(){
        // if(global.statement == false)
        //     alert("请登录!")
        // else{
            //alert(this.state.fookData[0].id)
            this.props.navigation.navigate('food_disscus', {
                data: this.state.fookData[0],
            });
        // }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.fookData ?
                        <View >
                            <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                                <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                                    <TouchableOpacity
                                        style={[styles.common, {}]}
                                        onPress={() => this._back()}
                                    >
                                        <Icon/>
                                    </TouchableOpacity>
                                    <Text>
                                        {}
                                    </Text>
                                </View>
                                <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                                    <Text style={{ fontSize: 20, color: "black" }}>
                                        {this.state.fookData.name}
                                    </Text>
                                </View>
                            </View>
                            <ScrollView>
                                <View style={[styles.block, {  }]}>
                                    <TouchableOpacity
                                        onPress={() => this._introduction()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm_museum1.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>
                                                    景点介绍
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.block, { }]}>
                                    <TouchableOpacity
                                        onPress={()=>this._gets()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm_exhibit1.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>
                                                    活动
                                                </Text>
                                            </View>
                                        </ImageBackground>  
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={[styles.block,{  }]}>
                                    <TouchableOpacity
                                        onPress={() => this._user()}
                                    >
                                        <ImageBackground
                                            style={[styles.common, styles.block]}
                                            source={require('./../Image/bgm_usr.jpg')}
                                        >
                                            <View style={[styles.common, styles.block, { backgroundColor: "black", opacity: 0.5 }]}>
                                                <Text style={styles.text}>  
                                                    用户区
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        : Util.loading
                }
            </ScrollView>
        );
    }
    componentDidMount() {
        this.getData();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    block:{
        width: ScreenWidth, 
        height: ScreenHeight*5/12,
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text:{
        fontSize:20,
        color:"white",
    }
});

export default Food_Detail;
