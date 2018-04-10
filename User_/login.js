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
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name:"",
          pwd:"",
          data:{

          }
      };
    }
    _getData(){
        let formData = new FormData();  
        formData.append("loginname",this.state.name);  
        formData.append("password",this.state.pwd);  
        //let url = "http://39.106.168.133:8080/api/user/login"
        let url = global.getfetch.url ;
        url += `user/getuser/`;
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
          this.setState({data:json});
            // var str = json.toJSONString();
         // alert(json.msg);

        })
        .catch((error) => {  
         console.error(error);  
        }); 
    }
    back = (state,goBack)=>{ //把属性传递过来，然后进行使用
        this._getData();
        if(this.state.data.valid == 1)
        {
            alert("Hello , "+this.state.name);
            //alert(this.state.name);
            global.username = this.state.data.loginname;
            global.statement = true;
            global.id = this.state.data.id;
            state.params.callBack(this.state.name) //回调传值 
            this.props.navigation.goBack(); //点击POP上一个页面得方法  this.props.navigation.goBack();
        }
    }
    render(){
      const  {navigate,state,goBack,} = this.props.navigation;
      return(
        <View style={{flexDirection:"row",}}>
            <ImageBackground
              style={{width:ScreenWidth,height:ScreenHeight}}
              source={require('./../Image/bgm.jpg')}
            >
                {/* <View style={{borderWidth:1,padding:ScreenWidth/25,flexDirection:"row",height:ScreenHeight/12,}}>
                    <Icon_Back/>
                    <Text style={{fontSize:18}}>
                        返回
                    </Text>
                </View> */}
                <View>
                    <View style={{height:ScreenHeight/4,width:ScreenWidth,justifyContent : "center",alignItems :"center",}}>
                    <Text style={styles.text_}>
                        欢迎来到博物馆
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
