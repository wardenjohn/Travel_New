import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class Food_recommand extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "",
        };
    }
    render(){
        const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        return(
            <ScrollView style={styles.container}>
                <Text>Hello</Text>
            </ScrollView>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    containerBox:{
        // borderWidth:1,
        width:ScreenWidth,
        alignItems:"center",
        alignSelf:"center",
        height:'auto',
    },
    Boxtitle:{
        backgroundColor:'rgba(222,222,222,0.8)',
        width:ScreenWidth,
        height:'auto',
    },
    BoxText:{
        backgroundColor:'rgba(255,255,255,0.8)',
        width:ScreenWidth,
        height:'auto',
    },
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:'rgba(210,216,222,0.8)',
        height:ScreenHeight/12,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    text: {
        marginLeft: 20,
        marginRight: 10,
        color: "#000D22",
        fontSize:15,
    },
    head:{
        fontSize:25,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    }
});