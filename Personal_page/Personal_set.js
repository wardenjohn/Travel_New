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
    ImageBackground,
    Picker,
    Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from './../User_/Icon.js';
import './../globalcontent.js'
import AlertSelected from './AlertSelected';
const {width, height} = Dimensions.get('window');
const sexArr = ["男","女"];
//var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Personal_sets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uid:global.id,
            nickname:"空",//not nikename ????
            introduce:"空",
            sex:"男",
            city:"空",
            sexflag:false,
        };
        var url = global.getfetch.url + `user/infor/id${this.state.uid}`;
        let ops={
            method:"get",
        }
        fetch(url,ops)
        .then((response)=>{
            return response.json()
        })
        .then((responseData)=>{
            this.setState({
                nickname : responseData.nickname,
                introduce : responseData.introduce,
                city : responseData.city,
                sexflag:responseData.sex,
            })
        })
    }
    _update(){
        var url = global.getfetch.url + `user/infor/id${this.state.uid}`;
        let formData = new FormData();  
        formData.append("uid",this.state.uid)
        formData.append("nickname",this.state.nickname);  
        formData.append("introduce",this.state.introduce);
        formData.append("sex",this.state.sex);
        formData.append("city",this.state.city);  
        
        fetch(url , {  
           method: 'POST',  
           headers: {},  
           body: formData,
           }  
        )
        .then((response) => {  
            if (response.ok) {  
                return response.json();  
        }})
        .then((json) => {  
          this.setState({flag:json});
            // var str = json.toJSONString();
          alert(this.state.flag);

        })
        .catch((error) => {  
         console.error(error);  
        }); 
    }
    back(){
        this.props.navigation.goBack();
    }
    _changeSex(sex){
        if(sex)
            this.setState({sex:"女"})
        else
            this.setState({sex:"男"})
    }
    callbackSelected(i){
        this.setState({sex:sexArr[i]})
      }
    
    showAlertSelected(){
        this.refs.alertSelected.show("请选择性别",sexArr,this.callbackSelected.bind(this));
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
                             onPress={() => this._update()}
                        >
                            <Text style={styles.Text_}>
                                保存
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight/8, borderBottomWidth: 0.5, }}>
                    <TouchableOpacity>
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
                                昵称:
                            </Text>
                        </View>
                        
                        <View style={styles.common}>
                            <TextInput
                                style={{height:'auto', borderColor: 'gray', borderWidth:1,width:ScreenWidth-80,backgroundColor:'rgba(255,255,255,1)',fontSize:20}}
                                defaultValue={this.state.nickname}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.setState({nickname:text})}
                            />
                        </View>
                </View>

                <View style={{ flexDirection: "column", width: ScreenWidth, height:'auto', borderBottomWidth: 0.5, }}>
                    <View style={[styles.common, { width: ScreenWidth / 6, height: ScreenHeight / 12, }]}>
                        <Text style={{ fontSize: 20, color: "black" }}>
                            简介:
                        </Text>
                    </View>
                    <View style={styles.inroduceBox}>
                        <TextInput
                            defaultValue={this.state.introduce}
                            underlineColorAndroid='transparent'
                            textAlignVertical='top'
                            onChangeText={(text)=>this.setState({introduce:text})}
                            style={{height: 80, borderColor: 'gray', borderWidth: 1,width:ScreenWidth,fontSize:15,backgroundColor:'rgba(255,255,255,1)'}}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
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
                            <TouchableOpacity
                                    onPress={
                                        this.showAlertSelected.bind(this)
                                    }
                                >
                                    <View style={[styles.common, { marginLeft: ScreenWidth /2, width: ScreenWidth / 6 }]}>
                                        <Icon />
                                    </View>
                            </TouchableOpacity>
                        </View>
                 </View>

                <View style={{ flexDirection: "row", width: ScreenWidth, height: ScreenHeight / 12, borderBottomWidth: 0.5, }}>
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
                            <View style={styles.common}>
                                <Icon />
                            </View>
                        </View>
                        <View style={styles.common}>
                        <TextInput
                            defaultValue={this.state.introduce}
                            underlineColorAndroid='transparent'
                            onChangeText={(text)=>this.setState({city:text})}
                            style={{height: 40, borderColor: 'gray', borderWidth: 1,width:ScreenWidth}}
                        />
                    </View>
                </View>

                <AlertSelected ref="alertSelected" />
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
    inroduceBox:{
        flexDirection:"row",
        height:'auto',
    }
});