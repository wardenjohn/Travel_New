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
    ScrollView
} from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class detail extends Component{
    constructor(props){
        super(props);
    
      this.state = {
		  	name:null,
            list:null,
      };
    }
    render(){
        const { params } = this.props.navigation.state;
        return(
            <ScrollView style={{flex:1,alignSelf:'center'}}>
                <View style={styles.common}>
                    <View style={styles.common}> 
                        <Text style={{fontSize:20,fontStyle:"italic",color:"black"}}>
                            {params.data.title}
                        </Text>
                    </View>
                    <Text>{params.data.content}</Text>
                </View>
             </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    common:{
        alignContent:'center',
        justifyContent:'center',
        width:ScreenWidth,
    }
});