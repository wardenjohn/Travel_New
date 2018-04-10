import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import User from './User_/User';
import Museum_Home_list from './Museum/home_list';
import News_Home_list from './News/home_list';
export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        Height:60,
        tab:"博物馆",
        value:"old",
        user:"",
        statement:"",
    };
    global.username="";
    global.statement="";
    global.id=null;
    _this = this;
  }
  _one(){
      this.setState({tab:'博物馆'})
  }
  _onPress(data){
        var height = _this.state.Height;
        var height = 0;
        if(data){
            height = 60;
        }else{
            height = 0;
        }

        _this.setState({
            Height:height
        });
    }
  render() {
    return (
      <TabNavigator  
            sceneStyle={{
                paddingBottom:this.state.Height
            }}
            tabBarStyle={{
                height:this.state.Height,
                overflow:'hidden'
            }}
          style={{flex:1}}
          tabBarStyle={{  
                backgroundColor:'#dcdcdc',  
                height:this.state.Height, 
            }} 
          >  
          <TabNavigator.Item  
              title="博物馆"  
              selected={this.state.tab==='博物馆'}  
              onPress={()=>this._one()}
              renderIcon={()=><Image  
                    style={{width:60,height:this.state.Height/2}}  
                    source={require('./Image/hourse.png')}></Image>}  
          >      
          <Museum_Home_list 
              
          />
          </TabNavigator.Item>  

          <TabNavigator.Item  
              title="新闻消息"  
              selected={this.state.tab==='新闻消息'}  
              onPress={()=>{
              this.setState({tab:'新闻消息'});
              }}  
              renderIcon={()=><Image  
                    style={{width:35,height:this.state.Height/2}}  
                    source={require('./Image/news.png')}></Image>}
          >  
          <News_Home_list
            

          />
          </TabNavigator.Item>


        <TabNavigator.Item  
              title="用户"  
              selected={this.state.tab==='用户'}  
              onPress={()=>{
              this.setState({tab:'用户'});
              }} 
              renderIcon={()=><Image  
                    style={{width:35,height:this.state.Height/2+5}}  
                    source={require('./Image/my.png')}></Image>}  
          >  
          <User
            op={this._onPress}
          />
          
        </TabNavigator.Item>  
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container_user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   user_:{
    fontSize: 20,
    marginTop:20,
    textAlign:'center',
    color:'blue',
    fontStyle:'italic',
    textDecorationLine:'underline'
  }
});
