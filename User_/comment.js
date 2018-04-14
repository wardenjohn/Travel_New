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
    FlatList,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Comment extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
			  name:null,
        list:{},
        height:0,
        width:0,
      };
    }

    componentDidMount(){
      
    }

    componentWillMount(){
        let url = global.getfetch.url + `mark/userid${global.id}/`;
        let ops={
          method:"get",
        }
        fetch(url,ops)
        .then((response)=>{
          return response.json()
        })
        .then((responseData)=>{
          this.setState({list:responseData});
        })
        .catch((error)=>{
          alert(error);
        })
    }


    _keyExtractor = (item, index) => item.id;

    _renderItem = (item) => {
      return(
      <View style={styles.RowBox}>
        
        <View style={styles.scenicBox}>
          <Text style={styles.titleStyle}>【评论景点】</Text>
          <Text style={styles.titleStyle}>{this.state.list[item.index].scenicname}</Text>
        </View>
        
        <View style={styles.contentBox}>
          <Text style={styles.titleStyle}>【评论内容】</Text>
          <View style={styles.content}>
            <Text style={{fontSize:18,}}>{this.state.list[item.index].markContent}</Text>
          </View>
        </View>

          <View style={styles.timeBox}>
            <Text style={styles.titleStyle}>【评论时间】：</Text>
            <Text style={styles.titleStyle}>{this.state.list[item.index].time}</Text>
          </View>
        
        <View style={styles.ScoreView}>
            <Text style={styles.titleStyle}>【服务评分】：{this.state.list[item.index].serveScore}</Text>
            <Text style={styles.titleStyle}>【游玩评分】：{this.state.list[item.index].plauScore}</Text>
            <Text style={styles.titleStyle}>【环境评分】：{this.state.list[item.index].envirScore}</Text>
        </View>

        <View style={{height:'auto'}}>
          <Image style={styles.imgView} source={require('./../Image/spec.png')}/>
         </View> 
      </View>
      )
    }

    _separator = () => {
      return <View style={{borderWidth:1,backgroundColor:'rgba(236,237,238,1)'}}></View>
    }

    _show(){
      
    }

    render(){
      const {params} = this.props.navigation.state;
      return(
        <View>
          <View style={styles.titleBox}>
            <Text style={styles.titleStyle}>一共有{this.state.list.length}条评论</Text>
            </View>
          <FlatList
              data={this.state.list}
              renderItem={this._renderItem}
              keyExtractor={(item,index)=>index.toString()}
            />
        </View>
      );
    }
}

var BoxWidth = ScreenWidth-ScreenWidth/20;
const styles = StyleSheet.create({
  titleBox:{
    marginTop:5,
  },
  titleStyle:{
    fontSize:20,
  },
  RowBox:{
    flexDirection : 'column',
    height : 'auto',
    backgroundColor : 'rgba(233,234,237,1)',
    alignSelf : 'center',
    alignItems:'center',
    width:ScreenWidth-10,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    marginTop:8,
    marginBottom:8,
  },
  scenicBox:{
    width:BoxWidth,
    backgroundColor:'rgba(246,247,248,1)',
    flexDirection:'row'
  },
  contentBox:{
    flexDirection:'column',
    width:BoxWidth,
    height:'auto',
    backgroundColor:'rgba(246,247,248,1)',
    alignItems:'flex-start',
  },
  content:{
    borderColor:'black',
    width:BoxWidth-10,
    height:'auto',
    borderRadius:5,
    borderWidth:1,
    backgroundColor:'white',
  },
  timeBox:{
    flexDirection:'row',
    width:BoxWidth,
    height:'auto',
  },
  ScoreView:{
    flexDirection:'column',
    height:'auto',
    width:BoxWidth,
    alignSelf:'flex-start',
    alignItems:'flex-start',
  },
  imgView:{
    height:50,
    width:BoxWidth,
  }
})