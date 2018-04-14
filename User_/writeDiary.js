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
    LinearGradient,
    TextInput,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import './../globalcontent.js'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class Write extends Component {
    constructor(props){
        super(props);

        this.state={
            userid:0,
            username:null,
            title:null,
            content:null,
        }
    }

    _clear(){
        this.setState({content:'请在此输入你的日记'});
    }

    _push(){
        let url = global.getfetch.url + 'push/pushDiary/';
        let formData = new FormData();  
        formData.append("userid",global.id);  
        formData.append("username",global.username);
        formData.append("title",this.state.title);
        formData.append("content",this.state.content);  
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
        })
        .catch((error) => {  
            console.error(error);  
        }); 
    }

    render(){
        const {params} = this.props.navigation.state;
        return(
        <ScrollView
            showsVerticalScrollIndicator={true}
        >
            <View style={{backgroundColor:'rgba(239,239,244,1)'}}>
                <View style={styles.pageBox}>
                    <View style={styles.titleBox}>
                        <TextInput 
                            onChangeText={(text)=>{this.setState({title:text})}}
                            multiline={false}
                            placeholder='请在此输入标题'
                            value={this.state.title}
                        />
                    </View>
    
                    <TextInput
                        onChangeText={(text)=>{this.setState({content:text})}}
                        multiline={true}
                        underlineColorAndroid='transparent' 
                        placeholder='请在此编写你的日记'
                        textAlignVertical='top'
                        value={this.state.content}
                        style={{width:ScreenWidth}}
                    />
               
                    <TouchableOpacity onPress={()=>this._push()}>
                        <Text>confirm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this._clear()}>
                        <Text>clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        );
    }
}
var BoxWidth = ScreenWidth-10;
const styles = StyleSheet.create({
    pageBox:{
        backgroundColor:'rgba(233,234,237,1)',
        borderColor:'rgba(240,240,240,1)',
        borderWidth:1,
        borderRadius:5,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'column',
        width:BoxWidth,
        marginTop:10,
    },
    titleBox:{
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:5,
        borderColor:'rgba(216,214,216,1)',
        width:BoxWidth,
    },
    contentBox:{
        borderColor:'black',
        width:BoxWidth,
        height:'auto',
        borderRadius:5,
        borderWidth:1,
        backgroundColor:'white',
    },
});