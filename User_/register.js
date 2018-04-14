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
import './../globalcontent.js'
import Search from './login_text';
import Register from './register.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name:"",
          pwd:"",
          repwd:"",
          data:{

          }
      };
    }
    _getData(){
        let formData = new FormData();  
        formData.append("loginname",this.state.name);  
        formData.append("password",this.state.pwd);  
        //let url = "http://39.106.168.133:8080/api/user/reg"
        let url = global.getfetch.url + 'user/reg/';
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
          //alert(json.msg);
          alert(this.state.data);
        })
        .catch((error) => {  
         console.error(error);  
        }); 
    }
    back = (state,goBack)=>{ //把属性传递过来，然后进行使用
      if(this.state.pwd!=this.state.repwd)
        alert("俩次密码输入不一致!!!");
      else{
            this._getData();
            state.params.callBack() //回调传值 
            this.props.navigation.goBack();
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
              <View >
                <View style={{height:ScreenHeight/4,width:ScreenWidth,justifyContent : "center",alignItems :"center",}}>
                  <Text style={styles.text_}>
                    欢迎加入Travel
                  </Text>
                </View>
                <Search
                    onChangeText={(text) => this.setState({name: text})}
                />
                <Search
                    onChangeText={(text) => this.setState({pwd: text})}
                    secureTextEntry={true}
                />
                <Search
                    onChangeText={(text) => this.setState({repwd: text})}
                    secureTextEntry={true}
                />
                <View style={{height:ScreenHeight/30}}>
                </View>
                <View style={{flexDirection:"row",marginLeft:ScreenWidth/20,justifyContent : "center",alignItems :"center",}}>
                    <TouchableOpacity 
                      style={styles.bnt} 
                      onPress={()=>this.back(state,goBack)}
                    >
                        <Text style={{fontSize:20,justifyContent : "center",alignItems :"center",}}>确定</Text>
                    </TouchableOpacity>
                    <View style={{width:ScreenWidth/18}}>
                    </View>
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
      width:ScreenWidth/1.1,
      justifyContent : "center",
      alignItems :"center",
  },

});
