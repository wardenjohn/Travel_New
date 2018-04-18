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
            // <ScrollView style={{flex:1,alignSelf:'center'}}>
            //     <View style={styles.common}>
            //         <View style={styles.common}> 
            //             <Text style={{fontSize:20,fontStyle:"italic",color:"black"}}>
            //                 {params.data.title}
            //             </Text>
            //         </View>
            //         <Text>{params.data.content}</Text>
            //     </View>
            // //  </ScrollView>
            <ScrollView >
                <View style={styles.contain}>
                    <View style={[styles.block,styles.common,{marginTop:20,height:50,}]}>
                        <Text style={styles.title}>
                            {params.data.title}
                        </Text>
                    </View>
                    
                    <View style={[styles.block,{marginTop:20}]}>
                        <Text style={{}}>
                            {params.data.content}
                        </Text>
                    </View>
                    <View style={{margin:10,flexDirection:"row-reverse"}}>
                        <Text style={{fontSize:15}}>
                            {params.data.time}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    common:{
        alignContent:'center',
        flexDirection:"row",
        justifyContent:'center',
    },
    block:{
        
        width:ScreenWidth,
        paddingLeft:10,
        paddingRight:10
    },
    title:{
        fontSize:30,
        color:"black",
    }
});