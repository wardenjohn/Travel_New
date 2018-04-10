import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';

var Util ={
    windowSize:{
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height
    },
    getRequest:function(url,successCallback,failCallback){
      fetch(url)
      .then((response) =>response.json())
      .then((responseData)=>successCallback(responseData))
      .catch((err)=>failCallback(err));
    },
    //loading 显示组件的效果
    loading :< ActivityIndicator style={{marginTop:200}}  />

};
export default Util;
