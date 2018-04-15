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
    FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import './../globalcontent.js'

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class Diary extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
		  	name:null,
        list:null,
        
      };
    }


    componentWillMount(){
      let url = global.getfetch.url + `getDiary/uid=${global.id}`;
      let ops={
        method:"get",
      }
      fetch(url,ops)
      .then((response)=>{
        return response.json()
      })
      .then((responseData)=>{
        //alert(responseData[0].scenicname);
        this.setState({list:responseData});
      })
      .catch((error)=>{
        alert(error);
      }) 
    }
    _getContext(value){
      this.props.navigation.navigate('DiaryDetail',{
          data:this.state.list[value],
          g:true
      });
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = (item) => {
      return(
        <View style={styles.rowBox}>
          <TouchableOpacity
            onPress={()=>this._getContext(item.index)}
          >
            <View style={styles.titleBox}>
              <Text>标题:{this.state.list[item.index].title}</Text>
            </View>
            <View style={styles.contentBox}>
            {
              this.state.list[item.index].content.length>30? 
              <Text>
                正文:{this.state.list[item.index].content.substring(0,30)}...
              </Text>
              :
              <Text>
                正文:{this.state.list[item.index].content}    
              </Text>
            }
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    _separator = () => {
      return <View style={{height:2,backgroundColor:'gray'}}></View>
    }
    render(){
      const {params} = this.props.navigation.state;
      return(
        <View>
          <FlatList
              data={this.state.list}
              renderItem={this._renderItem}
              keyExtractor={(item,index)=>index.toString()}
            /> 
          </View>
      );
    }

}


var BoxWidth = ScreenWidth-10;
const styles = StyleSheet.create({
    rowBox:{
        backgroundColor:'rgba(233,234,237,1)',
        width:BoxWidth,
        marginTop:10,
        alignSelf:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
    },
    titleBox:{
        backgroundColor:'rgba(239,239,244,1)',
        alignSelf:'center',
        alignItems:'center',
        fontSize:20,
    },
    title:{

    },
    contentBox:{
        borderColor:'black',
        width:BoxWidth,
        height:'auto',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'white',
        fontSize:15,
    },
});