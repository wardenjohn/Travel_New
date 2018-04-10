import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Input,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Icon extends Component {
    render() {
        return (
            <View>
                <View style={styles.go}>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    go: {
        width: 18,
        height: 18,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: "blue",
        marginLeft: 10,
        transform: [{ rotate: "45deg" }]//将一个矩形框旋转45°


    }
});