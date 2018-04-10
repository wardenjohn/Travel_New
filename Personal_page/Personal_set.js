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
    TextInput,
    TouchableOpacity,
    PixelRatio,
    ImageBackground
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from './../User_/Icon.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Personal_sets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nikename:"空",
            introduce:"空",
            sex:"空",
            city:"空",
        };
    }
    back(){
        this.props.navigation.goBack();
    }
    render() {
        // const { params } = this.props.navigation.state; { params.name }
        const { navigate } = this.props.navigation;
        return(
            <View style={{ backgroundColor: "#fcfbe6", width: ScreenWidth, height: ScreenHeight }}>
                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12,borderBottomWidth:0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                            onPress={() => this.back()}
                        >
                            <Text style={styles.Text_}>
                                取消
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth * 3 / 5, height: ScreenHeight / 12 }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            个人资料
                    </Text>
                    </View>
                    <View style={[styles.common, { width: ScreenWidth / 5, height: ScreenHeight / 12 }]}>
                        <TouchableOpacity
                            style={[styles.common, {}]}
                        // onPress={() => this._s()}
                        >
                            <Text style={styles.Text_}>
                                保存
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight/8, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity

                    >
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 8 }}>
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 8, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    头像
                                </Text>
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6, marginLeft: ScreenWidth /2, height: ScreenHeight / 8, }]}>
                                <Image 
                                    style={{ height:ScreenHeight/10, width: ScreenWidth/7 }}
                                    source={require('./../Image/head.png')} 
                                />
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                        </View>

                    </TouchableOpacity>      
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            昵称
                        </Text>
                    </View>
                    <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.nikename}
                            underlineColorAndroid='transparent'
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 8, borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            简介
                        </Text>
                    </View>
                    <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.introduce}
                            underlineColorAndroid='transparent'
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity
                        
                    >
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12 }}>
                            <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    性别
                                </Text>
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    {this.state.sex}
                                </Text>
                            </View>
                            <View style={[styles.common, { marginLeft: ScreenWidth /2, width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                        </View>
                       
                    </TouchableOpacity>
                 </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity

                    >
                        <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12 }}>
                            <View style={[styles.common, {  width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    城市
                                </Text>
                            </View>
                            <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                                <Text style={{ fontSize: 20, color: "black" }}>
                                    {this.state.city}
                                </Text>
                            </View>
                            <View style={[styles.common, { marginLeft: ScreenWidth /2, width: ScreenWidth / 6 }]}>
                                <Icon />
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>

                
            </View>
        )
    };
}
const styles = StyleSheet.create({
    common:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
    },
    Text_:{
        fontSize:20,
        color:"#26c85a",
    },
    input:{
        height:ScreenHeight/15,
        fontSize: 18,
        width:ScreenWidth/1.5,
        
    },
    
});