import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Alert,
    ListView,
    ScrollView,
    InteractionManager,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

var { width, height } = Dimensions.get('window');

export default class little_star extends Component {
    // 构造  
    constructor(props) {
        super(props);
        // 初始状态  
        this.state = {
            totalScore: 5, // 总分值  
            currentScore: 0, // 分值  
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', width: width, height: 20, marginBottom: 0 }}>
                {this._renderBody()}
            </View>
        );
    }

    _renderBody() {
        let images = [];
        for (var i = 1; i <= this.props.value; i++) {
            let currentCount = i;
            images.push(
                <View key={"i" + i}>
                    <Image source={require('./../Image/little_star.png')} style={{ width: 20, height: 20 }} />
                </View>
            );
        }
        return images;
    }

    _renderRedStart(count) {
        if (count <= this.state.currentScore) {
            return (
                <Image source={require('./../Image/little_star.png')} style={{ width:20, height: 20, position: 'absolute' }} />
            );
        }
    }


}  