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

export default class Food_Information extends Component {
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
    render() {
        const { params } = this.props.navigation.state;
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.titleback}>
                        <Text style={styles.titlescenic}>{params.data.shop_name}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>美食信息</Text>
                        <Text style={styles.text}>暂无</Text>
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
    common: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    titleback:{
        //backgroundColor:'blue',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    titlescenic:{
        fontSize: 28,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: "bold"
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#000D22"
    },
});