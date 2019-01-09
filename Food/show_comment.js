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
    ScrollView
} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Show extends Component {
    constructor(props){
        super(props);
        this.state={
            time:null,
            id : props.id,
            data:{
                
            },
        };
    }
//     <Text>
//          {this.state.data[i].loginname}{this.state.data[i].time}{this.state.data[i].content}
//     </Text>
    _renderBody(){
        let len = this.state.data.length;
        let Comments = [];
        for(var i = 0;i<len;i++){
            Comments.push(
                <View style={[styles.container,{paddingLeft :15,paddingRight:15 ,}]} key={"i" + i}>
                    <View style={{height:'auto',flexDirection: 'row',}}>
                        <Image
                            source={require('./../Image/head.png')}
                        />
                        <Text style={{fontSize:25}}>
                            {this.state.data[i].loginname}
                        </Text>
                    </View>
                    <View style={{height:'auto'}}>
                        <Text style={{fontSize:20}}>评论:</Text>
                        </View>
                    <View style={{ height:'auto',paddingBottom:15}}>
                        <Text style={styles.content}>
                            {this.state.data[i].markContent}
                        </Text>
                    </View>
                    <View style={{ height: 50,flexDirection: 'row', width:ScreenWidth}}>
                        <View style={{ width: ScreenWidth/2}}>
                            <Text>
                                评论日期:{this.state.data[i].time}
                            </Text>
                        </View>
                        <View style={{ width: ScreenWidth / 2 ,flexDirection: 'row',}}>
                            <TouchableOpacity
                                // onPress={() => this._introduction()}
                            >
                                <ImageBackground
                                    style={[styles.common, {width:20,height:20}]}
                                    source={require('./../Image/agree.png')}
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
        return Comments;
    }
    render(){
        return(
        <ScrollView>    
            {this._renderBody()}    
        </ScrollView>
        );
    }
    _getdata() {
        let s = this.state.id;
        let formData = new FormData();
        let url = global.getfetch.url + `mark/getfoodshop_byid/id=${this.state.id}`; 
        fetch(url, {
            method: "get",
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                this.setState({ data: json });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this._getdata();
    }
   
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        height:'auto',
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    content:{
      paddingBottom:5,
      fontSize:15,
    },
});

