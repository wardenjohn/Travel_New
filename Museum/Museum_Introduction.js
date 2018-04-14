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
import { StackNavigator } from 'react-navigation';
import Comments from './../Comments/show_comment.js';
import Icon from './../User_/Icon_Back.js';
import Util from './../News/Util.js';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
export default class introduce extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            show: false,
            dataSource: ds,
            keywords: "故宫博物院",
        };
    }
    render(){
        const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        return(
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.common}>
                        <Text style={styles.head}>{params.data.name}</Text>
                    </View>
                        {/* <View style={{width:50,height:50}}>
                            <Image source={{uri:params.data.img_url}}></Image>
                        </View> */}
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>开放时间</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.opentime}</Text>
                            </View>
                        </View>
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>介绍</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.remark}</Text>
                            </View>
                        </View>
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>区域</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.area}</Text>
                            </View>
                        </View>
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>地址</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.address}</Text>
                            </View>
                        </View>
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>交通</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.transfer}</Text>
                            </View>
                        </View>
                        <View style={styles.containerBox}>
                            <View style={styles.Boxtitle}>
                                <Text style={styles.title}>Tips</Text>
                            </View>
                            <View style={styles.BoxText}>
                                <Text style={styles.text}>{params.data.tips}</Text>
                            </View>
                        </View>
                        
                    <View style={{ height: 55 }}>
                    </View>
                </View>
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
        borderWidth:1,
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