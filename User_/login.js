//登录界面
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
    ImageBackground
} from 'react-native';
import Search from './login_text';
import Register from './register.js';
import User from './User.js';
import Icon_Back from './Icon_Back.js';
var Dimensions = require('Dimensions');//抓取屏幕尺寸
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Login extends Component {//继承父类
    constructor(props) {
      super(props);
      this.state = {
          name:null,
          pwd:null,
          data:{

          }
      };
    }
    _getData(){
        let formData = new FormData();       //formData是提交登录表单的
        if(this.state.name != null && this.state.pwd != null){
            formData.append("loginname",this.state.name); //获取输入的用户名 
            formData.append("password",this.state.pwd);  //获取输入的密码
            let url = global.getfetch.url ;//提交信息的网址
            url += `user/getuser/`;
            fetch(url , {         //提交
            method: 'POST',  
            headers: {},  
            body: formData,
            }  
            )
            .then((response) => {  //处理异常
                if (response.ok) {  
                    return response.json();  
            }})
            .then((json) => {  
            this.setState({data:json});
            })
            .catch((error) => {  
            console.error(error);  
            
            }); 
        }
        else{
            alert(" 请输入用户名&密码")
        }
    }
    back = (state,goBack)=>{ //把属性传递过来，然后进行使用
        this._getData();
        if(this.state.data.valid == 1)
        {
            alert("Hello , "+this.state.name);
            global.username = this.state.name;
            global.statement = true;
            global.id = this.state.data.id;
            state.params.callBack(this.state.name) //回调传值 
            this.props.navigation.goBack(); //点击POP上一个页面得方法  this.props.navigation.goBack();
        }
        
    }
    render(){
      const  {navigate,state,goBack,} = this.props.navigation;//navigate实现跳转
      return(
        // <ScrollView
        //   contentContainerStyle={{ flex: 1}}
        //   keybordDismissMode="on-drag"
        //   keybordShouldPersistTaps={false}
        //   scrollEnabled={false}>
        <View style={{flexDirection:"row",}}>
            <ImageBackground
              style={{width:ScreenWidth,height:ScreenHeight}}
              source={require('./../Image/timg.jpg')}
            >
                <View>
                    <View style={{height:ScreenHeight/4,width:ScreenWidth,justifyContent : "center",alignItems :"center",}}>
                    <Text style={styles.text_}>
                        欢迎登陆
                    </Text>
                    </View>
                    <Search  
                        onChangeText={(text) => this.setState({name: text})}
                    />
                    <Search
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({pwd: text})}
                    />
                    <View style={{flexDirection:"row",margin:ScreenHeight/20,justifyContent : "center",alignItems :"center",}}>
                        <TouchableOpacity 
                            style={styles.bnt} 
                            onPress={()=>this.back(state,goBack)}
                        >
                            <Text style={{fontSize:20,justifyContent : "center",alignItems :"center",}}>登录</Text>
                        </TouchableOpacity>
                        <View style={{width:ScreenWidth/18}}></View>
                        <TouchableOpacity 
                            style={styles.bnt} 
                            onPress={()=>{this.props.navigation.navigate('Reg',{callBack:(data)=>{this.setState({})}})}}
                        >
                            <Text style={{fontSize:20,justifyContent : "center",alignItems :"center",}}>注册</Text>
                        </TouchableOpacity>
                    </View>
              </View>
            </ImageBackground>
        </View>

      );
    }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  text_:{
    textShadowColor:'#7fff00',
    textShadowRadius:2,
    textShadowOffset:{width:2,height:2},
    fontSize :30,
  },
  bnt:{
      borderWidth:2,
      borderRadius:10,
      overflow:"hidden",
      backgroundColor:"pink",
      height:ScreenHeight/15,
      width:ScreenWidth/3,
      justifyContent : "center",
      alignItems :"center",
  },

});
