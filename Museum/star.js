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

export default class StarScore extends Component {
  // 构造  
  constructor(props) {
    super(props);
    // 初始状态  
    this.state = {
      totalScore: 5, // 总分值  
      currentScore: 0, // 分值  
      data:[
          require('./../Image/star_r.png'),
          require('./../Image/star_red.png'),
        require('./../Image/star_b.png'),
        require('./../Image/star_blue.png'),
        require('./../Image/star_g.png'),
        require('./../Image/star_green.png'),
      ],
    }
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', width: width, height: 30, marginBottom:0,marginLeft: 100, }}>
        {this._renderBody()}
      </View>
    );
  }

  _renderBody() {
    let images = [];
    for (var i = 1; i <= this.state.totalScore; i++) {
      let currentCount = i;
      images.push(
        <View key={"i" + i}>
          <TouchableOpacity onPress={(i) => { this._score(currentCount) }}>
            <Image source={this.state.data[this.props.value*2]} style={[styles.commen,{  }]} />
            {this._renderRedStart(i)}
          </TouchableOpacity>
        </View>
      );
    }
    return images;
  }

  _renderRedStart(count) {
    if (count <= this.state.currentScore) {
      return (
        <Image source={this.state.data[this.props.value * 2+1]} style={[styles.commen,{  position: 'absolute' }]} />
      );
    }
  }
    
  _score(i) {
    this.setState({
      currentScore: i
    });
    this.props.selectIndex(i);
  }

}  
var styles = StyleSheet.create({
  commen:{
    width: 30, 
    height: 30,
  }
})